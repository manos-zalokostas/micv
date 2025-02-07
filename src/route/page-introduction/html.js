import "/src/component/timeline-interactive"
import "/src/component/quote-author"
import "/src/component/quote-intro"
import "/src/component/intro-menu"
import "/src/component/monitor"
import "/src/component/timeline"
import {html} from 'lit';
import {VIEW} from "../../env";


export default (elem) => html`

    <article
            @intro-transit="${elem.evtIntroTransit}"
            @monitor-content="${elem.evtMonitorContent}">

        <div class="page-nav">
            <intro-menu></intro-menu>
        </div>

        <div id="mi-monitor">
            <joi-monitor></joi-monitor>
        </div>


        <div id="interactive_intro">
            ${
                    (VIEW.LAND.INTRO === elem.activeContent && html`
                        <quote-intro></quote-intro>
                    `)
                    || (VIEW.LAND.RESU === elem.activeContent && html`
                        <joi-timeline></joi-timeline>
                    `)
                    || (VIEW.LAND.DOCU === elem.activeContent && html`
                        <timeline-interactive></timeline-interactive>
                    `)
                    || ''
            }
        </div>

    </article>

`;


const target = "#site_menu a";
const _fn = (evt, fn) => evt.target.matches(target) && fn();
