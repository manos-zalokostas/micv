import LinkpackWork from "../component/linkpack-work.mjs";
import LinkpackStudy from "../component/linkpack-study.mjs";
import LinkpackSocial from "../component/linkpack-social.mjs";
import LinkpackCert from "../component/linkpack-cert.mjs";



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
        
        h2 { visibility: hidden}
        
         #footer {
                display: block;
                background-color: #ddd;
                height: 100%;
                padding-left: 4%;
            }

            #footer  h2 {
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
                width: 25%;
                margin: 0;
                padding: 0;;
            }

            #footer ul li {
                font-family: calibri;
            }

            #footer ul li:first-child {
                height: 8%;
                text-align: center;
                font-size: 3em;
                color: slategrey;
            }

            #footer ul li a {
                text-decoration: none;
                color: #444;
            }

            #footer ul li a img {
            }

            #footer ul:last-child {
                /*border-right: none;*/
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