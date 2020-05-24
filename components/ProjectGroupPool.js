import ProjectGroup from "./ProjectGroup.js";
import {dq, strJoin} from "./aux.js";
import {loadRepetitive} from "./Layout.js";

const CSSID = '#projects-syndication';

export default (type = 'web') => run(type);


/**
 *
 * @param type
 */
const run = (type = 'web') => {
    dq(CSSID).innerHTML = view(type);
}


/**
 *
 * @param domain
 * @returns {string}
 */
const view = (domain) => {
    return `
    <article class="pool-project">${repetitiveContent(domain)}
    <style>${STYLE}</style>
    </article>
    `;
};


/**
 *
 * @param domain
 * @returns {string}
 */
const repetitiveContent = (domain) => {
    let content = strJoin(makeData(domain));

    let strippedContent = loadRepetitive(content);

    return strippedContent;
}


/**
 *
 * @param domain
 * @returns {string[]}
 */
const makeData = (domain) => {

    domain = domain.toUpperCase();

    let o = JSON.parse(sessionStorage.MIDATA)
    let items = o.items.item;
    let domains = items.filter(o => o.domain === domain);

    let sections = domains.map(o => o.section);
    sections = Array.from(new Set(sections));

    let data = [];
    sections.forEach(str => {
        let pack = domains.reduce((acc, o) => {
            if (o.section === str) acc[1].push([o.id, o.title]);
            return acc;
        }, [str, []])
        data.push(pack);
    })

    let groups = data.map((group, i) => ProjectGroup(group, i));

    return groups;
}


const STYLE = `
    article.pool-project {
        display: flex;
        flex-flow: wrap; 
    }
    article.pool-project > section {
        flex-basis: 20%;
        box-sizing:border-box;
        margin:1%;
        padding:2%;
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