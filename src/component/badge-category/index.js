import {LitElement} from 'lit';
import _html from "./html"
import _style from "./style";


/**
 *
 */
class BadgeCategory extends LitElement {

    static properties = {
        entry: {type: String}
    };

    constructor() {
        super();
        // this.category = '';
    }


    action(idx) {
        // if (window.TabletMenu?.refresh) {
        //     window.TabletMenu.refresh(this.category, 'category');
        //     document.getElementById('context').style.left = '0';
        // } else {
        //     console.warn('TabletMenu not available.');
        // }
    }

    static styles = _style();
    render = () => _html(this)
}

customElements.define('badge-category', BadgeCategory);
