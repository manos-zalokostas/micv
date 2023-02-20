import {strJoin} from "/micv/utils/ally.js";


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
        <section id="global-navigation">
            <nav>
            ${strJoin(DATA.pages.map(page => `
            <a data-type=${page}>${page}</a>
`))}
            </nav>
            
            <link href="/components/global/GlobalNavigation.css" rel="stylesheet" />
        </section>
        `

    }
}


const DATA = {
    pages: ['introduction', 'projectlist', 'description', 'reference'],
}


customElements.define('wc-global-navigation', WCGlobalNavigation);
