import {html} from 'lit';
import "/src/component/content-menu";
import "/src/component/content-tablet";
import "/src/component/content-detail";

const assets = [];

const TMP_CSSCLASS = 'mi-transit-detail';
// const TMP_CSSCLASS = '';

export default (elem) => html`

    <section id="mi-page-content-wrap "
             @content-transit=${elem.evtContentTransit}
             @domain-change=${elem.evtDomainChange}>

        <div id="mi-page-content-menu">
            <content-menu></content-menu>
        </div>

        <div id="mi-content-wrapper"
             class="${TMP_CSSCLASS}">

            <div id="mi-content-control">
                <content-tablet></content-tablet>
            </div>

            <div id="mi-content-detail">
                <content-detail></content-detail>
            </div>

        </div>

    </section>

`;


const target = "#site_menu a";
const _fn = (evt, fn) => evt.target.matches(target) && fn();
