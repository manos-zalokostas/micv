import {strJoin} from "/utils/ally.js";


class WCGlobalNavigation extends HTMLElement {

    shadow = '';
    hasMount = false;


    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'})
        this.shadow.addEventListener('click', (evt) => {
                this.dispatchEvent(this.shoutChangePage(evt.target.dataset.type))
            }
        )
        this.shoutChangePage = (type) => new CustomEvent("changePage", {
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
        this.render();
        this.hasMount = true;
    }


    render() {
        this.shadow.innerHTML = `
        <div id="global-navigation">
            <nav>
            ${strJoin(DATA.pages.map(page => `<a data-type=${page}>${page}</a>`))}
            </nav>
            ${style}
        </div>
        `

    }
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
