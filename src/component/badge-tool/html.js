import {html} from 'lit';


const assets = [];


export default (elem) => html`
    <aside id="itools">
        ${elem.entries.map(
                val => html`
                    <a href="#"
                       @click="${evt => _fn(evt, elem.action(val))}">
                        <img src="/images/tech_logos/${val}.jpg" alt="icon ${val}"/>
                    </a>
                `
        )}
    </aside>
`;


const target = "#itools a";
const _fn = (evt, fn) => {
    evt.preventDefault();
    evt.target.matches(target) && fn();
}