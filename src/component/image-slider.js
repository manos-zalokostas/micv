import {css, html, LitElement} from 'lit';


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

        showcase = evt => {
            if (this.active) return this.active = '';
            this.active = evt.target.src;
        }

        render = () => html`
            <section>
                <div class="placeholder ${this.active ? 'active' : ''}">
                    <nav>
                        <button>next</button>
                        <button>prev</button>
                    </nav>
                    <img alt="image preview" src=${this.active}
                         @click="${this.showcase}"/>
                </div>
                ${
                        this.asset.screenshots.shot.map(
                                val => html`
                                    <img src=${val} alt="${val}" class=${this.active.endsWith(val) ? 'active' : ''}
                                         @click="${this.showcase}"/>
                                `
                        )
                }
            </section>
        `;


        static styles = css`

            section {
                display: flex;
                flex-wrap: wrap;
                justify-content: flex-end;

                .placeholder {
                    position: fixed;
                    z-index: 100;
                    right: 0;
                    top: 0;
                    display: none;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    width: 100vw;
                    height: 100vh;
                    background: rgba(0, 0, 0, .8);
                    
                    nav {
                        color: white;
                    }

                    &.active {
                        display: flex;
                    }
                    
                    img {
                        width: initial;
                        height: initial;
                        max-height: 75vh;
                    }
                }


                img {
                    width: 325px;
                    height: 200px;
                    margin: 15px;
                    background: white;
                    padding: 15px;
                    border: 1px solid #eee;
                    transition: all .5s;

                }

            }`
    }
);
