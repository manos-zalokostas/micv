import { LitElement, html, css } from 'lit';
import Monitor from "/component/monitor/monitor.mjs";

class GlobalSearch extends LitElement {

    static properties = {
        projects: { type: Array },
        tools: { type: Array },
    };

    constructor() {
        super();
        this.projects = [];
        this.tools = [];
    }

    // Builds search lists for projects and tools
    list(projects, tools) {
        this.projects = projects;
        this.tools = tools;
    }

    connectedCallback() {
        super.connectedCallback();
        this.listen();
    }

    listen() {
        document.addEventListener('click', (event) => {
            const elem = event.target;

            // Input[value=project] click
            if (elem.matches("#search_radio input[value=project]")) {
                this.shadowRoot.querySelector('input[list]').setAttribute('list', 'project_list');
            }

            // Input[value=skill] click
            if (elem.matches("#search_radio input[value=skill]")) {
                this.shadowRoot.querySelector('input[list]').setAttribute('list', 'skill_list');
            }

            // Input[list] change
            if (elem.matches("input[list]")) {
                if (elem.getAttribute('list') === 'project_list') {
                    Monitor.select('project', elem.value.split(' ').shift());
                }
                if (elem.getAttribute('list') === 'skill_list') {
                    Monitor.select('tool', elem.value.split(' ').shift());
                }
                this.shadowRoot.querySelector("input[list]").value = '';
            }
        });
    }

    render() {
        return html`
      <div id="search">
        <div id="search_radio">
          <div>
            <label>
              project
              <input type="radio" name="search" value="project" checked>
            </label>
          </div>
          <div>
            <label>
              skill
              <input type="radio" name="search" value="skill">
            </label>
          </div>
        </div>
        <div id="search_result">
          <input list="project_list">
          <datalist id="project_list">
            ${this.projects.map(project => html`<option value="${project.name}">${project.name}</option>`)}
          </datalist>
          <datalist id="skill_list">
            ${this.tools.map(tool => html`<option value="${tool}">${tool}</option>`)}
          </datalist>
        </div>
      </div>
    `;
    }

    static styles = css`
    #search {
      display: flex;
      flex-direction: column;
      margin: 10px;
    }

    #search_radio {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
    }

    #search_radio label {
      font-size: 16px;
    }

    #search_result {
      display: flex;
      flex-direction: column;
    }

    #search_result input {
      width: 200px;
      padding: 5px;
      margin-top: 5px;
    }

    #search_result datalist {
      max-height: 150px;
      overflow-y: auto;
    }
  `;
}

customElements.define('global-search', GlobalSearch);

export default GlobalSearch;
