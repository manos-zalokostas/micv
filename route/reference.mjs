import PageMenuIntro from "../component/page-menu-intro.mjs";
import Monitor from "../component/monitor.mjs";
import QuoteAuthor from "../component/quote-author.mjs";
import Timeline from "../component/timeline.mjs";
import TimelineInteractive from "../component/timeline-interactive.mjs";
import QuoteWelcome from "../component/quote-welcome.mjs";
import QuoteSiteinfo from "../component/quote-siteinfo.mjs";
import LinkpackWork from "../component/linkpack-work.mjs";
import LinkpackStudy from "../component/linkpack-study.mjs";
import LinkpackCert from "../component/linkpack-cert.mjs";
import LinkpackSocial from "../component/linkpack-social.mjs";

function html() {

    return `

            <div id="footer">

                <h2>Useful Links</h2>

                <div id="mi-linkpack-work"></div>

                <div id="mi-linkpack-study"></div>

                <div id="mi-linkpack-cert"></div>

                <div id="mi-linkpack-social"></div>

            </div>
            ${css()}
    `

}

function css() {

    return `
    <style>
         #footer {
                display: block;
                background-color: #ddd;
                height: 100%;
                padding-left: 4%;
            }

            #footer > h2 {
                height: 10%;
                margin: 0;
                padding: 0;
                padding-top: 1%;
                padding-bottom: 1%;
                color: #eee;
                font-size: 6em;
                font-family: tahoma;
                text-transform: uppercase;
            }

            #footer ul {
                float: left;
                list-style-type: none;
                width: 22%;
                height: 80%;
                margin: 2px;
                padding: 0 1%;
                overflow: auto;
                color: #aaa;
                background-color: #555;
            }

            #footer ul li {
                text-align: left;
                width: 100%;
                float: left;
                color: grey;
                font-family: calibri;
            }

            #footer ul li:first-child {
                height: 8%;
                text-align: center;
                margin-bottom: 8%;
                font-size: 3em;
                color: slategrey;
                width: 100%;
                font-weight: bold;
            }

            #footer ul li a {
                text-decoration: none;
                color: white;
            }

            #footer ul li a img {
                width: 24%;
                border: solid 2px gainsboro;
                margin-right: 4%;
            }

            #footer ul:last-child {
                border-right: none;
            }

</style>
    `

}


function load(id="mi-page-reference") {

    document.getElementById(id).innerHTML = html();

    LinkpackWork.install('mi-linkpack-work')
    LinkpackStudy.install('mi-linkpack-study')
    LinkpackCert.install('mi-linkpack-cert')
    LinkpackSocial.install('mi-linkpack-social')

    // listen();
}

export default {
    load
}