import VieProject from "/micv/components/monitor/MonitorViewProject.js";
import ViewQuote from "/micv/components/monitor/MonitorViewQuote.js";
import ViewTools from "/micv/components/monitor/MonitorViewTools.js";


const filters = ['project', 'quote', 'tools'];

let index = -1;

let isIntervalBlocked = false;
let isFilterForced = false;


/**
 *
 */
class WCMonitor extends HTMLElement {

    shadow = '';
    hasMount = false;
    img = 1;


    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'})
    }


    connectedCallback() {
        this.render();
    }


    render() {

        this.shadow.innerHTML = `
            <article class="projector">
                <header>
                    <nav>
                        <a data-filter="project">project</a>
                        <a data-filter="quote">quotes</a>
                        <a data-filter="tools">tools</a>
                    </nav>
                </header>
                <main>${displayContent(this)}</main>
                <script>${attacheListeners(this)}</script>
            </article>`

        this.hasMount = true;

    }
}

/**
 *
 * @returns {string}
 */
const displayContent = (o) => {
    let filter = resolveFilter();
    !o.hasMount && rotateContent(o);
    if (filter === 'project') return VieProject()
    if (filter === 'quote') return ViewQuote();
    if (filter === 'tools') return ViewTools();
};


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
const rotateContent = (o) => {
    let interval = setInterval(
        () => {
            if (isIntervalBlocked) {
                clearInterval(interval)
                return;
            }
            replaceContent(o)
        },
        1000 * 5
    )
};


/**
 *
 */
const replaceContent = (o) => {
    o.shadow.querySelector('main').innerHTML = displayContent(o);
};


/**
 *
 * @param evt
 */
const filterContent = (evt) => {
    let {filter} = evt.target.dataset;
    if (filters.includes(filter)) {
        index = filters.indexOf(filter);
        isFilterForced = true;
    }
};


/**
 *
 */
const attacheListeners = (o) => {
    o.shadow.addEventListener('click', evt => {
        // console.log('ADD LISTENERS :  MONITOR')
        if (evt.target.dataset && evt.target.dataset.filter) {
            filterContent(evt);
        }
    })
};


// /*
//
//  */
// const style = `
// <style>
// .projector {
//     overflow-y: auto;
//     border-radius: 10px;
//     box-sizing: border-box;
//     padding: 5px;
//     width:100%;
//     height: 300px;
//     background: #444;
// }
// nav {
//     display: flex;
//     justify-content: flex-end;
// }
// nav a {
//     padding: 0 15px;
//     color: white;
//     background: tomato;
//     margin: 0 2px;
// }
// main {
//     display:flex;
//     width:100%;
//     height:100%;
// }
// </style>
// `;


customElements.define('wc-monitor', WCMonitor);

