import {LitElement} from 'lit';
import _html from "./html"
import _style from "./style";


/**
 *
 */
class GlobalMenu extends LitElement {

    static properties = {
        active: {type: Number}
    };

    constructor() {
        super();
        this.active = 1
    }


   action(idx) {
        this.active = idx;
        console.log("--- ", idx);
        document.addEventListener(
            'click', (event) => {
                const target = event.target;

                // if (target.tagName === 'A' && target.classList.contains('cat_key')) {
                //     TabletMenu.refresh(target.innerHTML, 'category');
                //     document.getElementById('context').style.left = '0';
                //     event.preventDefault();
                // }

            }
        )
    }

    static styles = _style();
    render = () => _html(this)
}

customElements.define('global-menu', GlobalMenu);
