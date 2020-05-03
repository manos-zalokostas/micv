import * as aux from "./aux.js";

export default () => run();

const run = () => {

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

const DATA = [
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