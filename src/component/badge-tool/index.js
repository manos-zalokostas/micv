import {LitElement} from 'lit';
import _html from "./html"
import _style from "./style";


/**
 *
 */
class BadgeTool extends LitElement {

    static properties = {
        active: {type: Number},
        entries: {type: Array}
    };

    constructor() {
        super();
        this.active = 1
        // this.entries = [1,2,3,4,6];
    }


    action(idx) {
        this.active = idx;
        console.log("--- ", idx);
    }

    static styles = _style();
    render = () => _html(this)
}

customElements.define('badge-tool', BadgeTool);
