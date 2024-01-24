// import {__GET_CACHED_DATA, __SET_CACHE_DATA} from "./storage";
import {MonitorLoadNextDataViews} from "./template.mjs";
// import {_BUILD_SEARCH_LISTS} from "./search";

import Storage from "./storage.mjs"
import Search from "../component/search.mjs";

let gmode = 'global',
    projects,
    temp_projects,
    references,
    temp_references,
    tech_tools,
    temp_tools;


/**
 *
 */
async function init() {

    let oXML = Storage.get('sXML', true);
    if (oXML) {
        parseRawDataToGroups(oXML);
        resolveNextEntry(gmode);
        return;
    }
    try {

        const response = await fetch('index.xml');

        if (!response.ok) {
            throw new Error('Failed to fetch index.xml');
        }

        const data = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data, 'application/xml');

        Storage.set('sXML', xmlDoc, true);
        parseRawDataToGroups(xmlDoc);
        resolveNextEntry(gmode);

    } catch (error) {
        console.error('MIERR|', error.message);
    }
}


/**
 * Initializes page data.
 * @param xml The data to initialize.
 * @private
 */
export function parseRawDataToGroups(xml) {
    try {

        let a = [];
        let proj = {};

        projects = _suffleArray(parseGroupProject(xml))
        temp_projects = projects.slice()
        references = _suffleArray(parseGroupReference(xml))
        temp_references = references.slice()
        tech_tools = _suffleArray(parseGroupTool(xml))
        temp_tools = tech_tools.slice()

        Search.list(projects, tech_tools);

    } catch (error) {
        console.error('MIERR|SVC.PARSE', error.message);
        throw new Error(error);
    }
}


/**
 * Retrieves all projects from the data.
 * @param xml The data to retrieve projects from.
 * @returns {[]} The array containing all projects.
 * @private
 */
export function parseGroupProject(xml) {
    try {

        const index = 'all_projects';
        const cache = Storage.get(index, false);
        let a = [];
        const aSerialized = [];


        if (cache) {
            return JSON.parse(cache).map((serialized) => JSON.parse(serialized));
        }

        let proj = {};


        xml.querySelectorAll('item')
            .forEach((item) => {
                proj = {
                    id: item.querySelector('id').textContent,
                    name: item.querySelector('title').textContent,
                    cat: item.querySelector('category').textContent,
                    // desc: ".." + item.querySelector('description span').textContent + "..",
                    desc: ".." + 'XXX-DESC' + "..",
                    img: item.querySelector('screenshots shot:first-child').textContent
                };

                a.push(proj);
                aSerialized.push(JSON.stringify(proj));
            });

        Storage.set(index, JSON.stringify(aSerialized), false);

        return a;

    } catch (error) {
        console.error('MIERR|SVC.PARSE-PROJ', error.message);
        throw new Error(error);
    }
}


/**
 * Retrieves all references from the provided data.
 * @param {Document} data - The XML document containing references.
 * @returns {Array} - An array of reference items.
 * @private
 */
export function parseGroupReference(data) {
    try {

        const index = 'all_references';
        const cache = Storage.get(index, false);
        let aSerialized = [];
        let aTemp = [];
        let a = [];

        debugger

        if (cache) {
            aSerialized = JSON.parse(cache);
            return aSerialized;
        }

        const comments = data.querySelectorAll('item > comment');
        comments.forEach(function (comment) {
            if (comment.textContent !== '-') {
                aTemp = [
                    comment.textContent.substring(comment.textContent.indexOf('<span>') + 6, comment.textContent.indexOf('</span>')),
                    comment.previousElementSibling.textContent,
                    comment.parentElement.querySelector('title').textContent,
                    comment.parentElement.querySelector('id').textContent,
                ];
                a.push(aTemp);
                aSerialized.push(JSON.stringify(aTemp));
            }
        });

        Storage.set(index, JSON.stringify(a), false);

        return a;

    } catch (error) {
        console.error('MIERR|SVC.PARSE-REF', error.message);
        throw new Error(error);
    }
}


/**
 * Retrieves all tools from the data.
 * @param xml The data to retrieve tools from.
 * @returns {[]} The array containing all tools.
 * @private
 */
export function parseGroupTool(xml) {
    try {

        const index = 'all_tools';
        const cache = Storage.get(index, false);
        let a = [];

        debugger

        if (cache) {
            return JSON.parse(cache);
        }

        const keys = new Set();
        let key = '';

        xml.querySelectorAll('tool').forEach((tool) => {
            key = tool.textContent.trim();

            if (key !== '-') {
                keys.add(key);
            }
        });

        a = Array.from(keys);
        Storage.set(index, JSON.stringify(a), false);

        return a;

    } catch (error) {
        console.error('MIERR|SVC.PARSE-TOOL', error.message);
        throw new Error(error);
    }
}


/**
 *
 * @param {string} field
 */
export function resolveNextEntry(field) {
    let p = {}, c = {}, t = [];
    let prun = false, crun = false, trun = false;
    let procstr = '';

    if (field === 'global') {
        prun = true;
        crun = true;
        trun = true;
    }

    if (field === 'project' || prun) {
        procstr = 'p';
        p = __GET_PROJECT();
    }
    if (field === 'reference' || crun) {
        procstr += 'c';
        c = __GET_REFERENCE();
    }
    if (field === 'tool' || trun) {
        procstr += 't';
        t = __GET_TOOLS();
    }

    MonitorLoadNextDataViews(p, c, t, field, procstr);
}


/**
 * Retrieves project data.
 * @returns {{img: string, data: string, name: string, label: string}|Document|any|null} The project data.
 * @private
 */
export function __GET_PROJECT() {
    let currProject = {};
    let cacheIdx = '';

    if (temp_projects.length === 0) {
        temp_projects = projects.slice();
    }
    currProject = temp_projects.pop();
    cacheIdx = _toIndex('p_' + currProject.id);

    if (Storage.get(cacheIdx, false)) {
        return Storage.get(cacheIdx, false);
    }

    // Designate the 'PROJECT' object for 1st-PAGE SHOWCASE
    const project = {
        name: currProject.name,
        label: currProject.cat,
        img: currProject.img,
        data: currProject.desc
    };

    Storage.set(cacheIdx, project, false);

    return project;
}


/**
 * Retrieves reference data.
 * @returns {{img: string, item: string, data: string, name: string, label: string}|Document|any|null} The reference data.
 * @private
 */
export function __GET_REFERENCE() {
    let currReference = {};
    let cacheIdx = '';

    if (temp_references.length === 0) {
        temp_references = references.slice();
    }
    currReference = temp_references.pop();

    // 'project' variable holds the name of the project that was referenced.
    // BUT:: it is not used at the moment
    const project = _toIndex('c_' + currReference[2]);
    cacheIdx = _toIndex('c_' + currReference[3]);

    if (Storage.get(cacheIdx, false)) {
        return Storage.get(cacheIdx, false);
    }

    let name, data;

    name = currReference[1];
    data = currReference[0];

    // THIS WILL BE USED TO REMOVE DUPLICATE ENTRIES FROM THE ARRAY BUILD
    // ckey = name.substring(name.indexOf('">') + 2, name.indexOf(','));

    const reference = {
        name: name.substring(0, name.indexOf('</h4>') + 5),
        label: name.substring(name.indexOf('<p>'), name.indexOf('</p>') + 4),
        img: (name.includes('linkedin') > -1) ? 'images/tech_logos/linkedin_user.jpg' : 'images/tech_logos/facebook_user.jpg',
        data: data,
        item: currReference[3]
    };

    // THROUGH (POP) THE ITEM FROM THE ARRAY, SO THAT IT WILL NOT BE RETRIEVED AGAIN LATER
    Storage.set(cacheIdx, reference, false);

    return reference;
}


/**
 * Retrieves tools data.
 * @returns {[]} The tools data.
 * @private
 */
export function __GET_TOOLS() {
    let currTools = [];
    let tools = [];
    let size;

    // Assuming 'skills_preview', '#tool', and 'h4' are classes and tags in the HTML structure
    const skillsPreview = document.getElementById('skills_preview');
    const toolElements = skillsPreview.getElementsByClassName('tool');

    // Assuming the size is the number of 'h4' elements inside each 'tool' element
    size = toolElements.length > 0 ? toolElements[0].getElementsByTagName('h4').length : 0;

    for (let i = 0; i < size; i++) {
        if (temp_tools.length === 0) {
            temp_tools = tech_tools.slice();
        }
        tools.push(temp_tools.pop());
    }

    return tools;
}


/**
 * Converts a string to a cache index.
 * @param {string} str - The input string.
 * @returns {string} - The converted cache index.
 * @private
 */
export function _toIndex(str) {
    return str.toLowerCase().replace(/ /g, '_');
}


/**
 * Shuffles an array randomly.
 * @param {Array} a - The input array.
 * @returns {Array} - The shuffled array.
 * @private
 */
export function _suffleArray(a) {
    const b = [];
    let x = null;

    while (a.length > 0) {
        x = a.splice(Math.floor(Math.random() * a.length), 1);
        b.push(x[0]);
    }

    return b;
}


export default {
    resolveNextEntry,
    gmode,
    init,
}


//
//
// /**
//  * Evaluates external URL commands from the window location search.
//  * @returns {boolean} Returns true if a command was successfully evaluated, otherwise false.
//  */
// export function EVAL_EXTERNAL_URL_COMMAND() {
//     const search = window.location.search;
//     if (search) {
//         const entries = search.replace('?', '').split('=');
//         const type = entries[0];
//         const target = entries[1];
//
//         if (type === 'project') {
//             handle_banner_input('project', target);
//             return true;
//         }
//         if (type === 'tool') {
//             handle_banner_input('tool', target);
//             return true;
//         }
//     }
//     return false;
// }
//
//

