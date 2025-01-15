import {html} from 'lit';

export default (elem) => {
    return html`
        <div class="mi-tablet">
            <h5>${elem.domain}</h5>
            <ul id="${elem.domain}">
                ${elem.assets.map(([name, pack]) => html`
                    <li class="tgroupi">
                        <section class="sublist">
                            <h4>${name}</h4>
                            <ul>
                                ${pack.map(
                                        ([childId, childName]) => html`
                                            <li>
                                                <a id=${childId}
                                                   @click="${() => elem.dispatchEvent(
                                                           new CustomEvent('page-transit', {
                                                               detail: {
                                                                   transit: true,
                                                                   entryId: childId
                                                               },
                                                               bubbles: true,        // Event travels up the DOM tree
                                                               composed: true        // Event crosses shadow DOM boundaries
                                                           }))
                                                   }">
                                                    ${childName}</a>
                                            </li>
                                        `)}
                            </ul>
                        </section>
                    </li>`)}
            </ul>
        </div>
    `;
}

const target = "#site_menu a";
const _fn = (evt, fn) => evt.target.matches(target) && fn();
