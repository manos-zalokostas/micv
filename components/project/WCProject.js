import {strJoin} from "/micv/utils/ally.js";
import View from "/micv/components/monitor/MonitorViewProject.js"

export default class WCProject extends HTMLElement {

    shadow = '';
    hasMount = false;
    page = 'introduction'
    layout = 'basic'
    data = [];


    constructor(data) {
        super();
        this.data = data;
        this.shadow = this.attachShadow({mode: 'open'})
    }

    static get observedAttributes() {
        return [
            "layout",
        ];
    }


    connectedCallback() {
        let shadow = this.shadow;
        this.render();
    }


    attributeChangedCallback(attr, prev, next) {

        if (prev !== next) {
            this[attr] = next;
        }

        this.render();
    }


    // html = () => MonitorViewProject()
//     html = () => `
//         <span class="project-exit">x</span>
//         <a class="project" data-pid="tsikis-id">tsikis-name</a>
// `;

    async render() {
        let view;

        if (!this.layout || this.layout === 'basic') {
            const res = await import( "/micv/components/monitor/ViewProjectBasic.js");
            view = res.default;
        }
        if (this.layout === 'extended') {
            const res = await import( "/micv/components/monitor/ViewProjectExtended.js");
            view = res.default;
        }
        if (this.layout === 'verbose') {
            const res = await import( "/micv/components/monitor/ViewProjectVerbose.js");
            view = res.default;
        }

        this.shadow.innerHTML = this.layout
            ? view() + style()
            : ''
    }

}


const style = () => `<style>

    </style>`

customElements.define('wc-project', WCProject);


