import Content from "../route/content.mjs";
import * as Store from "../data/store.mjs";
import {$} from "../core/util.mjs";


/**
 *
 */
function listen() {

    $('#menu_tabs').addEventListener(
        'click',
        (event) => {
            console.log('CKICKED CONTENT PAGE MENU ')
            const target = event.target;

            const domain = target.id.split("_").pop().toUpperCase();
            console.log(domain)
            const entries = Store.groupByDomain(domain);
            console.log({entries})
            Content.load("mi-page-content", {tablet: entries, detail: null});
        }
    )
}


function html() {

    return `
            <div id="menu_tabs">
          
                <ul>
                    <li><a id="domain_web" href="#">WEB</a></li>
                    <li><a id="domain_study" href="#">STUDIES</a></li>
                    <li><a id="domain_work" href="#">WORK</a></li>
                </ul>

            </div>
            ${css()}
`
}


function css() {
    return `
<style>
    
#menu_tabs {
    position: absolute;
    width: 100%;
    background: orange;
}

#menu_tabs ul {
    display: inline;
    margin: auto;
    background: red;
    float: left;}

#menu_tabs ul li {
    float: left;
}

#menu_tabs ul li a {
    /*position: absolute;*/
    color: white;
    font-size: 2em;
    text-decoration: none;
    text-transform: lowercase;
    font-family: Tahoma, Geneva, sans-serif;
    margin: 0 10px;
    /*width: 100%;*/
    /*text-align: center;*/
}



#menu_tabs ul li a:hover, #menu_tabs ul li a.selected {
    color: goldenrod;
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