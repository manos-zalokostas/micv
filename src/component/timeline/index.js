import {LitElement} from 'lit';
import _html from "./html"
import _style from "./style";


/**
 *
 */
class JoiTimeline extends LitElement {

    static properties = {
        active: {type: Number}
    };

    constructor() {
        super();
        this.active = 0
    }


    action(idx) {
        this.active = !this.active
    }

    static styles = _style();
    render = () => _html(this)
}

customElements.define('joi-timeline', JoiTimeline);
