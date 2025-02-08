import {html} from 'lit';
import "/src/component/content-menu";
import "/src/component/content-tablet";
import "/src/component/content-detail";



export default (elem) => html`

    <article
            @content-transit=${elem.evtContentTransit}
            @domain-change=${elem.evtDomainChange}>

        <header>
            <content-menu></content-menu>
        </header>

        <main id="mi-content-wrapper"
              class="mi-transit-detail'">

            <div id="mi-content-control">
                <content-tablet></content-tablet>
            </div>

            <div id="mi-content-detail">
                <content-detail></content-detail>
            </div>

        </main>

    </article>

`;