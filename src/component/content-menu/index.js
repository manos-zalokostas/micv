import {LitElement} from 'lit';
import _html from "./html"
import _style from "./style";


/**
 *
 */
class ContentMenu extends LitElement {

    static properties = {
        active: {type: Number}
    };

    constructor() {
        super();
        this.active = 1
    }


    action(idx) {
        console.log(">>>>>> ", idx)
        this.active = idx;
        // const domain = target.id.split("_").pop().toUpperCase();
        // const entries = Store.groupByDomain(domain);
        // Content.load("mi-page-content", {tablet: entries, detail: null});
    }

    static styles = _style();
    render = () => _html(this)

}

customElements.define('content-menu', ContentMenu);
