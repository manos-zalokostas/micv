import {html, css, LitElement} from 'lit';
import store from "../indexdb/store";


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
            const Store = await store();
            // this.entries = await Item.index("coding")
            this.entries = await Store.query()
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
