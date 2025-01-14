import Visual from "/core/visual.mjs";

function listen() {}


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