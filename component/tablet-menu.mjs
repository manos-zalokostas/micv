import Layout from "./layout.mjs";
import {$, $All} from "../core/util.mjs";

function refresh(item_requested, function_caller) {
//
//     const xml = Storage.get('sXML', true);
//
//     const item = item_requested;
//     const caller = function_caller;
//
//     // CLEAN ALL THE DATA DISPLAYED BY THE LATEST PREVIEWED ITM
//     // AND DISPLAY, THEM, OFF
//     Layout.reset()
//
//     //THIS SCRIPT HANDLES THE MAIN NAVIGATION BUTTON ANIMES AND CHANGES THE BACKGROUND IMAGE ON CLICK
//     if (caller === 'navigation') {
//         const selectedTab = document.querySelector('#menu_tabs a:contains(' + item + ')');
//         selectedTab.classList.add('selected');
//         // selectedTab.removeEventListener('hover', hover_in_menu_buttons);
//         const nonSelectedTabs = document.querySelectorAll('#menu_tabs a:not(:contains(' + item + '))');
//         nonSelectedTabs.forEach(tab => {
//             tab.animate({'padding-top': 0});
//             tab.classList.remove();
//         });
//     }
//
//     //IF ONE OF THE MAIN BUTTONS IS SELECTED AND THE '#MEDIA_CONTROL' IS STILL OPEN
//     //THE LINE BELOW  WILL HANDLE TO CLOSE IT
//     if (document.getElementById('media_control')) {
//         Slider.refresh('x', null)
//     }
//
//     const temp_array = [];
//     let num = -300;
//
//     let childs = [];
//
//     // A TEXT THAT INFORMS THE USER ABOUT THE CURRENT NAVIGATION LIST (BUILDS DYNAMIIC ALS0)
//     document.getElementById('list').insertAdjacentHTML('afterbegin', '<h5>' + item.replace(/_/g, " ") + '</h5>');
//
//     // A DISTINCTION IS MADE FOR THE CALLER, THAT WILL DEFINE THE QUERY TO THE XML FILE
//     // AND FINALLY SUSTAIN THE BEHAVIOUR OF THE DISPLAY
//     if (caller === "navigation") {
//         childs = xml.querySelectorAll('domain:contains(' + item + ') ~ section');
//     } else {
//         if (caller === "category") {
//
//             // THE SCRIPT QUERIES THE 'CATEGORY' TAG FROM THE XML FILE
//             childs = xml.querySelectorAll('category:contains(' + item + ') ~ title');
//             _activateButton(document.querySelectorAll('#menu_tabs a:not(:contains(' + item + '))'));
//         } else {
//
//             // THE SCRIPT QUERIES THE 'TOOLS' TAG FROM THE XML FILE (TOOLS ~ KEYWORDS)
//             const tools = xml.querySelectorAll('tools > tool:contains(' + item + ')');
//             tools.forEach(tool => {
//                 if (tool.textContent === item) {
//                     childs.push(tool.parentNode.querySelector('title'));
//                 }
//             });
//         }
//     }
//     _activateButton(document.querySelectorAll('#menu_tabs a:not(:contains(' + item + '))'));
//     // AFTER DECIDING WHICH DATA WILL BE PROCESSED AS 'CHILDS' ABOVE,
//     // NOW THEY ARE STORED IN AN ARRAY AND FURTHER PROCESSED AFTER 'COMPLETE' OF THE AJAX CALL
//     childs.forEach(
//         function (child) {
//             temp_array.push(child.textContent);
//         }
//     );
//
//     for (let i = 0; i < temp_array.length; i++) {
//         if (i === temp_array.indexOf(temp_array[i])) {
//             document.getElementById('list').insertAdjacentHTML('beforeend', '<li class="tgroupi" style="left:' + num + 'px">' + temp_array[i] + '</li>');
//             num -= 50;
//         }
//     }
//
//     if (caller === 'navigation') {
//         const createdUl = document.createElement('ul');
//         createdUl.id = item;
//         createdUl.classList.add('list');
//         const listItems = document.getElementById('list').querySelectorAll('li.tgroupi');
//         listItems.forEach(item => {
//             item.animate({'left': 0}, 'slow');
//             createdUl.appendChild(item);
//         });
//         document.getElementById('list').appendChild(createdUl);
//     } else {
//         const tempUl = document.createElement('ul');
//         tempUl.id = 'temp_list';
//         const listItems = document.getElementById('list').querySelectorAll('li.tgroupi');
//         listItems.forEach(item => {
//             item.animate({'left': 0}, 'slow');
//             tempUl.appendChild(item);
//         });
//         document.getElementById('list').appendChild(tempUl);
//     }
//
//
// }
//
//
// export function listContents(element) {
//
//     const xml = Storage.get('sXML', true);
//
//     const curr_section = element.innerHTML;
//     const curr_element = element;
//
//     let list_elem = "";
//     xml.querySelectorAll('section:contains(' + curr_section + ')').forEach(
//         function (child) {
//             list_elem += '<li>' + child.textContent + '</li>';
//         }
//     );
//
//     const lista = '<ul class="sublist">' + list_elem + '</ul>';
//
//     document.getElementById('list').style.overflowX = 'hidden';
//
//     if (!(curr_element.children[0].tagName.toLowerCase() === 'ul' && curr_element.children[0].classList.contains('sublist'))) {
//
//         curr_element.insertAdjacentHTML('beforeend', lista);
//
//         const sublistItems = document.querySelectorAll('.sublist li');
//
//         sublistItems.forEach(item => {
//             item.style.position = 'relative';
//             item.animate({'padding-left': '5%'}, 'medium');
//         });
//
//     }

}


/**
 * // AUX-FUNCTION THAT ASSISTS 'NAV_BAR_DESIGNER' FUNCTION TO CLEAN THE FORMAT OF SELECTED MENU BUTTONS
 * @param {HTMLElement} btn
 */
function _activateButton(btns) {
    // Array.from(btns).forEach(
    //     btn => btn.animate({'padding-top': 0})
    // )
}


function listen() {

    [...$All(".mi-tablet .tgroupi .sublist a")]
        .forEach($o => $o.addEventListener(
                'click', (event) => {
                    const target = event.target;

                    Layout.open('projects-content');
                }
            )
        )
}


function html() {

    let entries = SAM

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


function install(id) {
    document.getElementById(id).innerHTML = html();
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
    [
        "Site Development",
        [
            [
                "WB02",
                "Elgreg"
            ],
            [
                "WB03",
                "ELGREG [2013]"
            ],
            [
                "WB04",
                "Curriculum Vitae"
            ]
        ]
    ],
    [
        "Javascript Made E-learning",
        [
            [
                "WB05",
                "Pearson E-learning"
            ]
        ]
    ],
    [
        "Employee Management System",
        [
            [
                "WB06",
                "DeltaComsos ERP"
            ]
        ]
    ],
    [
        "Mobile Applications",
        [
            [
                "WB07",
                "Android Applications Development"
            ]
        ]
    ]
]