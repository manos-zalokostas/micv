import {LitElement} from 'lit';
import _html from "./html"
import _style from "./style";
import {EVT} from "../../env";


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


    action(domain) {
        console.log(">>>>>> ", domain)
        this.active = domain;
        // Child Component (global-menu)
        this.dispatchEvent(new CustomEvent(EVT.DOMAIN_CHANGE, {
            detail: {domain},
            bubbles: true,        // Event travels up the DOM tree
            composed: true        // Event crosses shadow DOM boundaries
        }));

    }

    static styles = _style();
    render = () => _html(this)

}

customElements.define('content-menu', ContentMenu);
