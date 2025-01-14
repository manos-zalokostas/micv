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
        [...$All(".mi-tablet .tgroupi .sublist a")]
            .forEach($o => $o.addEventListener(
                    'click', (event) => {
                        const entry = Store.itemById($o.id)
                        Content.load("mi-page-content", {tablet: null, detail: entry});
                        Layout.open('projects-content');
                    }
                )
            )
    }

    static styles = _style();
    render = () => _html(this)
}

customElements.define('global-menu', GlobalMenu);
