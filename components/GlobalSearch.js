import {dq, cl, strJoin} from "./aux.js";
import {groupTools, groupProjects} from "./DataStore.js";
import {LayoutNavigationGlobal, LayoutNavigationProjectShowcase, LayoutNavigationProjects} from "./Layout.js";

const CSSID = '#global-search';


export default (o = null) => run(o);


/**
 *
 * @param cssid
 */
const run = (cssid) => {
    dq(cssid || CSSID).innerHTML = view()
}


/**
 *
 * @returns {string}
 */
const view = () => {
    return `
            <div id="search_radio">
                <div>
                    <label>
                        project
                        <input type="radio" name="introduction-navigation" value="project_list" checked>
                    </label>
                </div>
                <div>
                    <label>
                        skill
                        <input type="radio" name="introduction-navigation" value="tool_list">
                    </label>
                </div>
            </div>
            <div id="search_result">
                <input list="tool_list">
                <datalist id="project_list">
                ${
        strJoin(DATA.listProject.map(a => `<option value="${a[0]}">${a[1]}</option>`))
    }
                </datalist>
                <datalist id="tool_list">
                ${
        strJoin(DATA.listTool.map(name => `<option value="${name}">${name}</option>`))
    }
                </datalist>
            </div>
            <style>${style}</style>
            <script>${attachListeners()}</script>
    `;
}


/**
 *
 */
const attachListeners = () => {

    document.addEventListener('click', (evt) => {
        // console.log('ADD LISTENERS :  GLOBAL SEARCH')
        if (evt.target.name === 'introduction-navigation') {
            // cl('CLICK: ', evt.target.value)
            dq('#search_result input').removeAttribute('list');
            dq('#search_result input').setAttribute('list', evt.target.value)
            dq('#search_radio [checked]').removeAttribute('checked');
            evt.target.setAttribute('checked', true)
        }
    })

    document.addEventListener('change', (evt) => {
        // console.log('ADD LISTENERS :  GLOBAL SEARCH 12')
        if (evt.target.getAttribute('list') === 'project_list') {
            LayoutNavigationGlobal('projects');
            LayoutNavigationProjectShowcase(evt.target.value)
            // cl(evt.target.value)
        }
        if (evt.target.getAttribute('list') === 'tool_list') {
            LayoutNavigationGlobal('projects');
            LayoutNavigationProjects('tool', evt.target.value)
            // cl(evt.target.value)
        }
    });

}


/**
 *
 * @returns {{listProject: [string, string, string, string], listTool: [string, string, string, string]}}
 * @constructor
 */
const DATA = {
    listProject: groupProjects(),
    listTool: groupTools()
}



/*

 */
const style = `
${CSSID}  {
    position: fixed;
    z-index:100;
    top:0;
    right: 40%;;    
    display: flex;
}
${CSSID} > div {
    flex:0.5;
    display: flex;
    place-content: space-evenly;
}
${CSSID} > div input {
    flex: 1;
}
`;

run();
