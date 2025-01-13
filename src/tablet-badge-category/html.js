import {html} from 'lit';


const assets = [
];


export default (elem) => html`
    <p id="icategory">Category:
        <a href="#" class="cat_key" data-key=${o.category}>
            <span>${o.category}</span>
    </p>
`;


const target = "#site_menu a";
const _fn = (evt, fn) => evt.target.matches(target) && fn();
