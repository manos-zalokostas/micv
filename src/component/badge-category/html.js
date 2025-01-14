import {html} from 'lit';


const assets = [
];


export default (elem) => html`
    <p id="icategory">Category:
        <a href="#" class="cat_key" 
           @click="${evt => _fn(evt, elem.action)}">
            <span>${elem.active}</span>
        </a>
    </p>
`;


const target = "#icategory a";
const _fn = (evt, fn) => {
    evt.preventDefault();
    evt.target.matches(target) && fn();
}
