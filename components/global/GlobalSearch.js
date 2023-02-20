import {strJoin} from "/micv/utils/ally.js";
import {groupTools, groupProjects} from "/micv/service/DataStore.js";


class WCGlobalSearch extends HTMLElement {

    shadow = '';
    hasMount = false;


    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'})
        this.shadow.addEventListener('click', (evt) => {
            if (evt.target.name === 'search-topic') {
                this.shadow.querySelector('[name=search-input]').setAttribute('list', evt.target.value)
            }
        })
        this.shadow.addEventListener('change', (evt) => {

            if (evt.target.getAttribute('list') === 'project-list') {
                this.dispatchEvent(this.shoutChangeDescriptionTopic(evt.target.value));
            }
            if (evt.target.getAttribute('list') === 'tool-list') {
            }
        })
        this.shoutChangeDescriptionTopic = (topicId) => new CustomEvent("changeTopicDescription", {
            bubbles: true, cancelable: false, composed: true, detail: {
                topicId
            }
        })

    }

    connectedCallback() {
        this.render();
        this.hasMount = true;
    }


    render() {

        this.shadow.innerHTML = `
        <section id="global-search">
        
            <div>
                <label> 
                    <span>project</span>
                    <input type="radio" name="search-topic" value="project-list" checked>
                </label>
                
                <label> 
                    <span>skill</span>
                    <input type="radio" name="search-topic" value="tool-list">
                </label>
            </div>            
                            
            <div>
                <input name="search-input" list="project-list">
                    <datalist id="project-list">
                ${strJoin(DATA.projects.map(a => `<option value="${a[0]}">${a[1]}</option>`))}
                </datalist>
                    <datalist id="tool-list">
                ${strJoin(DATA.tools.map(name => `<option value="${name}">${name}</option>`))}
                </datalist>
            </div>            
            
            <link href="/components/global/GlobalSearch.css" rel="stylesheet" />
        
        </section>
    `;
    }
}


/*

 */
const DATA = {
    projects: groupProjects(), tools: groupTools()
}


customElements.define('wc-global-search', WCGlobalSearch);
