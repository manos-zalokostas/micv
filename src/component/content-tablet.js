import {css, html, LitElement} from 'lit';
import {groupByDomain, groupByTool, itemById} from "/src/_core/store";
import {EVT} from "/src/env";

// const fn = elem => {
//     console.log(" ASSETS => ", elem.assets)
//     const items = elem.assets
//         .reverse()
//         .map(a => a[1])
//         .flat()
//         .map(([code]) => itemById(code))
//     console.log({items})
//     return items;
// }


customElements.define('content-tablet',

    class ContentTablet extends LitElement {

        static properties = {
            tool: {type: String},
            domain: {type: String, default: 'WORK'},
            assets: {type: Array}
        };

        constructor() {
            super();
            // this.tool = null;
            // this.domain = 'WORK';
            this.assets = groupByDomain(this.domain);
        }

        // Lifecycle method triggered when properties are updated
        updated(changedProperties) {
            super.updated(changedProperties);

            if (changedProperties.has('domain')) {
                this.assets = groupByDomain(this.domain);
            }

            if (changedProperties.has('tool')) {
                this.assets = [[this.tool, groupByTool(this.tool)]]
            }


        }


        action(idx) {
            console.log(idx, {domain: this.domain})
        }


        render = () => html`
            <nav class="mi-tablet">

                ${this.assets
                        .map(a => a[1])
                        .flat()
                        .map(([code]) => itemById(code))
                        .map((o) => html`
                            <a href="#" @click="${(evt) => {
                                // debugger
                                evt.preventDefault()
                                this.dispatchEvent(
                                        new CustomEvent(EVT.CONTENT_TRANSIT, {
                                                    detail: {
                                                        transit: true,
                                                        entryId: o.id
                                                    },
                                                    bubbles: true,        // Event travels up the DOM tree
                                                }
                                        ))
                            }
                            }">


                                <small>${o.category}</small>
                                <strong>${o.title}
                                    <small>${o.id}</small>
                                </strong>
                                <aside>${Array.isArray(o.tools.tool) && o.tools.tool.map(
                                        tool => html`
                                            <img src='/images/tech_logos/${tool}.jpg' alt="${tool}"/>
                                        `)}
                                </aside>
                                <p>
                                    <span>${o.description.substring(0, 200)}<em>&nbsp&nbsp;...more</em></span>
                                </p>
                                <img src=" ${o.screenshots.shot[0]}
                        " alt=${o.title}>
                            </a>
                        `)}

            </nav>
        `;


        static styles = css`

            nav {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-evenly;
                gap: 10px;
                position: relative;
                z-index: 5;
                font-family: Tahoma, Geneva, sans-serif;
                height: 90vh;
                overflow: auto;


                a {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-evenly;
                    position: relative;
                    color: white;
                    text-decoration: none;
                    padding: 10px;
                    min-height: 300px;
                    width: 575px;
                    overflow: hidden;
                    background: #444;

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
                            position: initial;
                            opacity: 0;
                            width: 32px;
                            height: 32px;
                        }
                    }

                    img {
                        position: absolute;
                        z-index: 5;
                        left: 50%;
                        opacity: .2;
                        border: 4px solid gainsboro;
                        width: 100%;

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
