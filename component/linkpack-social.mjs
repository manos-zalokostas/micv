import Storage from "../core/storage.mjs";
import Layout from "./layout.mjs";
import Slider from "./slider.mjs";

function html(){
    return `
            <ul id="social_links">
                <li>Social Net</li>
                <li>Share</li>
                <li>
                    <div class="fb-like" data-href="https://developers.facebook.com/docs/reference/plugins/like"
                         data-send="false" data-layout="button_count" data-width="450" data-show-faces="false"></div>
                </li>
                <li>
                    <div class="g-plusone" data-annotation="inline" data-width="300"></div>
                </li>
                <li>Contact</li>
                <li><a href="https://www.facebook.com/manoszalokostas" target="_blank"><img
                        src="images/organizations/facebook.jpg"/>Facebook</a></li>
                <li><a href="https://plus.google.com/116413132089341421459/posts" target="_blank"><img
                        src="images/organizations/google.jpg"/>Google+</a></li>
                <li><a href="https://www.linkedin.com/profile/view?id=115879291&trk=nav_responsive_tab_profile"
                       target="_blank"><img src="images/organizations/linkedin.jpg"/>Linkedin</a></li>
            </ul>
            ${css()}
    `
}


function css() {
    return `
    <style>
    
    #footer ul#social_links {
        width: 97%;
        height: 10%;
        overflow: hidden;
    }

    #footer ul#social_links > li {
        float: left;
        width: 20%;
        height: 100%;
        background-color: slategray;
        padding: 0;
        padding-top: 2%;
        overflow: hidden;
    }

    #footer ul#social_links > li img {
        width: 40%;
        float: right;
    }

    #footer ul#social_links > li:nth-child(5) {
        display: none;
    }

    #footer ul#social_links > li:nth-child(2) {
        display: none;
    }

    #footer ul#social_links > li:nth-child(1) {
        display: none;
    }
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