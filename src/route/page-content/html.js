import {html} from 'lit';
import "/src/component/content-menu";
import "/src/component/content-tablet";
import "/src/component/content-detail";
import {_DEV, VIEW} from "../../env";



export default (elem) => html`

    <article
            @content-transit=${elem.evtContentTransit}
            @domain-change=${elem.evtDomainChange}>

        <header>
            <content-menu></content-menu>
        </header>

        <main class="${_DEV.VIEW === VIEW.WORK.CONT ? 'mi-transit-detail' : ''}">

            <div>
                <content-tablet></content-tablet>
            </div>

            <div>
                <content-detail></content-detail>
            </div>

        </main>

    </article>

`;