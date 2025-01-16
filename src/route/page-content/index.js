import {LitElement} from 'lit';
import _html from "./html"
import _style from "./style";
import {itemById, itemByIndex} from "/src/_core/store";

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
        this.active = 1;
        this.transit = false;
        this.visible = false;
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

    evtContentTransit(evt) {
        console.log(' -- CONTENT TRANSIT FUNCTION: ', evt.detail)
        const nodeWrap = this.shadowRoot.querySelector('#mi-content-wrapper');
        const nodeDetail = this.shadowRoot.querySelector('content-detail');
        if (evt.detail.transit) {
            const entry=itemById(evt.detail.entryId);
            console.log("--- ", {entry})
            nodeDetail.asset = entry;
            return nodeWrap.classList.add('mi-transit-detail')
        }
        nodeWrap.classList.remove('mi-transit-detail')
    }

    static styles = _style();
    render = () => _html(this)
}

customElements.define('page-content', PageContent);
