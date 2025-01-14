
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



function install(id = "mi-monitor-view") {
    document.getElementById(id).innerHTML = html();
    // listen();
}


export default {
    install,
    html,
}