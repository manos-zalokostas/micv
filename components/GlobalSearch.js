import {dq, cl, strJoin} from "./aux.js";

const CSSID = '#global_search';

// let activeImage = 'images/webdes_a1/welcome_page.jpg';


export default (o = null) => run(o);


const run = (cssid) => {
    dq(cssid || CSSID).innerHTML = view()
}


const view = () => {
    return `
        <div id="search">
            <div id="search_radio">
                <div>
                    <label>
                        project
                        <input type="radio" name="global-search" value="project_list" checked>
                    </label>
                </div>
                <div>
                    <label>
                        skill
                        <input type="radio" name="global-search" value="tool_list">
                    </label>
                </div>
            </div>
            <div id="search_result">
                <input list="tool_list">
                <datalist id="project_list">
                ${
        DATA.listProject.map(name => `<option value="${name}">${name}</option>`)
    }
                </datalist>
                <datalist id="tool_list">
                ${
        DATA.listTool.map(name => `<option value="${name}">${name}</option>`)
    }
                </datalist>
            </div>
            <script>${attachListeners()}</script>
        </div>
    `;
}


const attachListeners = () => {

    document.addEventListener('click', (evt) => {
        if (evt.target.name === 'global-search') {
            cl('CLICK: ', evt.target.value)
            dq('#search_result input').removeAttribute('list');
            dq('#search_result input').setAttribute('list', evt.target.value)
            dq('#search_radio [checked]').removeAttribute('checked');
            evt.target.setAttribute('checked', true)
        }
    })

    document.addEventListener('change', (evt) => {
        if (evt.target.getAttribute('list') === 'project_list') {
            cl(evt.target.value)
        }
        if (evt.target.getAttribute('list') === 'tool_list') {
            cl(evt.target.value)
        }
    });

}


const DATA =
    {
        listProject: ['project1', 'project2', 'project3', 'project4'],
        listTool: ['tool1', 'tool2', 'tool3', 'tool4'],
    }


run();
