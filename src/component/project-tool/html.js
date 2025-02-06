import {html} from 'lit';
import {unsafeHTML} from "lit/directives/unsafe-html.js";

const PATHIMG = "images/tech_logos";

export default (elem) => {

    const {entries} = elem;

    return html`
        <div id="tools">
            ${Array.isArray(entries)
                    ? entries.map(
                            (val) => html`
                                <a href="${val}">
                                    <img src="${PATHIMG}/${val}.jpg" alt="${val}"/>
                                </a>
                            `
                    )
                    : ''}
        </div>
    `;

}

const target = "#site_menu a";
const _fn = (evt, fn) => evt.target.matches(target) && fn();
