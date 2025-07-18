import {unsafeHTML} from "lit/directives/unsafe-html.js";
import {EVT, PAGE, STORE} from "/src/service/env";
import {groupProjects} from "/src/service/store";
import {theme} from "/src/service/theme";
import {html, css, LitElement} from 'lit';
import store from "../indexdb/store";


customElements.define('monitor-view-project',

    class MonitorViewProject extends LitElement {

        #store = null;
        #entries = null;

        static properties = {
            active: {type: Number},
            project: {type: Object, state: true},
            activeIndex: {type: Number, state: true},
            timer: {type: Object, state: true}
        };

        constructor() {
            super();
            this.active = 1
            this.activeIndex = 0;
            this.project = null;
        }


        async connectedCallback() {
            super.connectedCallback();
            this.#store = await store(STORE.ITEM);
            this.#entries = await this.#store.query(groupProjects);
            this.loop();
        }

        disconnectedCallback() {
            super.disconnectedCallback();
            this.clear()
        }


        loop() {
            this.timer = setInterval(async () => {
                    // const pid = this.#entries[this.activeIndex][0]
                    // this.project = await this.#store.query(pid)
                    this.project = await this.#store.queryAdvance(this.activeIndex);
                    if (!this.project) this.activeIndex = 0;
                    this.activeIndex++;
                }, 5000
            )
        }

        pause() {
            clearInterval(this.timer)
            this.activeIndex--;
        }

        async next() {
            this.activeIndex++;
            if (this.activeIndex > this.#entries.length - 1) this.activeIndex = 0;
            // this.project = await this.#store.query(this.#entries[this.activeIndex][0])
            this.project = await this.#store.queryAdvance(this.activeIndex);
        }

        async prev() {
            this.activeIndex--;
            if (this.activeIndex < 0) this.activeIndex = this.#entries.length - 1;
            // this.project = await this.#store.query(this.#entries[this.activeIndex][0])
            this.project = await this.#store.queryAdvance(this.activeIndex);
        }

        clear() {
            clearInterval(this.timer)
            this.project = null;
        }

        action(idx) {
            this.active = idx;
            // console.log("--- ", idx);
        }

        chooseProject(evt) {

            evt.preventDefault();

            this.dispatchEvent(
                new CustomEvent(EVT.PROJECT_SELECT, {
                        detail: {id: evt.target.id},
                        composed: true,
                        bubbles: true,
                    }
                )
            )
        }


        render = () => {
            if (!this.project) return '';

            const {id, title, section, description, shots, tools, domain} = this.project;
            if (Array.isArray(tools)) tools.length = 15;

            return html`
                <a href="#" id="${id}"
                   @click="${this.chooseProject}">
                    <article id="project" class="mitem">
                        <h2>${title}</h2>
                        <h4>${section}<sup class="pill ${domain.toLowerCase()}">${domain}</sup></h4>
                        <p> ${unsafeHTML(description)}</p>
                        <img src="${shots[0]}" alt="${shots[0]}"/>
                    </article>
                    <aside class="nomob">
                        ${Array.isArray(tools)
                                ? tools.map(
                                        (val) => html`
                                            <a href="${val}">
                                                <img src="/micv/images/tech_logos/${val}.jpg" alt="${val}"/>
                                            </a>
                                        `
                                )
                                : ''}
                    </aside>
                </a>
            `;
        }


        static styles = [
            theme,
            css`
                a {
                    text-decoration: none;

                    * {
                        pointer-events: none;
                    }

                    article {
                        max-width: 75%;

                        img {
                            position: absolute;
                            right: 0;
                            top: 0;
                            opacity: 0.3;
                            height: 100%;
                            width: 45vw;
                        }

                        h2 {
                            text-align: left;
                            text-transform: uppercase;
                            margin-left: 15px;
                            color: tomato;
                        }

                        h4 {
                            text-align: left;
                            margin-left: 15px;
                            color: goldenrod;

                        }

                        p {
                            color: white;
                            font-size: .8em;
                            text-align: left;
                            max-height: 175px;
                            overflow: hidden;
                            padding: 0 10px 10px 25px;
                            margin: 0;
                        }

                    }

                    aside {
                        position: absolute;
                        bottom: 0;
                        right: 25px;
                        display: flex;
                        justify-content: flex-end;
                        gap: 5px;
                        width: 100%;

                        a {
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            padding: 4px 6px;
                            background-color: white;
                            width: 56px;
                            border-radius: 4px;

                            img {
                                max-height: 48px;
                                max-width: 48px;
                            }

                        }
                    }
                }
            `
        ]
    }
);
