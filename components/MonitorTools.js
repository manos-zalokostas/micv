import {LayoutNavigationGlobal, LayoutNavigationProjects} from "./Layout.js";
import * as aux from "./ally.js";

const CSSID = 'content-tools';
let DATA = '';
let dataclone = [];


export default () => run();


/**
 *
 * @returns {*}
 */
const run = () => {
    DATA = makeData();
    return view();
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
 * @returns {*}
 */
const view = () => {

    let a = getDataset();

    a = a.map(o => item(o));

    return (
        `<div class="${CSSID}">
            ${aux.strHtml(aux.strJoin(a))}
            <style>${STYLE}</style>
            <script>${attachListeners()}</script>
        </div>`
    );
}


/**
 *
 * @param o
 * @returns {*}
 */
const item = (o) => {
    return aux.strHtml(`
<section data-tool="${o.title}">
    <h1>${o.title}</h1>
    <img src=${o.image} />
</section>
    `);
}




/**
 *
 */
const attachListeners = () => {

    document.addEventListener('click', (evt) => {
        // console.log('ADD LISTENERS :  GLOBAL SEARCH 12')
// debugger
        if (evt.target.parentElement.dataset.tool) {
            LayoutNavigationGlobal('projects');
            LayoutNavigationProjects('tool', evt.target.parentElement.dataset.tool)
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


const STYLE = `
.${CSSID}  {
    display:flex;
    flex-wrap:wrap;
    // background: red;
    width:100%;
}

.${CSSID}  > section  {
    display: flex;
    flex: 0 0 25%;
    flex-flow:row-reverse;
    box-sizing: border-box;
    padding:5px;
    width: 25%;
    height: 50%;
    justify-content: flex-end;
    }

.${CSSID}  > section h1 {
    width: 40%;
    }

.${CSSID}  > section img {
    width: 60%;
    }


`;
