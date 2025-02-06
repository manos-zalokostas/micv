import {html} from 'lit';
import "/src/component/intro-menu"
import "/src/component/monitor"
import "/src/component/quote-author"
import "/src/component/quote-intro"
import "/src/component/timeline"
import "/src/component/timeline-interactive"
import {VIEW} from "../../env";

const assets = [];


export default (elem) => html`

    <article
            @intro-transit="${elem.evtIntroTransit}"
            @monitor-content="${elem.evtMonitorContent}">

        <!--        <div id="mi-page-introduction-menu">-->
        <!--            <global-search></global-search>-->
        <!--        </div>-->

        <div id="mi-monitor">
            <joi-monitor></joi-monitor>
        </div>

        <div id="mi-quote-author">
            <quote-author></quote-author>
        </div>

        <intro-menu></intro-menu>

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
                    // || ('DOCU' === elem.activeContent && html`
                    //     - PDF DOCUMENT -
                    // `)
                    || ''
            }
        </div>

    </article>

`;


const target = "#site_menu a";
const _fn = (evt, fn) => evt.target.matches(target) && fn();
