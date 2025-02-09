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

        <header>
            <intro-menu></intro-menu>
        </header>

        <aside id="mi-monitor">
            <joi-monitor></joi-monitor>
        </aside>

        <main>
            ${
                    (VIEW.LAND.INTRO === elem.activeContent && html`
                        <quote-intro></quote-intro>
                    `)
                    || (VIEW.LAND.RESU === elem.activeContent && html`
                        <joi-timeline></joi-timeline>
                    `)
                    // || (VIEW.LAND.DOCU === elem.activeContent && html`
                    //     <timeline-interactive></timeline-interactive>
                    // `)
                    || ''
            }
        </main>

    </article>

`;