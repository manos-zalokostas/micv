import {css, html, LitElement} from 'lit';
import {groupByDomain, groupByTool, groupTools, itemById} from "/src/_core/store";
import {DOMA, EVT} from "/src/env";

customElements.define('content-tablet',

    class ContentTablet extends LitElement {

        static properties = {
            tool: {type: String},
            domain: {type: String, default: DOMA.WORK},
            assets: {type: Array}
        };

        #view = '';

        constructor() {
            super();
            this.assets = groupTools();
            this.#view = this._viewTool();
        }

        // Lifecycle method triggered when properties are updated
        updated(changedProperties, x, z) {
            super.updated(changedProperties);

            if (changedProperties.has('domain')) {

                if (this.domain === DOMA.TOOL) {
                    this.assets = groupTools();
                    this.#view = this._viewTool()
                    return;
                }
                this.assets = this._packProjects(groupByDomain(this.domain))
                this.#view = this._viewProject();
            }

            if (changedProperties.has('tool')) {
                debugger
                this.assets = this._packProjects([[this.tool, groupByTool(this.tool)]])
                this.#view = this._viewProject();
            }

        }


        _packProjects(entries) {
            return entries.map(a => a[1])
                .flat()
                .map(([code]) => itemById(code))
        }


        chooseTool(evt) {
            this.tool = evt.target.id;
        }


        chooseProject(evt) {
            evt.preventDefault()
            this.dispatchEvent(
                new CustomEvent(EVT.CONTENT_TRANSIT, {
                    detail: {
                        transit: true,
                        entryId: evt.target.id
                    },
                    bubbles: true,
                })
            )
        }

        // <aside>${Array.isArray(o.tools.tool) && o.tools.tool.map(
        //         tool => html`
        //             <img src='/images/tech_logos/${tool}.jpg' alt="${tool}"/>
        //         `)}
        // </aside>

        _viewProject = () => html`
            <nav class="mi-tablet"
                 style="background-image: url('images/tech_logos/${this.tool}.jpg')">
<!--                <b>${this.tool}</b>-->
                ${this.assets.map((o) => html`
                    <a href="#" id="${o.id}"
                       style="background-image: url('${o.screenshots.shot[0]}')"
                       @click="${this.chooseProject}">
                        <small>${o.category}</small>
                        <strong>${o.title}
                            <small>${o.id}</small>
                        </strong>
                        <p>
                            <span>${o.description.substring(0, 200)}<em>&nbsp&nbsp;...more</em></span>
                        </p>
                            <!--                        <img src="${o.screenshots.shot[0]}" alt=${o.title}>-->
                    </a>
                `)}

            </nav>
        `;

        _viewTool = () => html`
            <nav class="mi-tablet">
                ${this.assets.map(
                        val => html`
                            <a id="${val}" class="mi-tool"
                               style="background-image: url('images/tech_logos/${val}.jpg')"
                               @click="${this.chooseTool}">
                                <h4>${val.replaceAll("_", " ").toUpperCase()}</h4>
                                <img src="/images/tech_logos/${val}.jpg" alt="${val}"/>
                            </a>
                        `
                )}
            </nav>
        `;


        render = () => this.#view


        static styles = css`

            nav {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
                gap: 10px;
                position: relative;
                z-index: 5;
                font-family: Tahoma, Geneva, sans-serif;
                height: 90vh;
                overflow: auto;
                background-image: url(http://localhost:3000/images/tech_logos/access.jpg);
                background-blend-mode: screen;
                background-position: 50%;
                background-color: #eee;
                background-size: 750px;


                a {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    position: relative;
                    color: white;
                    text-decoration: none;
                    padding: 10px;
                    margin: 10px;
                    width: 250px;
                    height: 400px;
                    overflow: hidden;
                    background-color: #444;
                    background-blend-mode: soft-light;
                    background-repeat: no-repeat;
                    background-position: 150px;

                    * {
                        pointer-events: none;
                    }

                    &.mi-tool {
                        color: white;
                        font-size: 24px;
                        width: 225px;
                        height: 175px;
                        background-size: 100%;

                        h4 {
                            //text-align: center;
                        }

                        img {
                            width: 50px;
                            //margin: auto;

                            &:hover {
                                //left: 10%;
                            }
                        }
                    }

                    strong {
                        font-size: 32px;
                        color: tomato;
                        width: 50%;
                    }

                    small {
                        color: goldenrod;
                        width: 50%;
                    }

                    aside {
                        position: absolute;
                        z-index: 6;
                        right: 15px;
                        top: 15px;
                        flex-wrap: wrap;
                        justify-content: flex-end;
                        gap: 5px;
                        width: 46%;

                        img {
                            //position: initial;
                            //opacity: 0;
                            //width: 32px;
                            //height: 32px;
                        }
                    }

                    img {
                        //position: absolute;
                        //z-index: 5;
                        //left: 50%;
                        //opacity: .2;
                        //border: 4px solid gainsboro;
                        //width: 100%;
                    }

                    &:hover {
                        img {
                            left: 40%;
                        }

                        aside {
                            img {
                                opacity: 1;
                            }
                        }
                    }

                }
            }

        `

    }
);
