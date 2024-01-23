import {__GET_CACHED_DATA, __SET_CACHE_DATA} from "./storage";
import {convert_data_to_html} from "./template";
import {_BUILD_SEARCH_LISTS} from "./search";

/**
 *
 */
export async function ajax_retrieve_skill_data() {
    let oXML = __GET_CACHED_DATA('sXML', true);

    if (oXML) {
        __INITIALIZE_PAGE_DATA(oXML);
        process_ajax_data(gmode);
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

        __SET_CACHE_DATA('sXML', xmlDoc, true);
        __INITIALIZE_PAGE_DATA(xmlDoc);
        process_ajax_data(gmode);

    } catch (error) {
        console.error('Error fetching index.xml:', error.message);
    }
}


/**
 *
 * @param {string} field
 */
export function process_ajax_data(field) {
    let p = {};
    let c = {};
    let t = [];

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

    convert_data_to_html(p, c, t, field, procstr);
}


/**
 * Evaluates external URL commands from the window location search.
 * @returns {boolean} Returns true if a command was successfully evaluated, otherwise false.
 */
export function EVAL_EXTERNAL_URL_COMMAND() {
    const search = window.location.search;
    if (search) {
        const entries = search.replace('?', '').split('=');
        const type = entries[0];
        const target = entries[1];

        if (type === 'project') {
            handle_banner_input('project', target);
            return true;
        }
        if (type === 'tool') {
            handle_banner_input('tool', target);
            return true;
        }
    }
    return false;
}


/**
 * Initializes page data.
 * @param data The data to initialize.
 * @private
 */
export function __INITIALIZE_PAGE_DATA(data) {
    let a = [];
    let proj = {};

    let projects = _suffleArray(__GET_ALL_PROJECTS(data)),
        temp_projects = projects.slice(),
        references = _suffleArray(__GET_ALL_REFERENCES(data)),
        temp_references = references.slice(),
        tech_tools = _suffleArray(__GET_ALL_TOOLS(data)),
        temp_tools = tech_tools.slice();

    _BUILD_SEARCH_LISTS(projects, tech_tools);

}


/**
 * Retrieves project data.
 * @returns {{img: string, data: string, name: string, label: string}|Document|any|null} The project data.
 * @private
 */
export function __GET_PROJECT() {
    let item = {};
    let cacheIdx = '';

    if (temp_projects.length === 0) {
        temp_projects = projects.slice();
    }
    item = temp_projects.pop();
    cacheIdx = _toIndex('p_' + item.id);

    if (__GET_CACHED_DATA(cacheIdx, false)) {
        return __GET_CACHED_DATA(cacheIdx, false);
    }

    // Designate the 'PROJECT' object for 1st-PAGE SHOWCASE
    const p = {
        name: item.name,
        label: item.cat,
        img: item.img,
        data: item.desc
    };

    __SET_CACHE_DATA(cacheIdx, p, false);

    return p;
}


/**
 * Retrieves reference data.
 * @returns {{img: string, item: string, data: string, name: string, label: string}|Document|any|null} The reference data.
 * @private
 */
export function __GET_REFERENCE() {
    let o = {};
    let cacheIdx = '';

    if (temp_references.length === 0) {
        temp_references = references.slice();
    }
    o = temp_references.pop();

    // 'project' variable holds the name of the project that was referenced.
    // BUT:: it is not used at the moment
    const project = _toIndex('c_' + o[2]);
    cacheIdx = _toIndex('c_' + o[3]);

    if (__GET_CACHED_DATA(cacheIdx, false)) {
        return __GET_CACHED_DATA(cacheIdx, false);
    }

    let name, data;

    name = o[1];
    data = o[0];

    // THIS WILL BE USED TO REMOVE DUPLICATE ENTRIES FROM THE ARRAY BUILD
    // ckey = name.substring(name.indexOf('">') + 2, name.indexOf(','));

    const c = {
        name: name.substring(0, name.indexOf('</h4>') + 5),
        label: name.substring(name.indexOf('<p>'), name.indexOf('</p>') + 4),
        img: (name.includes('linkedin') > -1) ? 'images/tech_logos/linkedin_user.jpg' : 'images/tech_logos/facebook_user.jpg',
        data: data,
        item: o[3]
    };

    // THROUGH (POP) THE ITEM FROM THE ARRAY, SO THAT IT WILL NOT BE RETRIEVED AGAIN LATER
    __SET_CACHE_DATA(cacheIdx, c, false);

    return c;
}


/**
 * Retrieves tools data.
 * @returns {[]} The tools data.
 * @private
 */
export function __GET_TOOLS() {
    let item = [];
    let t = [];
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
        t.push(temp_tools.pop());
    }

    return t;
}


/**
 * Retrieves all projects from the data.
 * @param data The data to retrieve projects from.
 * @returns {[]} The array containing all projects.
 * @private
 */
export function __GET_ALL_PROJECTS(data) {
    const index = 'all_projects';
    let a = [];
    const aSerialized = [];
    const cache = __GET_CACHED_DATA(index, false);

    if (cache) {
        return JSON.parse(cache).map((serialized) => JSON.parse(serialized));
    }

    let proj = {};

    data.querySelectorAll('.item')
        .forEach((item) => {
            proj = {
                id: item.querySelector('.id').textContent,
                name: item.querySelector('.title').textContent,
                cat: item.querySelector('.category').textContent,
                desc: ".." + item.querySelector('.description span').textContent + "..",
                img: item.querySelector('.screenshots .shot:first-child').textContent
            };

            a.push(proj);
            aSerialized.push(JSON.stringify(proj));
        });

    __SET_CACHE_DATA(index, JSON.stringify(aSerialized), false);

    return a;
}


/**
 * Retrieves all references from the provided data.
 * @param {Document} data - The XML document containing references.
 * @returns {Array} - An array of reference items.
 * @private
 */
export function __GET_ALL_REFERENCES(data) {
    const index = 'all_references';
    let a = [];
    const aSerialized = [];
    let aTemp = [];
    const cache = __GET_CACHED_DATA(index, false);

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

    __SET_CACHE_DATA(index, JSON.stringify(a), false);

    return a;
}


/**
 * Retrieves all tools from the data.
 * @param data The data to retrieve tools from.
 * @returns {[]} The array containing all tools.
 * @private
 */
export function __GET_ALL_TOOLS(data) {
    const index = 'all_tools';
    let a = [];
    const cache = __GET_CACHED_DATA(index, false);

    if (cache) {
        return JSON.parse(cache);
    }

    const keys = new Set();
    let key = '';

    data.querySelectorAll('.tool').forEach((tool) => {
        key = tool.textContent.trim();

        if (key !== '-') {
            keys.add(key);
        }
    });

    a = Array.from(keys);
    __SET_CACHE_DATA(index, JSON.stringify(a), false);

    return a;
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
