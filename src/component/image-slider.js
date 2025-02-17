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
                <img alt="image preview" src=${this.active}
                     class="placeholder ${this.active ? 'active' : ''}"
                     @click="${this.showcase}"/>
                ${
                        this.asset.screenshots.shot.map(
                                val => html`
                                    <img src=${val} alt="${val}" class=${this.active.endsWith(val) ? 'active' : ''}
                                         @click="${this.showcase}"/>
                                `
                        )
                }
                </div>
        `;


        static styles = css`

            section {

                display: flex;
                flex-wrap: wrap;
                justify-content: flex-end;

                img {
                    width: 325px;
                    height: 200px;
                    margin: 15px;
                    background: white;
                    padding: 15px;
                    border: 1px solid #eee;
                    transition: all .5s;

                    &.placeholder {
                        display: none;
                        position: fixed;
                        top: 25px;
                        right: 50px;
                        width: calc(100vw - 200px);
                        height: calc(100vh - 100px);

                        &.active {
                            display: initial;
                        }
                    }
                }

            }`
    }
);
