import {html} from 'lit';
import {assets} from "./asset";


export default (elem) => html`
    <div id="resume_cv_field">
        
        <div id="cv_description-control">
            <em>comments</em>
            <input type="checkbox" id="cv_comments"
                   @click="${elem.action}"/>
        </div>

        <div id="resume-wrap">

            <p id="cv_description">
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
                                                new CustomEvent('monitor-content', {
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
    </div>
`;


const target = "#site_menu a";
const _fn = (evt, fn) => evt.target.matches(target) && fn();
