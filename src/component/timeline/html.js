import {html} from 'lit';
import {assets} from "./asset";
import {EVT} from "../../env";


export default (elem) => html`

    <article>

        <fieldset>
            <label>comments</label>
            <input type="checkbox" @click="${elem.action}"/>
        </fieldset>

        <nav>
            <p>
                ${assets.map(
                        ([year, title, info, codes]) => html`

                            <section>

                                <header>
                                    <strong>${year}</strong>
                                    <em>${title}</em>
                                    <small class="${elem.active ? 'active' : ''}">${info}</small>
                                </header>

                                <div>
                                    ${codes && codes.map(code => html`
                                        <button @click="${() => elem.dispatchEvent(
                                                new CustomEvent(EVT.MONITOR_CONTENT, {
                                                    detail: {code},
                                                    bubbles: true,
                                                }))}">
                                            ${code}
                                        </button>
                                    `)}
                                </div>

                            </section>
                        `)}
            </p>

        </div>

    </article>
`;