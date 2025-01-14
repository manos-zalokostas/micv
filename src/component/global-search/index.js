import {LitElement} from 'lit';
import _html from "./html"
import _style from "./style";


/**
 *
 */
class GlobalSearch extends LitElement {


    static properties = {
        active: {type: String},
    };

    constructor() {
        super();
        this.active = 'project';
    }


    action(list) {
        console.log(">>>>>> VALUE", list)
        this.active = list;
    }

    actionItemSel(value) {
        console.log(">>>>>> VALUE", value)
        // Monitor.select('project', elem.value.split(' ').shift());
    }

    static styles = _style();
    render = () => _html(this)

}

customElements.define('global-search', GlobalSearch);
