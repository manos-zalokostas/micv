import ProjectorProject from "./MonitorProject.js";
import ProjectorQuote from "./MonitorQuote.js";
import ProjectorTools from "./MonitorTools.js";
import {dq} from "./aux.js";


const filters = ['project', 'quote', 'tools'];

let rotateFrequency = 1000 * 5;
let index = -1;

let isIntervalBlocked = false;
let isFilterForced = false;


const CSSID = '#introduction-projector';


/**
 *
 * @param o
 */
export default (o = null) => run(o);


/**
 *
 */
const run = () => {
    rotateContent();
    dq(CSSID).innerHTML = view()
}
// const run = () => {
//     return view();
// }


/**
 *
 * @returns {string}
 */
const resolveFilter = () => {
    if (isFilterForced) return filters[index];
    index += 1;
    if (!(filters[index])) index = 0;
    return filters[index];
}


/**
 *
 */
const rotateContent = () => {
    let interval = setInterval(
        () => {
            if (isIntervalBlocked) {
                clearInterval(interval)
                return;
            }
            replaceContent()
        },
        rotateFrequency
    )
};


/**
 *
 */
const replaceContent = () => {
    document.querySelector('main').innerHTML = displayContent();
};


/**
 *
 * @returns {string}
 */
const displayContent = () => {
    let filter = resolveFilter();
    if (filter === 'project') return ProjectorProject();
    if (filter === 'quote') return ProjectorQuote();
    if (filter === 'tools') return ProjectorTools();
    // return ProjectorProject();
    // return ProjectorQuote();
    // return ProjectorTools();

};


/**
 *
 * @param evt
 */
const filterContent = (evt) => {
    let {filter} = evt.target.dataset;
    if (filters.includes(filter)) {
        // console.log(filter);
        index = filters.indexOf(filter);
        isFilterForced = true;
    }
};


/**
 *
 * @returns {string}
 */
const view = () => {

    return `
        <article class="projector">
            <header>
                <nav>
                    <a data-filter="project">project</a>
                    <a data-filter="quote">quotes</a>
                    <a data-filter="tools">tools</a>
                </nav>
            </header>
            <main>${displayContent()}</main>
            <style>${style()}</style>
            <script>${attachLoaders()}</script>
        </article>
    `;
}


/**
 *
 */
const attachLoaders = () => {
    document.addEventListener('click', evt => {
        // console.log('ADD LISTENERS :  MONITOR')
        if (evt.target.dataset && evt.target.dataset.filter) {
            filterContent(evt);
        }
    })
};




/*

 */
const style = () => `
${CSSID} article.projector {
    background: #444;
    border-radius: 10px;
    // border: 4px solid #555;
    box-sizing: border-box;
    padding: 5px;
    width:100%;
    height:100%;
}
${CSSID} nav {
    display: flex;
    justify-content: flex-end;
}
${CSSID} nav a {
    padding: 0 15px;
    color: white;
    background: tomato;
    margin: 0 2px;
}
${CSSID} main {
    display:flex;
    width:100%;
    height:100%;
}
`

// const elem = document.createElement('div');
// elem.innerHTML = run();
// document.body.appendChild(elem);

run();