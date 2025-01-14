import {html} from 'lit';
import {groupByDomain} from "../../_service/store";
// const assets = [
//     ['name1', [
//         ['chiildid_1', 'childname_1'],
//         ['chiildid_11', 'childname_11'],
//     ],
//     ],
//     ['name2', [
//         ['chiildid_2', 'childname_2'],
//         ['chiildid_22', 'childname_22'],
//     ],
//     ],
//     ['name3', [
//         ['chiildid_3', 'childname_3'],
//         ['chiildid_33', 'childname_33'],
//     ],
//     ],
// ];

export default (elem) => {
    return html`
        <div class="mi-tablet">
            <h5>${elem.domain}</h5>
            <ul id="${elem.domain}">
                ${
                        elem.assets.map(([name, pack]) => html`
                            <li class="tgroupi">
                                <section class="sublist">
                                    <h4>${name}</h4>
                                    <ul>
                                        ${
                                                pack.map(
                                                        ([childId, childName]) => html`
                                                            <li>
                                                                <a id=${childId}>${childName}</a>
                                                            </li>
                                                        `
                                                )
                                        }
                                    </ul>
                                </section>
                            </li>`
                        )
                }
            </ul>
        </div>
    `;
}

const target = "#site_menu a";
const _fn = (evt, fn) => evt.target.matches(target) && fn();
