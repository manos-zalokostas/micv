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
    height: 100%;
    width: 75%;
}

#menu_tabs ul {
    height: 100%;
}

#menu_tabs ul li {
    position: relative;
    bottom: 5%;
    float: left;
    padding: 4px;
    padding-top: 0;
    font-family: Tahoma, Geneva, sans-serif;
    height: 99%;
    width: 20%;
}

#menu_tabs ul li a {
    position: absolute;
    bottom: 0;
    left: 0;
    text-decoration: none;
    color: #aaa;
    font-size: 2em;
    text-transform: lowercase;
    font-family: Tahoma, Geneva, sans-serif;
    width: 100%;
    text-align: center;
}

#menu_tabs #search {
    float: left;
    width: 30%;
    margin: 10px 0;
}

#menu_tabs #search_radio {
    float: left;
    width: 40%;
}

#menu_tabs #search_radio > div {
    float: left;
    width: 50%;
}

#menu_tabs #search_radio label :hover {
    cursor: pointer;
}

#menu_tabs #search_radio input {
    float: right;
    width: 50%;
    margin: 4px 0 0;
}

#menu_tabs #search_radio label {
    color: white;
    text-transform: uppercase;
    font-size: small;
}


#menu_tabs #search_result {
    height: 100%;
}

#menu_tabs #search_result input {
    float: right;
    width: 50%;
    height: 100%;
    background: none;
    border: none;
    border-bottom: 1px solid #888;
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