import Monitor from "../component/monitor.mjs";
import PageContentMenu from "../component/page-content-menu.mjs";
import BadgeCategory from "../component/badge-category.mjs";
import BadgeTools from "../component/badge-tools.mjs";
import Extra from "../component/extra.mjs";
import TabletMenu from "../component/tablet-menu.mjs";



function html() {

    return `

                    <div id="ibody">

                        <div id="idescription"></div>

                        <div id="iscreenshots"></div>

                    </div>

            ${css()}
    `

}


function css() {

    return `
    <style>
    
        #ibody {
            float: left;
            font-family: Verdana, Geneva, sans-serif;
            font-size: 0.9em;
            text-align: left;
            width: 70%;
            height: 70%;
            overflow: hidden;
            margin-top: 4%;
        }

        #idescription {
            float: left;
            overflow: auto;
            color: rgb(50, 71, 90);
            text-align: left;
            font-family: calibri;
            height: 65%;
            width: 96%;
            font-size: 1em;
            position: relative;
            padding: 2%;
            padding-top: 4%;
        }

        #idescription span {
            padding: 0;
            margin: 0;
        }
        
        #iscreenshots {
            float: left;
            clear: both;
            margin-top: 1%;
            width: 80%;
            height: 16%;
            padding-top: 1%;
            position: relative;
        }

        #iscreenshots > span {
            float: left;
            width: 100%;
            height: 100%;
            position: relative;
            left: 20%;
        }

        #iscreenshots a {
            position: relative;
            float: left;
            width: 15%;
            height: 100%;
            margin-right: 2%;
            overflow: hidden;
        }

        #iscreenshots img {
            position: relative;
            width: 96%;
            height: 96%;
            border: solid 2px #555;
            max-height: 110%;
        }

        #iscreenshots img:hover {
            border: solid 2px #CC0;
            cursor: pointer;
        }
</style>
    `

}


function load(id="mi-content-view") {

    document.getElementById(id).innerHTML = html();

    // listen();
}


export default {
    load
}