import Monitor from "./monitor.mjs";
import Layout from "./layout.mjs";
import TabletMenu from "./tablet-menu.mjs";


/**
 *
 */
function listen() {
    document.addEventListener(
        'click', (event) => {
            const target = event.target;

            if (target.tagName === 'A' && target.parentNode.tagName === 'LI' && target.parentNode.parentNode.id === 'menu_tabs') {
                const contextLeft = document.querySelector('#context').style.left;

                if (contextLeft !== '0') {
                    document.querySelector('#context').style.left = '0';
                }

                // TabletMenu.refresh(target.innerHTML, 'navigation');
            }
        }
    )
}


function html() {

    return `
        <div id="menu_tabs">
            <ul>
                <li><a href="#" title="web">WEB</a></li>
                <li><a href="#" title="studies">STUDIES</a></li>
                <li><a href="#" title="work">WORK</a></li>
            </ul>
        </div>
        ${css()}
`

}




function css() {
    return `
    <style>
    #menu_tabs {
    background-color: #555;
    border-bottom: 8px solid #ddd;
}

#menu_tabs ul {
    margin: 0;
    width: 60%;
}

#menu_tabs ul li {
    float: left;
    z-index: 0;
    position: relative;
    display: inline;
    cursor: pointer;
    border-top-right-radius: 10px;
    width: 25%;
    text-align: center;
}

#menu_tabs ul li a {
    font-family: Tahoma, Geneva, sans-serif;
    font-size: 2em;
    text-decoration: none;
    color: #aaa;
    text-transform: lowercase;
}

#menu_tabs ul li a:hover {
    color: lightsteelblue;
}

#menu_tabs ul li a.selected {
    color: lightsteelblue;
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
    html,
}