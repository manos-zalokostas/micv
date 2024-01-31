import Layout from "./layout.mjs";
import {$} from "../core/util.mjs";


/**
 *
 */
function listen() {
    $("#menu_tabs").addEventListener(
        'click', (event) => {
            const $elem = event.target;

            Layout.open('projects-content');

            // if (target.tagName === 'A' && target.parentNode.tagName === 'LI' && target.parentNode.parentNode.id === 'menu_tabs') {
            //     const contextLeft = document.querySelector('#context').style.left;
            //
            //     if (contextLeft !== '0') {
            //         document.querySelector('#context').style.left = '0';
            //     }
            //
            //     // TabletMenu.refresh(target.innerHTML, 'navigation');
            // }
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
    width: 100%;
    height: 100%;;
}

#menu_tabs ul {
    margin: 0;
}

#menu_tabs ul li {
    display: inline-block;
    cursor: pointer;
    text-align: center;
    margin: 0 15px;;
}

#menu_tabs ul li a {
    font-family: Tahoma, Geneva, sans-serif;
    font-size: 2em;
    text-decoration: none;
    text-transform: lowercase;
}

#menu_tabs ul li a:hover {
    /*color: lightsteelblue;*/
}

#menu_tabs ul li a.selected {
    /*color: lightsteelblue;*/
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