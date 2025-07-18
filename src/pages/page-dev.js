import {groupByDomain, groupByTool, groupProjects, groupTools, itemById, parseDomainSection} from "/src/service/store";
import {html, css, LitElement} from 'lit';
import {STORE} from "../service/env";
import store from "../indexdb/store";


const StoreItem = await store(STORE.ITEM);


const projs = await StoreItem.query(groupProjects),
    tools = await StoreItem.query(groupTools),
    toolsPart = await StoreItem.queryIndex("tools", 'mysql', groupByTool),
    domainPart = await StoreItem.queryIndex("domain", 'WORK', parseDomainSection),
    item = await StoreItem.query('WK06')

// const titles = await StoreItem.queryIndex('title')

customElements.define('page-dev',

    class PageDev extends LitElement {

        static properties = {
            entries: {type: String}
        };

        constructor() {
            super();
            // this.entries = groupProjects()
            // console.log(this.entries)
        }

        async connectedCallback() {
            super.connectedCallback();
        }

        render = () => html`
            <hr/>
            ${_snip(
                    item
            )}
            <hr/>
            ${_snip(
                    itemById("WK06")
            )}
        `;
    }
);


const _snip = (x) => html`
    <code>
        <pre>${_print(x)}</pre>
    </code>
`
const _print = x => JSON.stringify(x, null, 2);
