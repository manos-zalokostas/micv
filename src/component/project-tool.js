import {html, css, LitElement} from 'lit';
import {EVT} from "/src/service/env";


/**
 *
 */

customElements.define('project-tool',

    class ProjectTool extends LitElement {

        static properties = {
            active: {type: String},
            entries: {type: Array}
        };

        constructor() {
            super();
            this.active = 'git'
            // this.entries = itemByIndex(5).tools
        }

        changeTool(tool='git') {
            // console.log(">>>>>> ", tool)
            this.active = tool;
            this.dispatchEvent(new CustomEvent(EVT.TOOL_CHANGE, {
                detail: {tool},
                bubbles: true,
                composed: true
            }));

            this.dispatchEvent(
                new CustomEvent(EVT.CONTENT_TRANSIT, {
                    detail: {transit: false},
                    composed: true,
                    bubbles: true,
                }))
        }

        render = () => {
            const PATHIMG = "/micv/images/tech_logos";
            const {entries} = this;

            return html`
                <nav >
                    ${Array.isArray(entries)
                            ? entries.map(
                                    (val) => html`
                                        <a href="${val}"
                                           @click="${(evt) => {
                                               evt.preventDefault();
                                               this.changeTool(val)
                                           }}">

                                            <img src="${PATHIMG}/${val}.jpg" alt="${val}"/>
                                        </a>
                                    `
                            )
                            : ''}
                </nav>
            `;
        }

        static styles = css`
            nav {
                display: flex;
                justify-content: flex-end;
                gap: 2px;

                a {
                    border-radius: 2px;
                    background-color: white;
                    padding: 2px 4px;
                    height: 32px;
                    width: 32px;

                    img {
                        width: 98%;
                        height: 98%;
                    }
                }
            }
        `
    }
);
