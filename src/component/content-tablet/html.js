import {html} from 'lit';
import {itemById} from "../../_core/store";
import {EVT} from "../../env";

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
        <nav class="mi-tablet">

            ${fn(elem).map((o) => html`
                <a href="#" @click="${(evt) => {
                    evt.preventDefault()
                    elem.dispatchEvent(
                            new CustomEvent(EVT.CONTENT_TRANSIT, {
                                        detail: {
                                            transit: true,
                                            entryId: o.id
                                        },
                                        bubbles: true,        // Event travels up the DOM tree
                                    }
                            ))
                }
                }">


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
                </a>
            `)}

        </nav>
    `;
}

