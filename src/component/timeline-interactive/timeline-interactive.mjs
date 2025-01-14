import Monitor from "/component/monitor/monitor.mjs";
import Layout from "/core/layout.mjs";

function listen() {

    document.addEventListener(
        'click', (event) => {
            const target = event.target;
        }
    )


}

function html() {

    return `

                ${css()}
    `

}


function css() {
    return `
    <style>
    


</style>
    `
}


function install(id) {
    document.getElementById(id).innerHTML = html();
    listen();
}


export default {
    install,
    listen,
    html,
}