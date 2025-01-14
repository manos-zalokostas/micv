import {html} from 'lit';


const assets = [];


export default (elem) => html`
    <h4 id="itools">Keywords:
        ${elem.tools.map(
                val => html`
                    <span>
                <a href="#"
                   @click="${evt => _fn(evt, elem.action(val))}"
                >${val}</a>
            </span>`
        )}
    </h4>
`;


const target = "#itools a";
const _fn = (evt, fn) => {
    evt.preventDefault();
    evt.target.matches(target) && fn();
}
