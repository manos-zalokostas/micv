import ProjectGroup from "./ProjectGroup.js";
import {dq, strJoin} from "./aux.js";

const CSSID = '#projects-syndication';

export default (o = null) => run(o);

const run = (cssid) => {
    dq(cssid || CSSID).innerHTML = view();
    // return view();
}


const view = (domain = 'WEB') => {
    return `
    <article class="pool-project">${strJoin(DATA(domain))}
    <style>${STYLE}</style>
    </article>
    `;
};


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


const DATA = (domain) => {


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

    let groups = data.map(group => ProjectGroup(group));

    return groups;
    // let html = ProjectGroup(_DATA);
    // let data = new Array(12);
    // return data.fill(html);
}


const _DATA = [
    'DOMAIN A', [
        [1, 'PROJECT 1'],
        [2, 'PROJECT 2'],
        [3, 'PROJECT 3'],
        [5, 'PROJECT 4'],
    ]
];

run();