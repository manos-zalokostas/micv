import {groupProjects, itemById, itemByIndex} from "/src/_core/store";
import {unsafeHTML} from "lit/directives/unsafe-html.js";
import {html, css, LitElement} from 'lit';
import {EVT, PAGE} from "../env";
import {theme} from "../theme";

const entries = groupProjects()

/**
 *
 */


customElements.define('monitor-view-project',

    class MonitorViewProject extends LitElement {

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
            // this.loop();
            // console.log(this.project)
        }

        loop() {
            this.timer = setInterval(
                () => {
                    const pid = entries[this.activeIndex][0]
                    this.project = itemById(pid)
                    if (!this.project) this.activeIndex = 0;
                    this.activeIndex++;
                }, 5000
            )
        }

        pause() {
            clearInterval(this.timer)
            this.activeIndex--;
        }

        next() {
            this.activeIndex++;
            if (this.activeIndex > entries.length - 1) this.activeIndex = 0;
            this.project = itemById(entries[this.activeIndex][0])
        }

        prev() {
            this.activeIndex--;
            if (this.activeIndex < 0) this.activeIndex = entries.length - 1;
            this.project = itemById(entries[this.activeIndex][0])
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

        connectedCallback() {
            super.connectedCallback();
            this.loop();
        }

        disconnectedCallback() {
            super.disconnectedCallback();
            this.clear()
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
                        <p>${unsafeHTML(description)}</p>
                        <img src="${shots[0]}" alt="${shots[0]}"/>
                    </article>
                    <aside>
                        ${Array.isArray(tools)
                                ? tools.map(
                                        (val) => html`
                                            <a href="${val}">
                                                <img src="images/tech_logos/${val}.jpg" alt="${val}"/>
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
                            opacity: 0.3;
                            top: 0;
                            right: 0;
                            width: 50%;
                            padding: 15px;
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
                            text-align: left;
                            max-height: 200px;
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
                        gap: 2px;
                        width: 100%;


                        img {
                            max-height: 48px;
                        }
                    }
                }
            `
        ]
    }
);
