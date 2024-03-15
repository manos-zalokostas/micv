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

    [...$All("#mi-tablet .tgroupi .sublist a")]
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
    <div id="mi-tablet">
<br />
<br />
<br />
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

#mi-tablet {
    height: calc(100vh - 25px);
    overflow: auto;
    font-family: Tahoma, Geneva, sans-serif;
    cursor: pointer;
}



#mi-tablet  ul {
    display: flex;
    flex-wrap: wrap;
    /* justify-content: space-evenly; */
    /* gap: 10px; */
    /*!* margin-top: 75px;*/
}


.tgroupi {
    padding: 5px 15px 25px;
    width: 90%;
}


.tgroupi .sublist {
    padding: 15px;
    border: 1px solid #ddd;
}


.tgroupi .sublist  li {
    color: white;
    padding: 10px;
    margin:10px;
    background: mediumpurple;
}

  h4 {
     text-transform: uppercase;
    color: tomato;
    padding: 4px;
}

.tgroupi  ul  li:hover {
    color: orange
    /*background-color: tomato;*/
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