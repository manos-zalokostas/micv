import { html, css, LitElement } from 'lit';
import Monitor from '/component/monitor/monitor.mjs';

class MonitorViewReference extends LitElement {
    static properties = {
        reference: { type: Object },
    };

    constructor() {
        super();
        this.reference = Monitor.curr(); // Default reference is the current one
    }

    static styles = css`
    /* No styles provided in original, but here's the basic structure */
  `;

    render() {
        const { comment, tutor } = this.reference;
        let commentContent = '-';

        if (comment && comment !== '-') {
            const parser = new DOMParser();
            const parsedComment = parser.parseFromString(comment, 'text/html');
            commentContent = parsedComment.body.children[0].outerHTML;
        }

        return html`
      <div id="reference" class="mitem">
        <h2>References</h2>
        <h3>${tutor}</h3>
        <p>${commentContent}</p>
        <img />
      </div>
    `;
    }

    updated(changedProperties) {
        if (changedProperties.has('reference')) {
            // Handle reference updates here if necessary
        }
    }
}

customElements.define('monitor-view-reference', MonitorViewReference);
