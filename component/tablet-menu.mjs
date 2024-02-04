import Layout from "./layout.mjs";
import {$, $All} from "../core/util.mjs";
import * as Store from "../data/store.mjs";
import Content from "../route/content.mjs";

function refresh(item_requested, function_caller) {

}


/**
 * // AUX-FUNCTION THAT ASSISTS 'NAV_BAR_DESIGNER' FUNCTION TO CLEAN THE FORMAT OF SELECTED MENU BUTTONS
 * @param {HTMLElement} btn
 */


function listen() {

    [...$All(".mi-tablet .tgroupi .sublist a")]
        .forEach($o => $o.addEventListener(
                'click', (event) => {
                    const entry = Store.itemById($o.id)
                    Content.load("mi-page-content", {tablet: null, detail: entry});
                    Layout.open('projects-content');
                }
            )
        )
}


function html(entries) {

    return `
    <div class="mi-tablet">
        <h5>WEB</h5>
        <ul id="WEB">
      ${
        entries.map(
            ([name, pack]) => `
                <li class="tgroupi" >
                    <section class="sublist">
                        <h4>${name}</h4>
                        <ul>
                           ${pack.map(([childId, childName]) => `<li><a id=${childId}>${childName}</a></li>`).join("")}
                        </ul>
                    </section>
                </li>`
        ).join("")
    }
        </ul>
    </div>
            ${css()}
    `
}


function css() {
    return `
    <style>
    
    

.mi-tablet {
    position: absolute;
    border: solid 12px #ccc;
    height: calc(100% - 20px);
    width: calc(100% - 20px);
    font-family: Tahoma, Geneva, sans-serif;
    background-color: #555;
    cursor: pointer;
}


.mi-tablet > h5 {
    font-size: 20em;
    color: lightslategrey;
    margin: 1%;
    width: 50%;
    position: absolute;
    text-align: center;
}

.mi-tablet > ul {
    margin: 0;
    width: 100%;
    height: 100%;
    float: left;
    padding: 0;
    margin: 0;
    margin-left: 3%;
    position: relative;
    top: 8%;
}


.tgroupi {
    display: inline-block;
    box-sizing: content-box;
    color: white;
    margin: 4px 2px;
    min-height: 300px;
    width: calc(100vw / 5);
    background-color: rgba(255, 255, 255, 0.2);
}

.tgroupi > h4 {
    float: left;
    font-size: 1.5em;
    font-family: calibri;
    width: 44%;
    margin-top: 6%;
}

.tgroupi > img {
    position: relative;
    bottom: -5%;
    right: -100%;
    border-radius: 6px;
    width: 28%;
    border: 4px solid gainsboro;
}

.tgroupi > img:hover {
    cursor: pointer;
    border: 4px solid gold;
}

.tgroupi div > div {
    height: 24%;
    width: 30%;
    float: left;
    margin: 2px;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    border-radius: 4px;
    border: 2px solid #ddd;
    list-style-type: none;
}



.tgroupi .sublist {
    position: relative;
    font-size: 0.8em;
    color: white;
    padding: 0;
    border: none;
    margin-left: 5%;
    margin-top: 3%;
    width: 100%;
    height: 80%;
    float: left;
}

.tgroupi .sublist ul {
    margin: 0;
    padding: 0;
    border: none;
}

.tgroupi .sublist > li {
    margin: 2px;
    background-color: orange;
    padding: 1%;
    color: white;
    font-size: 1em;
    width: 40%;
    height: 20%;
    float: left;
}

.tgroupi > ul > li:hover {
    color: white;
    background-color: tan;
}


    
#temp_list {
    position: relative;
    float: left;
    list-style-type: none;
    text-decoration: none;
    text-align: left;
    color: #069;
    padding: 3% 4%;
    margin: 3% 0;
    width: 100%;
}

#temp_list li {
    color: orange;
    background-color: rgba(1, 1, 1, 0.4);
    border: 2px solid #555;
}

 #temp_list li:hover {
    color: white;
    border: 2px solid white;
}
</style>
    `
}


function install(id, entries = null) {
    if (!entries) entries = Store.groupByDomain();
    document.getElementById(id).innerHTML = html(entries);
    listen();
}


export default {
    install,
    listen,
    refresh,
    // listContents,
}

const SAM = [
    [
        "Application Development",
        [
            [
                "WB01",
                "Schedule Handler"
            ],
            [
                "WB08",
                "Commerzbank Infobroker"
            ],
            [
                "WB09",
                "Noblelinx CRM"
            ],
            [
                "WB10",
                "Ecep Technologies Inventory"
            ],
            [
                "WB11",
                "Cosmores Booking Engine"
            ],
            [
                "WB12",
                "Rateparity"
            ]
        ]
    ],
]