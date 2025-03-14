import {unsafeHTML} from "lit/directives/unsafe-html.js";
import {css, html, LitElement} from 'lit';
import {SVGI} from "../_core/svg-icon";
import {theme} from "../theme";


customElements.define('image-slider',


    class ImageSlider extends LitElement {

        static properties = {
            asset: {type: Object},
            active: {type: String}
        };

        constructor() {
            super();
            this.active = "";
        }

        showcase(evt) {
            if (this.active) return this.active = '';
            this.active = evt.target.src;
        }

        showcaseOrder(order = 'next', evt) {
            //
            const shots = this.asset.shots;
            let indexCurr = shots.findIndex(x => x === this.active),
                activeNext = order === 'next'
                    ? shots[indexCurr + 1] || shots[0]
                    : shots[indexCurr - 1] || shots[shots.length - 1]

            // console.log(" >>>>>>>>>> NEXT:: ", activeNext);
            this.active = activeNext;
        }

        render = () => html`
            <section>
                <div class="placeholder ${this.active ? 'active' : ''}">
                    
                    <nav>
                        <button @click="${evt => this.showcaseOrder("prev", evt)}">
                            <strong>prev</strong>
                            <span class="buttonico">
                                ${unsafeHTML(SVGI.PREV({color: "#ccc"}))}
                            </span>
                        </button>
                        <button @click="${evt => this.showcaseOrder("next", evt)}">
                            <strong>next</strong>
                            <span class="buttonico">
                                ${unsafeHTML(SVGI.NEXT({color: "#ccc"}))}
                            </span>
                        </button>
                    </nav>

                    <img alt="image preview" src=${this.active}
                         @click="${this.showcase}"/>
                </div>
                ${
                        this.asset.shots.map(
                                val => html`
                                    <img src=${val} alt="${val}" class=${this.active.endsWith(val) ? 'active' : ''}
                                         @click="${this.showcase}"/>
                                `
                        )
                }
            </section>
        `;


        static styles = [
            theme,
            css`

                section {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: flex-end;

                    .placeholder {
                        position: fixed;
                        //z-index: 150;
                        right: 0;
                        top: 0;
                        display: none;
                        flex-direction: column;
                        justify-content: flex-start;
                        align-items: center;
                        gap: 50px;
                        padding: 25px;
                        width: 100vw;
                        height: 100vh;
                        background: rgba(0, 0, 0, .8);

                        &.active {
                            display: flex;
                        }

                        img {
                            width: initial;
                            height: initial;
                            max-height: 75vh;
                            max-width: 75vw;
                        }
                    }

                    img {
                        width: 325px;
                        height: 200px;
                        margin: 15px;
                        background: white;
                        padding: 10px;
                        border: 1px solid #eee;
                        transition: all .5s;
                    }
                }`
        ]
    }
);
