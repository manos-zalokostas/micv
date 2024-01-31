
function html() {

    return `
            <div id="tool" class='mitem'>
                <h2>Skills</h2>
                <div class='mgroupi'>
                    <h4>Tools</h4>
                </div>
                <div class="mgroupi">
                    <h4>Tools</h4>
                </div>
                <div class='mgroupi'>
                    <h4>Tools</h4>
                </div>
                <div class='mgroupi'>
                    <h4>Tools</h4>
                </div>
                <div class='mgroupi'>
                    <h4>Tools</h4>
                </div>
                <div class='mgroupi'>
                    <h4>Tools</h4>
                </div>
                <div class='mgroupi'>
                    <h4>Tools</h4>
                </div>
                <div class='mgroupi'>
                    <h4>Tools</h4>
                </div>
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