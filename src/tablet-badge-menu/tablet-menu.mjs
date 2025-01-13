import Layout from "/core/layout.mjs";
import {$, $All} from "/core/util.mjs";
import * as Store from "/data/store.mjs";
import Content from "/route/content.mjs";

function refresh(item_requested, function_caller) {

}


/**
 * // AUX-FUNCTION THAT ASSISTS 'NAV_BAR_DESIGNER' FUNCTION TO CLEAN THE FORMAT OF SELECTED MENU BUTTONS
 * @param {HTMLElement} btn
 */


function listen() {


}


function html(entries) {

    return `

            ${css()}
    `
}


function css() {
    return `
    <style>
    
    

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