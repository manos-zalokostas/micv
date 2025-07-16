import {html, css, LitElement} from 'lit';
import {groupProjects, itemById} from "../service/store";
import * as Item from "../indexdb/store-item";


customElements.define('page-dev',

    class PageDev extends LitElement {

        static properties = {
            entries: {type: String}
        };

        constructor() {
            super();
            this.entries = groupProjects()
            console.log(this.entries)
        }

        async connectedCallback() {
            super.connectedCallback();
            this.entries = await Item.id('WK06')
        }

        render = () => html`
            <code>
                <pre>
                    ${JSON.stringify(this.entries, null, 2)}
                </pre>
            </code>
        `;
    }
);
