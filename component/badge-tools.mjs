import Storage from "../core/storage.mjs";
import Layout from "./layout.mjs";
import Slider from "./slider.mjs";
import TabletMenu from "./tablet-menu.mjs";

function html() {
    return `
        <h4 id="itools">Keywords: 
        <span><a href="#">TOOL 1</a></span>
        <span><a href="#">TOOL 2</a></span>
        <span><a href="#">TOOL 3</a></span>
        </h4>
        ${css()}
    `
}

function css(){
    return `
    <style>


#itools {
    float: right;
    display: inline;
    font-family: verdana;
    font-size: 0.8em;
    text-align: right;
    padding: 0;
    margin: 0;
    width: 25%;
    position: relative;
    bottom: 0;
    right: 2%;
}

#itools span {
    float: right;
    font-family: verdana;
    font-size: 0.8em;
    text-align: right;
    padding: 0;
    margin: 0;
    width: 100%;
}

    #itools span a {
    float: right;
    display: inline;
    font-family: verdana;
    font-size: 1.1em;
    text-align: right;
    background-color: #555;
    margin: 1px;
    padding: 0;
    padding: 1%;
    border-radius: 4px;
    text-decoration: none;
    color: white;
}

#itools span a:hover {
    background-color: orange;
}




</style>
    `
}


function listen() {

    document.addEventListener(
        'click', (event) => {
            const target = event.target;

            // if (target.tagName === 'A' && target.classList.contains('keys')) {
            //     TabletMenu.refresh(target.innerHTML, 'keyword');
            //     document.getElementById('context').style.left = '0';
            //     event.preventDefault();
            // }

        }
    )
}


function install(id){
    document.getElementById(id).innerHTML = html();
    listen();
}


export default {
    install,
    listen,
    html,
}