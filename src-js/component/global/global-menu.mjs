import Monitor from "/component/monitor/monitor.mjs";
import Layout from "/core/layout.mjs";


/**
 *
 */
function listen() {
    document.addEventListener(
        'click',
        (event) => {
            const target = event.target;


            if (target.matches("#site_menu a")) {
                const current_page = target.innerHTML;
                Layout.open(current_page);
            }

        }
    )
}


function html() {
// <li><a href=${window.location.href + "?p=reference"} title="certificates">certificates</a></li>
// <li><a href=${window.location.href + "?p=content"} title="projects">projects</a></li>
// <li><a href="/micv"  title="about" class='selected'>about</a></li>

    return `
          <ul id="site_menu">
            <li><a  title="certificates">certificates</a></li>
            <li><a  title="projects">projects</a></li>
            <li><a  title="about" class='selected'>about</a></li>
        </ul>
        ${css()}
`
}

function css() {
    return `
    <style>
    
#site_menu {
    position: fixed;
    z-index: 15;
    top: 0;
    right: 0;
    list-style-type: none;
    width: 30%;
    height: 3%;
    padding: 4px;
    margin: 0;
    font-family: arial;
}

#site_menu li {
    float: right;
    margin-left: 1px;
    border: solid 1px #ccc;
    background-color: slategrey;
    position: relative;
    width: 30%;
    height: 84%;
    padding-top: 2%;
    padding-bottom: 1%;
    text-align: center;
}

#site_menu li a {
    color: white;
    border-radius: 6px;
    font-size: 1em;
    padding: 2% 22%;
}

#site_menu li a:hover {
    cursor: pointer;
}

#site_menu li a.selected {
    cursor: pointer;
    color: orange;
    font-weight: bold;
}
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