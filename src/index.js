import {LitElement} from 'lit';
import _html from "./html"
import _style from "./style";
import {_DEV, PAGE} from "./env";



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
        this.display = _DEV.PAGE
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
