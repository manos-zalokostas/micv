import {html} from 'lit';


const assets = [
];


export default (elem) => html`
    <p id="icategory">Category:
        <a href="#" class="cat_key" data-key=${elem.active}
        @click="${evt => _fn(evt, elem.action)}"
        >
            <span>${elem.active}</span>
    </p>
`;


const target = "#icategory .cat_key";
const _fn = (evt, fn) => evt.target.matches(target) && fn();
