import {html} from 'lit';
import "/src/component/badge-category"
import "/src/component/badge-tool"

const asset = {
    title: 'TITLE 1',
    description: 'DESCRIPTION 1',
}



export default (elem) => html`

    <div id="ititle">
        <h3>
            <span>${asset.title}</span>
        </h3>
    </div>

    <div id="mi-badge-category">
        <badge-category></badge-category>
    </div>

    <div id="mi-badge-tools">
        <badge-tool></badge-tool>
    </div>

    <div id="ibody">

        <div id="idescription">${asset.description}</div>

        <div id="mi-content-slider"></div>

    </div>

    <div id="mi-content-extra"></div>
`;


const target = "#site_menu a";
const _fn = (evt, fn) => evt.target.matches(target) && fn();
