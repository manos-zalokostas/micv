import {LitElement} from 'lit';
import _html from "./html"
import _style from "./style";


/**
 *
 */
class GlobalMenu extends LitElement {

    static properties = {
        activeElem: {type: String}
    };

    constructor() {
        super();
        this.activeElem = 'INTRO'
    }


    action(idx) {
        console.log('IDX: :', idx)
        console.log('DO SOMETHING ! ')
        this.activeElem = idx
    }

    static styles = _style();
    render = () => _html(this)
}

customElements.define('global-menu', GlobalMenu);
