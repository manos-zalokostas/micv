import { LitElement, html, css } from 'lit';

export class SamElement extends LitElement {
    static styles = css`
        :host {
            display: block;
            padding: 16px;
            border: 2px solid #000;
            border-radius: 8px;
            font-family: sans-serif;
        }
    `;

    static properties = {
        name: { type: String }
    };

    constructor() {
        super();
        this.name = 'World';
    }

    render() {
        return html`<h1>Hello, ${this.name}!</h1>`;
    }
}

customElements.define('sam-element', SamElement);
