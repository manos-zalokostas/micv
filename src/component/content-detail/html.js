import {html} from 'lit';
import "/src/component/badge-category"
import "/src/component/badge-tool"
import {unsafeHTML} from 'lit/directives/unsafe-html.js';


export default (elem) => {

    console.log(" +++++++++++++++ ", elem.asset);

    return html`

        <div id="ititle">
            <h3>
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
                <span>${elem.asset.title}</span>
            </h3>
        </div>

        <div id="mi-badge-category">
            <badge-category entry="${elem.asset.category}"></badge-category>
        </div>

        <div id="mi-badge-tools">
            <badge-tool .entries="${elem.asset.tools.tool}"></badge-tool>
        </div>

        <div id="ibody">

            <div id="idescription">
                ${unsafeHTML(elem.asset.description)}
            </div>

            <div id="mi-content-slider">
                ${
                    elem.asset.screenshots.shot.map(
                        val => html`
                            <img src=${val} alt="${val}"/>
                        `
                    )
                }
            </div>

        </div>

        <div id="mi-content-extra"></div>
    `;
}

const target = "#site_menu a";
const _fn = (evt, fn) => evt.target.matches(target) && fn();
