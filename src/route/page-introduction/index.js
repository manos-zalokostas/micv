import {LitElement} from 'lit';
import _html from "./html"
import _style from "./style";


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
        this.activeContent = 'INTRO'
    }

    action(idx) {
        this.active = idx;
        console.log("--- ", idx);
    }

    evtIntroTransit(evt) {
        this.activeContent = evt.detail.code
    }

    static styles = _style();
    render = () => _html(this)
}

customElements.define('page-introduction', PageIntroduction);
