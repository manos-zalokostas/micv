import {LitElement} from 'lit';
import _html from "./html"
import _style from "./style";


/**
 *
 */
class PageReference extends LitElement {

    static properties = {
        active: {type: Number}
    };

    constructor() {
        super();
        this.active = 1
    }


   action(idx) {
        this.active = idx;
        console.log("--- ", idx);
    }

    static styles = _style();
    render = () => _html(this)
}

customElements.define('page-reference', PageReference);
