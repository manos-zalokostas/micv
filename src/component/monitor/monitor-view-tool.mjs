import { html, css, LitElement } from 'lit';
import Monitor from '/component/monitor/monitor.mjs';

class MonitorViewTool extends LitElement {
    static properties = {
        tools: { type: Array },
    };

    constructor() {
        super();
        this.tools = Monitor.curr().tools.tool || []; // Default tools array from the current monitor object
    }

    static styles = css`
    /* Add styles if needed */
  `;

    render() {
        return html`
      <div id="tool" class="mitem">
        <h2>Skills</h2>
        ${this.tools.map(
            val => html`
            <div class="mgroupi">
              <h4>${val}</h4>
            </div>
          `
        )}
      </div>
    `;
    }

    updated(changedProperties) {
        if (changedProperties.has('tools')) {
            // Handle tools updates here if necessary
        }
    }
}

customElements.define('monitor-view-tool', MonitorViewTool);
