import {unsafeHTML} from 'lit/directives/unsafe-html.js';
import "/src/component/badge-category"
import "/src/component/project-tool"
import "/src/component/image-slider"
import "/src/component/badge-tool"
import {html} from 'lit';


export default (elem) => {

    return html`

        <header>

            <div id="ititle">
                <button
                        @click="${() => elem.dispatchEvent(
                                new CustomEvent('content-transit', {
                                    detail: {transit: false},
                                    composed: true,        // Event crosses shadow DOM boundaries
                                    bubbles: true,        // Event travels up the DOM tree
                                }))
                        }">
                    back
                </button>
                <h3>
                    <span>${elem.asset.title}</span>
                </h3>
                <div id="mi-badge-category">
                    <badge-category entry="${elem.asset.category}"></badge-category>
                </div>
            </div>

            <div id="project-tool">
                <project-tool .entries="${elem.asset.tools.tool}"></project-tool>
            </div>

        </header>


        <main>

            <div id="ibody">

                <div id="idescription">
                    ${unsafeHTML(elem.asset.description)}
                </div>

                <image-slider .asset="${elem.asset}"></image-slider>

            </div>


        </main>


        <footer>

            <badge-tool .entries="${elem.asset.tools.tool}"></badge-tool>

        </footer>

        <div id="mi-content-extra"></div>
    `;
}

const target = "#site_menu a";
const _fn = (evt, fn) => evt.target.matches(target) && fn();
