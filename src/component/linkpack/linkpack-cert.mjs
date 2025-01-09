import Storage from "/core/storage.mjs";
import Layout from "/core/layout.mjs";
import Slider from "./slider.mjs";

function html(){
    return `
                <ul id="cert_links">
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
    
    /* ul#cert_links {*/
    /*    width: 97%;*/
    /*    height: 10%;*/
    /*    overflow: hidden;*/
    /*}*/
    
    /* ul#cert_links > li {*/
    /*    float: left;*/
    /*    width: 20%;*/
    /*    height: 100%;*/
    /*    background-color: slategray;*/
    /*    padding: 0;*/
    /*    padding-top: 2%;*/
    /*    overflow: hidden;*/
    /*}*/
    
    /* ul#cert_links > li img {*/
    /*    width: 40%;*/
    /*    float: right;*/
    /*}*/
    
    /* ul#cert_links > li:nth-child(5) {*/
    /*    display: none;*/
    /*}*/
    
    /* ul#cert_links > li:nth-child(2) {*/
    /*    display: none;*/
    /*}*/
    
    /* ul#cert_links > li:nth-child(1) {*/
    /*    display: none;*/
    /*}*/
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