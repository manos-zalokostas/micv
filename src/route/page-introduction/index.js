import {LitElement} from 'lit';
import _html from "./html"
import _style from "./style";


/**
 *
 */
class PageIntroduction extends LitElement {

    static properties = {
        active: {type: Number}
    };

    constructor() {
        super();
        this.active = 1
        this.visible = false;
    }


   action(idx) {
        this.active = idx;
        console.log("--- ", idx);
    }

    static styles = _style();
    render = () => _html(this)
}

customElements.define('page-introduction', PageIntroduction);
