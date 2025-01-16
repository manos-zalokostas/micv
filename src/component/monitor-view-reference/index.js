import {itemByIndex} from "/src/_core/store";
import {LitElement} from 'lit';
import _style from "./style";
import _html from "./html"


/**
 *
 */
class MonitorViewReference extends LitElement {

    static properties = {
        active: {type: Number},
        reference: {type: Object},
    };

    constructor() {
        super();
        this.active = 1;
        // this.reference = Monitor.curr(); // Default reference is the current one
        this.reference = itemByIndex(10);
        console.log(this.reference)
    }


    action(changedProperties) {
        // this.active = idx;
        // if (changedProperties.has('reference')) {
        // Handle reference updates here if necessary
        // }
    }

    static styles = _style();
    render = () => _html(this)
}

customElements.define('monitor-view-reference', MonitorViewReference);
