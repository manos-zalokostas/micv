import {css, html, LitElement} from 'lit';


customElements.define('badge-category',
    class BadgeCategory extends LitElement {

        static properties = {
            entry: {type: String}
        };

        constructor() {
            super();
            // this.category = '';
        }


        action(idx) {
        }

        render = () => html`
            <button class="cat_key"
                    @click="${this.action}">
                <span>${this.entry}</span>
            </button>
        `

        static styles = css`
            button {
                color: white;
                font-family: verdana;
                padding: 4px 10px;
                border-radius: 10px;
                border: none;
                outline: none;
                background-color: indianred;
            }
        `
    });
