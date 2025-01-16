import {html} from 'lit';
import {assets} from "./asset";


export default (elem) => html`
    <div id="resume_cv_field">
        <div id="resume-wrap">

            <h3>
                <span>comments
                    <input type="checkbox" id="cv_comments"
                           @click="${elem.action}"
                    />
                </span>
            </h3>

            <p id="cv_description">
                ${assets.map(
                        ([year, title, info, codes]) => html`
                            <section>
                                ${codes && codes.map(code => html`
                                    <button @click="${() => elem.dispatchEvent(
                                            new CustomEvent('monitor-content', {
                                                detail: {code},
                                                bubbles: true,
                                            }))}">
                                        ${code}
                                    </button>
                                `)}
                                <header>${year}</header>
                                <em>${title}</em>
                                <small class="${elem.active ? 'active' : ''}">${info}</small>
                            </section>
                        `)}
            </p>
        </div>
    </div>
`;


const target = "#site_menu a";
const _fn = (evt, fn) => evt.target.matches(target) && fn();
