import Storage from "../core/storage.mjs";
import Layout from "./layout.mjs";
import Slider from "./slider.mjs";

function refresh(item_requested, function_caller) {

    const xml = Storage.get('sXML', true);

    const item = item_requested;
    const caller = function_caller;

    // CLEAN ALL THE DATA DISPLAYED BY THE LATEST PREVIEWED ITM
    // AND DISPLAY, THEM, OFF
    Layout.reset()

    //THIS SCRIPT HANDLES THE MAIN NAVIGATION BUTTON ANIMES AND CHANGES THE BACKGROUND IMAGE ON CLICK
    if (caller === 'navigation') {
        const selectedTab = document.querySelector('#menu_tabs a:contains(' + item + ')');
        selectedTab.classList.add('selected');
        // selectedTab.removeEventListener('hover', hover_in_menu_buttons);
        const nonSelectedTabs = document.querySelectorAll('#menu_tabs a:not(:contains(' + item + '))');
        nonSelectedTabs.forEach(tab => {
            tab.animate({'padding-top': 0});
            tab.classList.remove();
        });
    }

    //IF ONE OF THE MAIN BUTTONS IS SELECTED AND THE '#MEDIA_CONTROL' IS STILL OPEN
    //THE LINE BELOW  WILL HANDLE TO CLOSE IT
    if (document.getElementById('media_control')) {
        Slider.refresh('x', null)
    }

    const temp_array = [];
    let num = -300;

    let childs = [];

    // A TEXT THAT INFORMS THE USER ABOUT THE CURRENT NAVIGATION LIST (BUILDS DYNAMIIC ALS0)
    document.getElementById('list').insertAdjacentHTML('afterbegin', '<h5>' + item.replace(/_/g, " ") + '</h5>');

    // A DISTINCTION IS MADE FOR THE CALLER, THAT WILL DEFINE THE QUERY TO THE XML FILE
    // AND FINALLY SUSTAIN THE BEHAVIOUR OF THE DISPLAY
    if (caller === "navigation") {
        childs = xml.querySelectorAll('domain:contains(' + item + ') ~ section');
    } else {
        if (caller === "category") {

            // THE SCRIPT QUERIES THE 'CATEGORY' TAG FROM THE XML FILE
            childs = xml.querySelectorAll('category:contains(' + item + ') ~ title');
            _activateButton(document.querySelectorAll('#menu_tabs a:not(:contains(' + item + '))'));
        } else {

            // THE SCRIPT QUERIES THE 'TOOLS' TAG FROM THE XML FILE (TOOLS ~ KEYWORDS)
            const tools = xml.querySelectorAll('tools > tool:contains(' + item + ')');
            tools.forEach(tool => {
                if (tool.textContent === item) {
                    childs.push(tool.parentNode.querySelector('title'));
                }
            });
        }
    }
    _activateButton(document.querySelectorAll('#menu_tabs a:not(:contains(' + item + '))'));
    // AFTER DECIDING WHICH DATA WILL BE PROCESSED AS 'CHILDS' ABOVE,
    // NOW THEY ARE STORED IN AN ARRAY AND FURTHER PROCESSED AFTER 'COMPLETE' OF THE AJAX CALL
    childs.forEach(
        function (child) {
            temp_array.push(child.textContent);
        }
    );

    for (let i = 0; i < temp_array.length; i++) {
        if (i === temp_array.indexOf(temp_array[i])) {
            document.getElementById('list').insertAdjacentHTML('beforeend', '<li class="mgroupi" style="left:' + num + 'px">' + temp_array[i] + '</li>');
            num -= 50;
        }
    }

    if (caller === 'navigation') {
        const createdUl = document.createElement('ul');
        createdUl.id = item;
        createdUl.classList.add('list');
        const listItems = document.getElementById('list').querySelectorAll('li.mgroupi');
        listItems.forEach(item => {
            item.animate({'left': 0}, 'slow');
            createdUl.appendChild(item);
        });
        document.getElementById('list').appendChild(createdUl);
    } else {
        const tempUl = document.createElement('ul');
        tempUl.id = 'temp_list';
        const listItems = document.getElementById('list').querySelectorAll('li.mgroupi');
        listItems.forEach(item => {
            item.animate({'left': 0}, 'slow');
            tempUl.appendChild(item);
        });
        document.getElementById('list').appendChild(tempUl);
    }


}


export function listContents(element) {

    const xml = Storage.get('sXML', true);

    const curr_section = element.innerHTML;
    const curr_element = element;

    let list_elem = "";
    xml.querySelectorAll('section:contains(' + curr_section + ')').forEach(
        function (child) {
            list_elem += '<li>' + child.textContent + '</li>';
        }
    );

    const lista = '<ul class="sublist">' + list_elem + '</ul>';

    document.getElementById('list').style.overflowX = 'hidden';

    if (!(curr_element.children[0].tagName.toLowerCase() === 'ul' && curr_element.children[0].classList.contains('sublist'))) {

        curr_element.insertAdjacentHTML('beforeend', lista);

        const sublistItems = document.querySelectorAll('.sublist li');

        sublistItems.forEach(item => {
            item.style.position = 'relative';
            item.animate({'padding-left': '5%'}, 'medium');
        });

    }

}


/**
 * // AUX-FUNCTION THAT ASSISTS 'NAV_BAR_DESIGNER' FUNCTION TO CLEAN THE FORMAT OF SELECTED MENU BUTTONS
 * @param {HTMLElement} btn
 */
 function _activateButton(btns) {
    Array.from(btns).forEach(
        btn => btn.animate({'padding-top': 0})
    )
}


export default {
    refresh,
    listContents,
}