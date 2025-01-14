import {LitElement} from 'lit';
import _html from "./html"
import _style from "./style";

/**
 *
 */
class PageContent extends LitElement {
    // @query("content-tablet") ContentTablet;

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
    }

    evtDomainChange(evt) {
        console.log(' -- DOMAIN CHANGE FUNCTION: ', evt.detail.domain)
        const child = this.shadowRoot.querySelector('content-tablet');
        child.domain = evt.detail.domain;

    }

    static styles = _style();
    render = () => _html(this)
}

customElements.define('page-content', PageContent);
