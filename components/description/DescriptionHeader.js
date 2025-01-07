import {strJoin} from "/micv/utils/ally.js";
import {itemById} from "/micv/service/DataStore.js";



class WCDescriptionHeader extends HTMLElement {

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
            <h2>${this.data.title}</h2>
            <h3 class = 'description-section' data-type="${this.data.category}"> ${this.data.category}</h3>
            <dl>${
            strJoin(this.data.tools.map(tool => `<dd class="description-tool" data-type="${tool}">${tool}</dd>`))
        }</dl>
        ${style}
        </section>
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


/*

 */
const style = `
<style>
div#project-title > section{
    display:flex;
    flex-wrap: wrap;
    max-height: 100%;
}
div#project-title > section > h2{flex: 0 0 100%;}
div#project-title > section > h3{
    z-index: 10;
    flex: 0 0 40%;
}
div#project-title > section > dl{
    z-index: 10;
    flex: 0 0 60%;
    display: flex;
    max-width: 56%;
    overflow: auto;
    height: 100%;
    flex-flow: wrap;
    justify-content: flex-end;
}
</style>
`;


const _DATA = {
    title: 'PROJECT NAME',
    category: 'CATEGORY 1',
    tools: [
        'tool a',
        'tool b',
        'tool c',
        'tool d',
        'tool e',
        'tool e',
        'tool e',
        'tool e',
        'tool e',
    ]
}


customElements.define('wc-description-header', WCDescriptionHeader);
