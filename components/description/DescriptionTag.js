import {strJoin} from "/micv/utils/ally.js";
import {itemById} from "/micv/service/DataStore.js";



class WCDescriptionTag extends HTMLElement {

    shadow = '';
    hasMount = false;
    pid = 'WB02';
    item = {};
    data = {};



    static get observedAttributes() {
        return ['item'];
    }


    constructor() {
        super();
        this.item = itemById(this.pid);
        this.data = makeData(this.item)
        this.shadow = this.attachShadow({mode: 'open'})
    }


    attributeChangedCallback(attr, prev, next) {
        if (attr === 'item' && prev !== next) {
            this.item = JSON.parse(next)
            this.data= makeData(this.item)
            this.pid = this.item.id;
            this.render();
        }
    }


    connectedCallback() {
        this.render();
        this.hasMount = true;
    }


    render() {

        this.shadow.innerHTML = `
        <section>
            <dl>${
            strJoin(this.data.tools.map(tool => `<dd class="description-tool" data-type="${tool}">${tool}</dd>`))
        }</dl>
        </section>
        <style>
        dl {
            display: flex;
            flex-wrap: wrap;
            justify-content: end;
        }
        </style>
`;

    }
}


/**
 *
 * @param item
 * @returns {{title: (string|string), category: section, tools: (*|[*])}}
 */
const makeData = (item) => {

    return {
        title: item.title,
        category: item.section,
        tools: Array.isArray(item.tools.tool) ? item.tools.tool : [item.tools.tool]
    }
};


customElements.define('wc-description-tag', WCDescriptionTag);
