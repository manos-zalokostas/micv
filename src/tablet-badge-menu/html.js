import {html} from 'lit';


const assets = [
];


export default (elem) => html`
    <div class="mi-tablet">
        <h5>WEB</h5>
        <ul id="WEB">
            ${
                    entries.map(
                            ([name, pack]) => `
                <li class="tgroupi" >
                    <section class="sublist">
                        <h4>${name}</h4>
                        <ul>
                           ${pack.map(([childId, childName]) => `<li><a id=${childId}>${childName}</a></li>`).join("")}
                        </ul>
                    </section>
                </li>`
                    ).join("")
            }
        </ul>
    </div>
`;


const target = "#site_menu a";
const _fn = (evt, fn) => evt.target.matches(target) && fn();
