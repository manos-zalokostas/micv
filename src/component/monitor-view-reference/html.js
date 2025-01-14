import {html} from 'lit';


const assets = [];


export default (elem) => {
    const {tutor, commentContent} = elem.reference;
    return html`
        <div id="reference" class="mitem">
            <h2>References</h2>
            <h3>${tutor}</h3>
            <p>${commentContent}</p>
            <img/>
        </div>
    `;
}

const target = "#site_menu a";
const _fn = (evt, fn) => evt.target.matches(target) && fn();
