import {html} from 'lit';


export default (assets, action) => html`
    <ul id="site_menu" @click="${action}">
        ${assets.map((item) => html`
            <li>
                <a title="${item.title}" class="${item.selected ? 'selected' : ''}">
                    ${item.title}
                </a>
            </li>
        `)}
    </ul>
`;
