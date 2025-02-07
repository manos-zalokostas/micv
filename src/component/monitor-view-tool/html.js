import {html} from 'lit';


const assets = [];


export default (elem) => {
    return html`
        <div id="view-tool" >
            ${elem.tools.map(
                    val => html`
                        <div>
                            <h4>${val.replaceAll("_", " ")}</h4>
                            <img src="/images/tech_logos/${val}.jpg" alt="${val}"/>
                        </div>
                    `
            )}
        </div>
    `;
}

const target = "#site_menu a";
const _fn = (evt, fn) => evt.target.matches(target) && fn();
