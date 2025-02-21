import {css, html, LitElement} from 'lit';
import * as Store from "/src/_core/store";
import {EVT} from "../env";


const asset = {
    work: Store.groupProjects(),
    tools: Store.groupTools(),
    list: ['work', 'skill',]
}


customElements.define('global-search',

    class GlobalSearch extends LitElement {


        static properties = {
            active: {type: String},
            visible: {type: Boolean, default: false},
        };

        constructor() {
            super();
            this.active = '';
        }

        search(evt) {
            this.active = evt.target.value.toLowerCase()
        }


        chooseProject(evt) {
            evt.preventDefault()
            this.visible = false;
            this.dispatchEvent(
                new CustomEvent(EVT.PROJECT_SELECT, {
                        detail: {id: evt.target.dataset.key},
                        composed: true,
                        bubbles: true,
                    }
                )
            )
        }

        chooseTool(evt) {
            evt.preventDefault()
            this.visible = false;

            this.dispatchEvent(
                new CustomEvent(EVT.TOOL_SELECT, {
                        detail: {tool: evt.target.dataset.key},
                        bubbles: true,
                        composed: true
                    }
                )
            )
        }


        render = () => html`
            <section class="${this.visible ? 'active' : ''}">

                <input type="text" placeholder="..search projects or tools"
                       @input="${this.search}"
                       @focus="${(evt) => {
                           this.visible = true
                       }}">

                <nav>
                    ${asset.work.filter(([key, name, img]) => !this.active || name.toLowerCase().includes(this.active))
                            .map(([key, name, img]) => html`
                                <a data-key="${key}" data-type="work"
                                   @click="${this.chooseProject}">
                                    <em>${name}</em>
                                    <img src="${img}" alt="logo ${name}"/>
                                </a>
                            `)}
                    ${asset.tools.filter((name) => !this.active || name.toLowerCase().includes(this.active))
                            .map((name) => html`
                                <a data-key="${name}" data-type="tool"
                                   @click="${this.chooseTool}">
                                    <em>${name.replaceAll("_", " ")}</em>
                                    <img src="/images/tech_logos/${name}.jpg" alt="logo ${name}"/>
                                </a>
                            `)}
                </nav>

            </section>
        `;


        static styles = css`

            section {
                position: absolute;
                z-index: 20;
                right: 0;
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                gap: 20px;
                margin: 0 50px;
                padding: 15px 25px;


                input {
                    display: block;
                    text-align: right;
                    padding: 5px;
                    border: none;
                    outline: none;
                    border-bottom: 2px solid #999;
                }


                nav {
                    display: none;
                    flex-wrap: wrap;
                    justify-content: space-around;
                    align-items: flex-start;
                    padding: 10px 5px 0;
                    max-height: 90vh;
                    overflow: auto;
                    background: rgba(0, 0, 0, 0.6);


                    a {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        margin: 5px;
                        padding: 4px 10px;
                        border-bottom: 1px solid #ddd;
                        width: 250px;
                        background: white;

                        * {
                            pointer-events: none;
                        }


                        em {
                            font-style: normal;
                        }

                        img {
                            width: 75px;
                            height: 75px;
                        }
                    }
                }

                &.active {
                    nav {
                        display: flex;
                    }
                }
            }
        `
    }
);
