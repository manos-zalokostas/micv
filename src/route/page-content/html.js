import {html} from 'lit';
import "/src/component/content-menu";

const assets = [
];


export default (elem) => html`
    <div id="mi-page-content-menu">
        <content-menu></content-menu>
    </div>

    <div id="mi-content-wrapper">

        <div id="mi-content-control" > TABLET</div>

        <div id="mi-content-detail"> DETAIL </div>

    </div>
`;


const target = "#site_menu a";
const _fn = (evt, fn) => evt.target.matches(target) && fn();
