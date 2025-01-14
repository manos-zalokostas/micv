import { html, css, LitElement } from 'lit';
import Monitor from '/component/monitor/monitor.mjs';

class MonitorViewReference extends LitElement {
    static properties = {

    };

    constructor() {
        super();

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

    `;
    }

    updated(changedProperties) {
        if (changedProperties.has('reference')) {
            // Handle reference updates here if necessary
        }
    }
}

customElements.define('monitor-view-reference', MonitorViewReference);
