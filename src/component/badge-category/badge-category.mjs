import {LitElement, html, css} from 'lit';
import _html from "./html"
import _style from "./style";

export class BadgeCategory extends LitElement {

    static properties = {
        category: {type: String}
    };

    constructor() {
        super();
        this.category = '';
    }


    static styles = _style();
    render = () => _html(this)

}

customElements.define('badge-category', BadgeCategory);
