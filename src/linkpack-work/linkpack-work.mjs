
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


function listen() {

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