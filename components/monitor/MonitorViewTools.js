import * as aux from "/micv/utils/ally.js";

const CSSID = 'content-tools';
let dataclone = [];
let DATA = '';


export default () => {
     DATA = makeData();

    let a = getDataset();

    a = a.map(o => viewItem(o));

    return (
        `<div class="${CSSID}">
            ${aux.strHtml(aux.strJoin(a))}
            <script>${attachListeners()}</script>
            <link href="/components/monitor/MonitorViewTools.css" rel="stylesheet"/>
        </div>`
    );
}



/**
 *
 * @param o
 * @returns {*}
 */
const viewItem = (o) => {
    o ||= {};
    return aux.strHtml(`
        <section data-tool="${o.title}">
            <h1>${o.title}</h1>
            <img src=${o.image} />
        </section>
    `);
}




/**
 *
 * @returns {[*, *]}
 */
const getDataset = () => {
    if (!dataclone.length) cloneData();

    return [
        dataclone.shift(),
        dataclone.shift(),
        dataclone.shift(),
        dataclone.shift(),
        dataclone.shift(),
        dataclone.shift(),
        dataclone.shift(),
        dataclone.shift()
    ];
};


/**
 *
 */
const cloneData = () => {
    dataclone = JSON.parse(JSON.stringify(DATA));
}







/**
 *
 */
const attachListeners = () => {

    document.addEventListener('click', (evt) => {
        // console.log('ADD LISTENERS :  GLOBAL SEARCH 12')
//
        if (evt.target.parentElement.dataset.tool) {
            // LayoutNavigationGlobal('projects');
            // LayoutNavigationProjects('tool', evt.target.parentElement.dataset.tool)
        }

    });

}


/**
 *
 * @returns {{image: string, id, title: T}[]}
 */
const makeData = () => {

    let o = JSON.parse(sessionStorage.MIDATA)
    let items = o.items.item;
    // let tools = items.filter(o => o.domain === domain);
    let tools = items.map(o => o.tools.tool);
    tools = tools.filter(a => Array.isArray(a));
    tools = tools.flat();
    tools = Array.from(new Set(tools));
//
    let data = tools.map(str => ({
        id: str.replace('_', ''),
        title: str,
        image: `images/tech_logos/${str}.jpg`
    }))

    return data;

};

