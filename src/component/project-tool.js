import {groupProjects, itemById, itemByIndex} from "/src/_core/store";
import {html, css, LitElement} from 'lit';
import {EVT} from "../env";


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
            this.entries = itemByIndex(5).tools

            // console.log(this.project)
        }

        changeTool(tool='git') {
            // console.log(">>>>>> ", tool)
            this.active = tool;
            // Child Component (global-menu)
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
            const PATHIMG = "images/tech_logos";
            const {entries} = this;

            return html`
                <div id="tools">
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
                </div>
            `;
        }

        static styles = css`
            #tools {
                a {
                    text-decoration: none;

                    img {
                        height: 36px;
                    }
                }
            }
        `
    }
);
