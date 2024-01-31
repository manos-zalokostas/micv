import Storage from "../core/storage.mjs";
import Layout from "./layout.mjs";
import Slider from "./slider.mjs";

function html(){
    return `
                <ul id="certificate_links">
                <li>Certificates</li>
                <li><a target="_blank" href="#"></a>Desktop Publishing and 3D Animation</li>
                <li><a target="_blank" href="#"></a>Graphics Design for Web and Printable Mediums</li>
                <li><a target="_blank" href="#"></a>Web Design and Development</li>
                <li><a target="_blank" href="#"></a>Internet Engineering and Web Management</li>
            </ul>
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

function install(id) {
    document.getElementById(id).innerHTML = html();
    listen();
}


export default {
    install,
    html,
}