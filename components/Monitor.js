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

export default (o = null) => run(o);


const run = (cssid) => {
    // rotateContent();
    dq(cssid || CSSID).innerHTML = view()
}
// const run = () => {
//     return view();
// }

const resolveFilter = () => {
    if (isFilterForced) return filters[index];
    index += 1;
    if (!(filters[index])) index = 0;
    return filters[index];
}


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


const replaceContent = () => {
    document.querySelector('section').innerHTML = displayContent();
};


const displayContent = () => {
    let filter = resolveFilter();
    if (filter === 'project') return ProjectorProject();
    if (filter === 'quote') return ProjectorQuote();
    if (filter === 'tools') return ProjectorTools();

};


const filterContent = (evt) => {
    let {filter} = evt.target.dataset;
    if (filters.includes(filter)) {
        console.log(filter);
        index = filters.indexOf(filter);
        isFilterForced = true;
    }
};


const view = () => {

    return `
        <article class="projector">
            <script>${attachLoaders()}</script>
            <header>
                <nav>
                    <a data-filter="project">project</a>
                    <a data-filter="quote">quotes</a>
                    <a data-filter="tools">tools</a>
                </nav>
                <section>${displayContent()}</section>
            </header>
            <style>${style()}</style>
        </article>
    `;
}


const attachLoaders = () => {
    document.addEventListener('click', evt => {
        if (evt.target.dataset && evt.target.dataset.filter) {
            filterContent(evt);
        }
    })
};

const style = () => `
${CSSID} article.projector {
    background: #444;
    border-radius: 10px;
    border: 4px solid #555;
    box-sizing: border-box;
    padding: 5px;
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
`

// const elem = document.createElement('div');
// elem.innerHTML = run();
// document.body.appendChild(elem);

run();