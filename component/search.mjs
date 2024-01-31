import Monitor from "./monitor.mjs";

/**
 * Builds search lists for projects and tools.
 * @param projects The projects to build the search list for.
 * @param tools The tools to build the search list for.
 * @private
 */
function list(projects, tools) {
    let htmlProjects = [];
    let htmlTools = [];

    projects.forEach(function (project) {
        htmlProjects.push("<option value='" + project.name + "'>" + project.name + "</option>");
    });

    tools.forEach(function (tool) {
        htmlTools.push("<option value='" + tool + "'>" + tool + "</option>");
    });

    document.querySelector(('#project_list')).innerHTML = htmlProjects.join('');
    document.querySelector(('#skill_list')).innerHTML = htmlTools.join('');
}


/**
 *
 */
function listen() {

    document.addEventListener(
        'click',
        (event) => {
            const elem = event.target;


            // // Input[value=project] click
            // if (elem.matches("#search_radio input[value=project]")) {
            //
            //     document.querySelector(('input[list]')).setAttribute('list', 'project_list');
            // }
            //
            //
            // // // Input[value=skill] click
            // if (elem.matches("#search_radio input[value=skill]")) {
            //     document.querySelector(('input[list]')).setAttribute('list', 'skill_list');
            // }
            //
            //
            // // Input[list] change
            // if (elem.matches("input[list]")) {
            //
            //     if (elem.getAttribute('list') === 'project_list') {
            //         Monitor.select('project', elem.value.split(' ').shift());
            //     }
            //     if (elem.getAttribute('list') === 'skill_list') {
            //         Monitor.select('tool', elem.value.split(' ').shift());
            //     }
            //     document.querySelector("input[list]").value = '';
            // }

        }
    )
}


function html(){
    return `
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
                        </datalist>
                        <datalist id="skill_list">
                        </datalist>
                    </div>
                </div>    
    `

}

export default {
    list,
    listen,
    html,
}