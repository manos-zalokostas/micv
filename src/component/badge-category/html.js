import {html} from 'lit';


const assets = [
];


export default (elem) => html`
    <button class="cat_key"
            @click="${evt => _fn(evt, elem.action)}">
        <span>${elem.entry}</span>
    </button>
`;


const target = "#icategory a";
const _fn = (evt, fn) => {
    evt.preventDefault();
    evt.target.matches(target) && fn();
}
