import ProjectGroup from "./ProjectGroup.js";
import {dq, strJoin} from "./aux.js";
import {loadRepetitive} from "./Layout.js";
import Projects from "./Projects.js";
import {groupByDomain, groupBySection, groupByTool} from "./DataStore.js";

const CSSID = '#projects-syndication';

let FILTER = 'web';
let CATEGORY = 'domain';


export default (type = 'web', filter = 'domain') => run(type, filter);


/**
 *
 * @param filter
 * @param category
 */
const run = (filter = 'web', category = 'domain') => {

    FILTER = filter;
    CATEGORY = category;

    dq(CSSID).innerHTML = view();
}


/**
 *
 * @param domain
 * @returns {string}
 */
const view = () => {
    return `
    <article class="pool-project">${repetitiveContent()}
    <style>${STYLE}</style>
    </article>
    `;
};


/**
 *
 * @param domain
 * @returns {string}
 */
const repetitiveContent = () => {
    let content = strJoin(makeData());

    let strippedContent = loadRepetitive(content);

    return strippedContent;
}


/**
 *
 * @param FILTER
 * @param type
 * @returns {Uint8Array|BigInt64Array|*[]|Float64Array|Int8Array|Float32Array|Int32Array|Uint32Array|Uint8ClampedArray|BigUint64Array|Int16Array|Uint16Array|string[]}
 */
const makeData = () => {

    let data, groups;

    // CATEGORY = 'tool';
    // FILTER = 'php';

    if (CATEGORY === 'domain') {
        data = groupByDomain(FILTER);
        groups = data.map((group, i) => ProjectGroup(group, i));
        return groups;
    }


    if (CATEGORY === 'section') {
        data = groupBySection(FILTER);
        groups = data.map((group, i) => Projects(group, i));
        return groups;
    }


    if (CATEGORY === 'tool') {
        data = groupByTool(FILTER);
        groups = data.map((group, i) => Projects(group, i));
        return groups;
    }


}



/*

 */
const STYLE = `
    article.pool-project {
        display: flex;
        flex-flow: wrap; 
        justify-content:space-around;
        align-content:center;
        width:100%;
    }
    article.pool-project > section {
        flex-basis: 20%;
        box-sizing:border-box;
        margin:1%;
        padding:2%;
        // height:40%;
    }
`;


const _DATA = [
    'DOMAIN A', [
        [1, 'PROJECT 1'],
        [2, 'PROJECT 2'],
        [3, 'PROJECT 3'],
        [5, 'PROJECT 4'],
    ]
];


// run();