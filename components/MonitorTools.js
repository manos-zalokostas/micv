import * as aux from "./aux.js";
// import ProjectGroup from "./ProjectGroup";

let DATA = '';


export default () => run();

const run = () => {
    DATA = makeData();
    return view();
}

const getDataset = () => {
    if (!dataclone.length) cloneData();
    return [dataclone.shift(), dataclone.shift()];
};


const cloneData = () => {
    dataclone = JSON.parse(JSON.stringify(DATA));
}


// const makeData = (a) => {
//     if (a) return a;
//
//     a = Array(6);
//     return a.fill(DATA);
// }


const view = () => {

    let a = getDataset();

    a = a.map(o => item(o));

    return aux.strHtml(`
    <section>${aux.strJoin(a)}</section>
    `);
}


const item = (o) => {
    return aux.strHtml(`
    <section class="content-tools">
    <h1>${o.title}</h1>
    <img src=${o.image} />
    <div>BACKGROUND IMAGE</div>
    </section>
    `);
}

let dataclone = [];


const makeData = () => {

    let o = JSON.parse(sessionStorage.MIDATA)
    let items = o.items.item;
    // let tools = items.filter(o => o.domain === domain);
    let tools = items.map(o => o.tools.tool);
    tools = tools.filter(a => Array.isArray(a));
    tools = tools.flat();
    tools = Array.from(new Set(tools));

    let data = tools.map(str => ({
        id: str.replace('_', ''),
        title: str,
        image: `images/tech_logos/${str}.jpg`
    }))

//
    return data;


};


const _DATA = [
    {
        id: 'id',
        title: 'title 1',
        image: 'image',
    },
    {
        id: 'id',
        title: 'title 2',
        image: 'image',
    },
    {
        id: 'id',
        title: 'title 3',
        image: 'image',
    },
    {
        id: 'id',
        title: 'title 4',
        image: 'image',
    },
    {
        id: 'id',
        title: 'title 5',
        image: 'image',
    },
    {
        id: 'id',
        title: 'title 6',
        image: 'image',
    },
]


// run();