import {groupProjects, itemById, itemByIndex} from "/src/_core/store";
import {html, css, LitElement} from 'lit';


/**
 *
 */

customElements.define('project-tool',

    class ProjectTool extends LitElement {

        static properties = {
            active: {type: Number},
            entries: {type: Array}
        };

        constructor() {
            super();
            this.active = 1
            this.entries = itemByIndex(5).tools.tool

            console.log(this.project)
        }


        render = () => {
            const PATHIMG = "images/tech_logos";
            const {entries} = this;

            return html`
                <div id="tools">
                    ${Array.isArray(entries)
                            ? entries.map(
                                    (val) => html`
                                        <a href="${val}">
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
