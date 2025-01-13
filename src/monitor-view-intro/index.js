import {LitElement} from 'lit';
import _html from "./html"
import _style from "./style";


/**
 *
 */
class MonitorViewIntro extends LitElement {

    static properties = {
        active: {type: Number}
    };

    constructor() {
        super();
        this.active = 1
    }


   action(idx) {
        this.active = idx;
    }

    static styles = _style();
    render = () => _html(this)
}

customElements.define('monitor-view-intro', MonitorViewIntro);
