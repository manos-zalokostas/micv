import {LitElement} from 'lit';
import _html from "./html"
import _style from "./style";
import {PAGE, VIEW} from "../../env";

/**
 *
 */
class PageIntroduction extends LitElement {

    static properties = {
        active: {type: Number},
        activeContent: {type: String},
    };

    constructor() {
        super();
        this.active = 1
        this.activeContent = VIEW.LAND.INTRO

    }

    action(idx) {
        this.active = idx;
        console.log("--- ", idx);
    }

    evtIntroTransit(evt) {
        debugger
        this.activeContent = evt.detail.code
    }

    evtMonitorContent(evt) {

        console.log(evt.detail)
        const Monitor = this.shadowRoot.querySelector('joi-monitor');
        Monitor.forceConent(evt.detail.code)
    }

    static styles = _style();
    render = () => _html(this)
}

customElements.define('page-introduction', PageIntroduction);
