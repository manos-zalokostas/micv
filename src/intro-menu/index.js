import {LitElement} from 'lit';
import _html from "./html"
import _style from "./style";


/**
 *
 */
class IntroMenu extends LitElement {

    static properties = {
        active: {type: Number}
    };

    constructor() {
        super();
        this.active = 1
    }


    action(idx) {
        console.log(">>>>>> ", idx)
        this.active = idx;

        console.log('CLICKED INTROD PAGE MENU');
        // const target = event.target;
        // const domain = target.id;
        // Layout.openResume(domain);

    }

    static styles = _style();
    render = () => _html(this)

}

customElements.define('intro-menu', IntroMenu);
