import {html} from 'lit';
import "/src/component/content-menu";
import "/src/component/content-tablet";

const assets = [];



export default (elem) => html`
    
    <section id="mi-page-content-wrap"
             @domain-change=${elem.evtDomainChange}>

        <div id="mi-page-content-menu">
            <content-menu></content-menu>
        </div>

        <div id="mi-content-wrapper">

            <div id="mi-content-control">
                <content-tablet></content-tablet>
            </div>

            <div id="mi-content-detail"> DETAIL</div>

        </div>

    </section>
`;


const target = "#site_menu a";
const _fn = (evt, fn) => evt.target.matches(target) && fn();
