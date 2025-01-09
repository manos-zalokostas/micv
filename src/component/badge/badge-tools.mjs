import { LitElement, html, css } from 'lit';

export class BadgeTools extends LitElement {
    static styles = css`
        #itools {
            float: right;
            display: inline;
            font-family: verdana;
            font-size: 0.8em;
            text-align: right;
            padding: 0;
            margin: 0;
            width: 25%;
            position: relative;
            bottom: 0;
            right: 2%;
        }

        #itools span {
            float: right;
            font-family: verdana;
            font-size: 0.8em;
            text-align: right;
            padding: 0;
            margin: 0;
            width: 100%;
        }

        #itools span a {
            float: right;
            display: inline;
            font-family: verdana;
            font-size: 1.1em;
            text-align: right;
            background-color: #555;
            margin: 1px;
            padding: 1%;
            border-radius: 4px;
            text-decoration: none;
            color: white;
        }

        #itools span a:hover {
            background-color: orange;
        }
    `;

    static properties = {
        tools: { type: Object }
    };

    constructor() {
        super();
        this.tools = { tool: [] };
    }

    render() {
        return html`
            <h4 id="itools">Keywords: 
                ${this.tools.tool.map(val => html`<span><a href="#">${val}</a></span>`)}
            </h4>
        `;
    }
}

customElements.define('badge-tools', BadgeTools);
