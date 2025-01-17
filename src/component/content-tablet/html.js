import {html} from 'lit';
import {itemById} from "../../_core/store";

const fn = elem => {
    console.log(" ASSETS => ", elem.assets)
    const items = elem.assets
        .reverse()
        .map(a => a[1])
        .flat()
        .map(([code]) => itemById(code))
    console.log({items})
    return items;
}


export default (elem) => {
    return html`
        <section class="mi-tablet">

            <!--            <header>-->
                <!--                <strong>${elem.domain === 'work' ? 'desktop' : elem.domain}</strong>-->
            <!--            </header>-->

            <nav>
                ${fn(elem).map((o) => html`
                    <section class="tgroupi">
                        <button @click="${() => elem.dispatchEvent(
                                new CustomEvent('content-transit', {
                                            detail: {
                                                transit: true,
                                                entryId: o.id
                                            },
                                            bubbles: true,        // Event travels up the DOM tree
                                        }
                                ))}">
                            open
                        </button>


                        <small>${o.category}</small>
                        <strong>${o.title}
                            <small>${o.id}</small>
                        </strong>
                        <aside>${Array.isArray(o.tools.tool) && o.tools.tool.map(
                                tool => html`
                                    <img src='/images/tech_logos/${tool}.jpg' alt="${tool}"/>
                                `)}
                        </aside>
                        <p>
                            <span>${o.description.substring(0, 200)}<em>&nbsp&nbsp;...more</em></span>
                        </p>
                        <img src=" ${o.screenshots.shot[0]}
                        " alt=${o.title}>
                    </section>
                `)}
            </nav>

        </section>
    `;
}

const target = "#site_menu a";
const _fn = (evt, fn) => evt.target.matches(target) && fn();
