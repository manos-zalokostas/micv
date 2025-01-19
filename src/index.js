import {LitElement} from 'lit';
import _html from "./html"
import _style from "./style";



/**
 *
 */
class SiteIndex extends LitElement {

    static properties = {
        active: {type: Number},
        display: {type: String}
    };

    constructor() {
        super();
        this.display = 'CONT'
    }

    action(idx) {
        this.active = idx;
        console.log("--- ", idx);
    }


    evtPageTransit(evt) {
        console.log(" >>>  ", evt.detail);
        this.display = evt.detail.code;
    }


    static styles = _style();
    render = () => _html(this)
}

customElements.define('site-index', SiteIndex);
