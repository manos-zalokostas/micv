import { html, css, LitElement } from 'lit';
import MonitorViewWelcome from '/component/monitor/monitor-view-welcome.mjs';
import MonitorViewReference from '/component/monitor/monitor-view-reference.mjs';
import MonitorViewProject from '/component/monitor/monitor-view-project.mjs';
import MonitorViewTool from '/component/monitor/monitor-view-tool.mjs';
import * as Store from '/data/store.mjs';
import { $ } from '/core/util.mjs';

class Monitor extends LitElement {
    static styles = css`

    `;


    render() {
        return html`

    `;
    }
}

customElements.define('monitor-view', Monitor);
