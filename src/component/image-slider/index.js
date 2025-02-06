import {LitElement} from 'lit';
import _html from "./html"
import _style from "./style";

/**
 *
 */
class ImageSlider extends LitElement {

    static properties = {
        asset: {type: Object},
        active: {type: String}
    };

    constructor() {
        super();
        this.active = "";
    }

    showcase = evt => {
        if (this.active) return this.active = '';
        this.active = evt.target.src;
    }

    static styles = _style();
    render = () => _html(this)
}

customElements.define('image-slider', ImageSlider);
