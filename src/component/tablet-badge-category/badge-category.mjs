
let data;


function html(o) {
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


function install(id, data) {

    if(!data) return;
    document.getElementById(id).innerHTML = html(data);
    listen();
}


export default {
    install,
    html,
}