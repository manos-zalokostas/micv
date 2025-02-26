import {css, html, LitElement} from 'lit';
import * as Store from "/src/_core/store";
import {theme} from "../theme";
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

        _rslvType(id) {
            if (id.startsWith("WK")) return 'work'
            if (id.startsWith("ST")) return 'study'
            return 'tool'
        }

        render = () => html`
            <section class="${this.visible ? 'active' : ''}"
                     @click="${() => this.visible = false}">


                <input type="text" placeholder="..search project / tool"
                       @click="${evt => evt.stopPropagation()}"
                       @input="${this.search}"
                       @focus="${(evt) => {
                           this.visible = true
                       }}">

                <nav>
                    ${asset.work.filter(([key, name, img]) => !this.active || name.toLowerCase().includes(this.active))
                            .map(([key, name, img, id]) => html`
                                <a data-key="${key}" data-type="work"
                                   @click="${this.chooseProject}">
                                    <em>${name}<sup class="pill ${this._rslvType(id)}">${id}</sup> </em>
                                    <img src="${img}" alt="logo ${name}"/>
                                </a>
                            `)}
                    ${asset.tools.filter((name) => !this.active || name.toLowerCase().includes(this.active))
                            .map((name) => html`
                                <a data-key="${name}" data-type="tool"
                                   @click="${this.chooseTool}">
                                    <em>${name.replaceAll("_", " ")}<sup class="pill tool">tool</sup> </em>
                                    <img src="images/tech_logos/${name}.jpg" alt="logo ${name}"/>
                                </a>
                            `)}
                </nav>

            </section>
        `;


        static styles = [
            theme,
            css`

                section {
                    position: absolute;
                    z-index: 20;
                    right: 10px;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                    //gap: 5px;
                    font-family: var(--font);


                    input {
                        margin: 25px 30px 10px;
                        text-align: right;
                        border: none;
                        outline: none;
                        padding: 5px;
                        border-bottom: 2px solid;
                        //background-color: white;
                    }


                    nav {
                        display: none;
                        flex-wrap: wrap;
                        justify-content: space-evenly;
                        align-items: flex-start;
                        padding: 10px 5px 0;
                        max-height: 90vh;
                        overflow: auto;


                        a {
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            gap: 20px;
                            position: relative;
                            margin: 10px;
                            padding: 15px;
                            border-radius: 4px;
                            border-bottom: 1px solid #ddd;
                            width: 250px;
                            background: white;

                            &:hover {
                                text-decoration: underline;
                            }

                            * {
                                pointer-events: none;
                            }


                            em {
                                text-transform: uppercase;
                                font-style: normal;
                                color: #555;

                                sup {
                                    position: absolute;
                                    top: 5px;
                                    left: 0;
                                    font-size: xx-small !important;
                                }
                            }

                            img {
                                width: 75px;
                                height: 75px;
                            }
                        }
                    }

                    &.active {
                        background-color: rgba(0, 0, 0, 0.6);

                        input {
                            background-color: transparent;
                            color: white;
                        }

                        nav {
                            display: flex;
                        }
                    }
                }
            `
        ]
    }
);
