import {html} from 'lit';
import "/src/component/monitor-view-intro"
import "/src/component/monitor-view-project"
import "/src/component/monitor-view-reference"
import "/src/component/monitor-view-tool"

const assets = [];


export default (elem) => html`
    <div id="skills_preview" class="monitor">
        <div id="skill_fields" class="mbuttons">
            <b title="tool">skills</b>
            <b title="project">projects</b>
        </div>

        <div id="skill_controls" class="mcontrols">
            <b title="prev">&lt;</b>
            <b title="pause">||</b>
            <b title="next">&gt;</b>
        </div>

        <ul>
            <li id="mi-monitor-view">
                ${
                        ('INTRO' === elem.activeContent && html`
                            <monitor-view-intro></monitor-view-intro>
                        `)
                        || ('PROJ' === elem.activeContent && html`
                            <monitor-view-project></monitor-view-project>
                        `)
                        || ('REFF' === elem.activeContent && html`
                            <monitor-view-reference></monitor-view-reference>
                        `)
                        || ('TOOL' === elem.activeContent && html`
                            <monitor-view-tool></monitor-view-tool>
                        `)
                }
            </li>
        </ul>
    </div>
`;


const target = "#site_menu a";
const _fn = (evt, fn) => evt.target.matches(target) && fn();
