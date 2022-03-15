import {strJoin} from "/utils/ally.js";


class WCGlobalNavigation extends HTMLElement {

    shadow = '';
    hasMount = false;


    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'})
        this.signalChangePage = (type) => new CustomEvent("changePage", {
                bubbles: true,
                cancelable: false,
                composed: true,
                detail: {
                    type
                }
            }
        )
    }


    connectedCallback() {
        !this.hasMount && attachListeners(this);
        this.render();
    }


    render() {

        this.shadow.innerHTML = view(this);

        this.hasMount = true;

    }
}


const view = (o) => {
    return `
        <div id="global-navigation">
            <nav>
            ${strJoin(DATA.pages.map(page => `<a data-type=${page}>${page}</a>`))}
            </nav>
            ${style}
        </div>
            `;
}


const attachListeners = (o) => {
    o.shadow.addEventListener('click', (evt) => {
            o.dispatchEvent(o.signalChangePage(evt.target.dataset.type))
        }
    )
}


const style = `
<style>
#global-navigation {
    position: fixed;
    z-index: 100;
    right: 0;
    top:  0;
    background: orange;
}
#global-navigation > nav > a {
    padding:10px;
}
nav {
    display: flex;
    place-content: space-evenly;
}
nav > a {
    flex:1;
    color: #555;
    background:white;
    border:1px solid #888;
    text-align:center;
    text-transform: uppercase;
}
</style>
`

const DATA = {
    pages: ['introduction', 'projectlist', 'description', 'reference'],
}


customElements.define('wc-global-navigation', WCGlobalNavigation);
