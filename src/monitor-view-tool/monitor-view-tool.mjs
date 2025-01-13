import { html, css, LitElement } from 'lit';
import Monitor from '/component/monitor/monitor.mjs';

class MonitorViewTool extends LitElement {
    static properties = {
        tools: { type: Array },
    };

    constructor() {
        super();

    }

    static styles = css`
    /* Add styles if needed */
  `;

    render() {
        return html`

    `;
    }

    updated(changedProperties) {
        if (changedProperties.has('tools')) {
            // Handle tools updates here if necessary
        }
    }
}

customElements.define('monitor-view-tool', MonitorViewTool);
