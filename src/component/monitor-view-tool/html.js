import {html} from 'lit';


const assets = [];


export default (elem) => {
    return html`
        <div id="tool" class="mitem">
            ${elem.tools.map(
                    val => html`
                        <div class="mgroupi">
                            <h4>${val}</h4>
                            <img src="/images/tech_logos/${val}.jpg" alt="${val}"/>
                        </div>
                    `
            )}
        </div>
    `;
}

const target = "#site_menu a";
const _fn = (evt, fn) => evt.target.matches(target) && fn();
