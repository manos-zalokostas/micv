import {html} from 'lit';
import "/src/component/intro-menu"
import "/src/component/monitor"
import "/src/component/quote-author"
import "/src/component/quote-intro"


const assets = [];


export default (elem) => html`
    <!--    <global-menu></global-menu>-->
    <!--    <global-search></global-search>-->

    <div id="mi-page-introduction-menu">
        <intro-menu></intro-menu>
    </div>

    <div id="mi-monitor">
        <joi-monitor></joi-monitor>

    </div>

    <div id="mi-quote-author">
        <quote-author></quote-author>
    </div>

    <div id="interactive_intro">
        <quote-intro></quote-intro>
    </div>

`;


const target = "#site_menu a";
const _fn = (evt, fn) => evt.target.matches(target) && fn();
