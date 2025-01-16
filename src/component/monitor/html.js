import {html} from 'lit';
import "/src/component/monitor-view-intro"
import "/src/component/monitor-view-project"
import "/src/component/monitor-view-reference"
import "/src/component/monitor-view-tool"

const assets = {
    auto: [
        ['tool', 'tools', 'TOOL',],
        ['project', 'projects', 'PROJ'],
    ],
    manual: [
        'pause', 'next', 'prev'
    ],
}


export default (elem) => html`
    <div id="skills_preview" class="monitor">
        <div id="skill_fields" class="mbuttons">
            ${assets.auto.map(
                    ([title, label, code]) => html`
                        <button title="${title}"
                                @click="${() => elem.loopContent(code)}">
                            ${label}
                        </button>
                    `)}
        </div>

        <div id="skill_controls" class="mcontrols">
            ${assets.manual.map(
                    val => html`
                        <button title="${val}"
                                @click="${() => elem.controContent(val)}">
                            ${val}
                        </button>
                    `)}
        </div>

        <ul>
            <li id="mi-monitor-view">
                ${
                        // ('INTRO' === elem.activeContent && html`
                        //     <monitor-view-intro></monitor-view-intro>
                        // `)
                        ('PROJ' === elem.activeContent && html`
                            <monitor-view-project></monitor-view-project>
                        `)
                        || ('TOOL' === elem.activeContent && html`
                            <monitor-view-tool></monitor-view-tool>
                        `)
                        || ('REFF' === elem.activeContent && html`
                            <monitor-view-reference></monitor-view-reference>
                        `)
                        || ""
                }
            </li>
        </ul>
    </div>
`;


const target = "#site_menu a";
const _fn = (evt, fn) => evt.target.matches(target) && fn();
