import {LitElement} from 'lit';
import _html from "./html"
import _style from "./style";
import {itemById, itemByIndex} from "/src/_core/store";

/**
 *
 */
class ContentDetail extends LitElement {

    static properties = {
        active: {type: Number},
        asset: {type: Object}
    };

    constructor() {
        super();
        this.active = 1
        this.asset = itemById('WK15')
        console.log(">>> ", this.asset)
    }


   action(idx) {
        this.active = idx;
        console.log("--- ", idx);
    }

    static styles = _style();
    render = () => _html(this)
}

customElements.define('content-detail', ContentDetail);
