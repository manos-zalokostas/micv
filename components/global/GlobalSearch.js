import {strJoin} from "/utils/ally.js";
import {groupTools, groupProjects} from "/service/DataStore.js";


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
                console.log('CHANGE => PROJECT-LIST')
            }
            if (evt.target.getAttribute('list') === 'tool-list') {
                console.log('CHANGE => TOOL-LIST')
            }
        })
        this.shoutChangeDescriptionTopic = (topicId) => new CustomEvent("changeDescriptionTopic", {
                bubbles: true,
                cancelable: false,
                composed: true,
                detail: {
                    topicId
                }
            }
        )

    }

    connectedCallback() {
        this.render();
        this.hasMount = true;
    }


    render() {

        this.shadow.innerHTML = `
        <div id="global-search">

            <div id="search-radio">
                <div>
                    <label> project
                        <input type="radio" name="search-topic" value="project-list" checked>
                    </label>
                </div>
                <div>
                    <label> skill
                        <input type="radio" name="search-topic" value="tool-list">
                    </label>
                </div>
            </div>

            <div id="search-result">

                <input name="search-input" list="project-list">

                <datalist id="project-list">
                    ${strJoin(DATA.projects.map(a => `<option value="${a[0]}">${a[1]}</option>`))}
                </datalist>

                <datalist id="tool-list">
                    ${strJoin(DATA.tools.map(name => `<option value="${name}">${name}</option>`))}
                </datalist>

            </div>
            ${style}
        </div>
    `;


    }
}


/**
 *
 * @returns {{projects: [string, string, string, string], tools: [string, string, string, string]}}
 * @constructor
 */
const DATA = {
    projects: groupProjects(),
    tools: groupTools()
}


/*

 */
const style = `
<style>
#global-search {
    display: flex;
}
#search-radio {
    display: flex;
}
/*#search_radio  {*/
/*    position: fixed;*/
/*    z-index:100;*/
/*    top:0;*/
/*    right: 40%;;    */
/*    display: flex;*/
/*}*/
/*#search_radio > div {*/
/*    flex:0.5;*/
/*    display: flex;*/
/*    place-content: space-evenly;*/
/*}*/
/*#search_radio > div input {*/
/*    flex: 1;*/
/*    border:none;*/
/*    border-bottom: 1px solid #888;*/
/*    background: none;*/
/*}*/
</style>
`;

customElements.define('wc-global-search', WCGlobalSearch);
