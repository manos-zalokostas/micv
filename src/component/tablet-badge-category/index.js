import {LitElement} from 'lit';
import _html from "./html"
import _style from "./style";


/**
 *
 */
class TabletBadgeCategory extends LitElement {

    static properties = {
        active: {type: String}
    };

    constructor() {
        super();
        this.active = 'some-category'
    }


    action(idx) {

        // if (target.tagName === 'A' && target.classList.contains('cat_key')) {
        //     TabletMenu.refresh(target.innerHTML, 'category');
        //     document.getElementById('context').style.left = '0';
        //     event.preventDefault();
        // }

    }

    static styles = _style();
    render = () => _html(this)
}

customElements.define('tablet-badge-category', TabletBadgeCategory);
