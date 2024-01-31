
function html() {

    return `
            <div id="reference" class='mitem'>
                <h2>References</h2>
                <h3>Instructor</h3>
                <h4>Instructor Title</h4>
                <p>Comment</p>
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