import {html} from 'lit';
import "/src/component/badge-category"
import "/src/component/badge-tool"
import {unsafeHTML} from 'lit/directives/unsafe-html.js';


export default (elem) => {

    return html`
        <div id="mi-content-slider">
            ${
                    elem.asset.screenshots.shot.map(
                            val => html`
                                <img src=${val} alt="${val}" class=${elem.active.endsWith(val) ? 'active' : ''}
                                     @click="${elem.showcase}"/>
                            `
                    )
            }
        </div>
    `;
}

