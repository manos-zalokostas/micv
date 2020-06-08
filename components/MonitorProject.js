import {LayoutNavigationProjectShowcase, LayoutNavigationGlobal} from "./Layout.js";

const CSSID = 'content-project';

export default (o) => run(o);
let DATA = '';


const run = (o) => {
    return view();
}


const getDataset = () => {
    DATA = makeData();
    if (!dataclone.length) cloneData();
    return dataclone.shift();
};


const cloneData = () => {
    dataclone = JSON.parse(JSON.stringify(DATA));
}


const view = () => {

    let o = getDataset();

    return `
    <section data-pid=${o.id} class="${CSSID}">
        <h1>${o.title}</h1>
        <h2>${o.category}</h2>
        <h3>${o.subcategory}</h3>
        <p>${o.description}</p>
        <img src=${o.image} />
        <div>BACKGROUND IMAGE</div>
        <style>${STYLE}</style>
        <script>${attachListeners()}</script>
    </section>
    `;

}



/**
 *
 */
const attachListeners = () => {

    document.addEventListener('click', (evt) => {
        console.log('ADD LISTENERS :  GLOBAL SEARCH 12')
//
        if (evt.target.classList.contains(CSSID)) {
            LayoutNavigationGlobal('projects');
            LayoutNavigationProjectShowcase(evt.target.dataset.pid)
            // cl(evt.target.value)
        }
    });

}


let dataclone = [];


const makeData = () => {

    let domain = 'WEB',
        o = JSON.parse(sessionStorage.MIDATA),
        items = o.items.item,
        domains = items.filter(o => o.domain === domain);

    let data = domains.map(o => {
            return {
                id: o.id,
                title: o.title,
                category: o.category,
                subcategory: o.subcategory,
                description: o.description,
                image: o.image,
            }
        }
    );

    return data;

};


const STYLE = `
.${CSSID} {
// background: blue;
width:100%;
} 
`;