import PageDescription from "../route/page-description.mjs";
import TabletMenu from "./tablet-menu.mjs";
import Service from "../core/service.mjs";
import Layout from "./layout.mjs";



function html() {

    return `
            <div id="project" class='mitem'>
                <h2>Projects</h2>
                <h3>Project Name</h3>
                <h4>Tech Field</h4>
                <p>Description</p>
                <img/>
            </div>
            ${css()}
    `
}



function css() {
    return `
    <style>
</style>
    `
}

function install(id = "mi-monitor-view") {
    document.getElementById(id).innerHTML = html();
    // listen();
}


export default {
    install,
    html,
}