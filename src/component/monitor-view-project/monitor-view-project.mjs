import { html, css, LitElement } from 'lit';
import Monitor from '/component/monitor/monitor.mjs';

class MonitorViewProject extends LitElement {
    static properties = {
        project: { type: Object },
    };

    constructor() {
        super();
        this.project = Monitor.curr(); // Default project is the current one
    }

    static styles = css`
    
  `;

    render() {
        const { title, section, description, screenshots, tools } = this.project;
        return html`
      <div id="project" class="mitem">
        <h2>${title}</h2>
        <h4>${section}</h4>
        <div class="mtext">${description}</div>
        <img src="${screenshots.shot[0]}" alt="${screenshots.shot[0]}" />
      </div>
      <div id="project_tools">
        ${Array.isArray(tools.tool)
            ? tools.tool.map(
                (val) => html`
                <a href="${val}">
                  <img src="images/tech_logos/${val}.jpg" alt="${val}" />
                </a>
              `
            )
            : ''}
      </div>
    `;
    }

    updated(changedProperties) {
        if (changedProperties.has('project')) {
            // Handle project updates here if necessary
        }
    }
}

customElements.define('monitor-view-project', MonitorViewProject);
