import {html} from 'lit';
import {unsafeHTML} from "lit/directives/unsafe-html.js";


const assets = [];


export default (elem) => {

    const {title, section, description, screenshots, tools} = elem.project;

    if(Array.isArray(tools.tool)) tools.tool.length = 15;

    return html`
        <article id="project" class="mitem">
            <h2>${title}</h2>
            <h4>${section}</h4>
            <p>${unsafeHTML(description)}</p>
            <img src="${screenshots.shot[0]}" alt="${screenshots.shot[0]}"/>
        </article>
        <aside >
            ${Array.isArray(tools.tool)
                    ? tools.tool.map(
                            (val) => html`
                                <a href="${val}">
                                    <img src="images/tech_logos/${val}.jpg" alt="${val}"/>
                                </a>
                            `
                    )
                    : ''}
        </aside>
    `;

}

const target = "#site_menu a";
const _fn = (evt, fn) => evt.target.matches(target) && fn();
