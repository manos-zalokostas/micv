import Monitor from "../component/monitor.mjs";
import PageContentMenu from "../component/page-content-menu.mjs";
import BadgeCategory from "../component/badge-category.mjs";
import BadgeTools from "../component/badge-tools.mjs";
import Extra from "../component/extra.mjs";
import TabletMenu from "../component/tablet-menu.mjs";



function html() {

    return `

            <div id="mi-page-content-menu"></div>

            <div id="mi-description-wrapper">

                <div id="mi-description-tablet" > TABLET</div>

                <div id="mi-description-content">DESCRIPTION

                    <div id="ititle"></div>

                    <div id="mi-badge-cateogry"></div>

                    <div id="mi-badge-tools"></div>

                    <div id="ibody">

                        <div id="idescription"></div>

                        <div id="iscreenshots"></div>

                    </div>

<!--                    <div id="mi-content-extra"></div>-->
            ${css()}
    `

}


function css() {

    return `
    <style>
    
        #mi-page-content-menu {
            position: absolute;
            z-index: 10;
            left:0;
            top:0;
            width: 25%;
            height: 75px
        }
    
    
        #mi-description-wrapper {
            position: absolute;
            z-index: 5;
            top:0;
            left: -100%;
            height: 100%;
            width: 200%;
            background: silver;
        }
        
        #mi-description-wrapper > div {
             position: relative;
             float: left;
             width: 50%;
             height: 100%;
             /*margin: 100px;*/
        }

            
         #ititle {
            float: left;
            text-align: left;
            color: orange;
            font-size: 2.5em;
            font-family: verdana;
            width: 100%;
            padding: 0;
            margin: 0;
            margin-top: 5%;
        }

        #ititle h3 {
            display: inline;
            font-family: verdana;
            padding: 0;
            width: 70%;
            float: left;
            margin: 0;
            margin-bottom: 1%;
            margin-left: 2%;
        }

        #ititle hr {
            padding-bottom: 0;
            margin-bottom: 0;
        }
        
        
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


function load(id="mi-page-content") {

    document.getElementById(id).innerHTML = html();

    TabletMenu.install('mi-description-tablet')
    PageContentMenu.install('mi-page-content-menu')
    BadgeCategory.install('mi-badge-category')
    BadgeTools.install('mi-badge-tools')

    // listen();
}


export default {
    load
}