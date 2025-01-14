import { LitElement, html, css } from 'lit';

export class BadgeCategory extends LitElement {
    static styles = css`

    `;

    static properties = {
        category: { type: String }
    };

    constructor() {
        super();
        this.category = '';
    }

    render() {
        return html`

        `;
    }

    _handleClick(event) {

    }
}

customElements.define('badge-category', BadgeCategory);
