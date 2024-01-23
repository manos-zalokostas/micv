/**
 * Builds search lists for projects and tools.
 * @param projects The projects to build the search list for.
 * @param tools The tools to build the search list for.
 * @private
 */
export function _BUILD_SEARCH_LISTS(projects, tools) {
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
