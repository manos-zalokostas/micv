import Storage from "../core/storage.mjs";
import Layout from "../component/layout.mjs";

import {build_selected_item_content} from "./page-description";

export function nav_bar_designer(item_requested, function_caller) {
    const oXML = Storage.get('sXML', true);

    if (oXML) {
        __RESOLVE_AND_POPULATE_MAIN_BOARD(item_requested, function_caller, oXML);
        return;
    }

    // CALL THE FETCH API TO RETRIEVE RELATED DATA AND POPULATE THE NAVIGATION LIST MENU
    fetch('index.xml')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            return response.text();
        })
        .then(data => {
            const parser = new DOMParser();
            const xmlData = parser.parseFromString(data, 'application/xml');
            __RESOLVE_AND_POPULATE_MAIN_BOARD(item_requested, function_caller, xmlData);
        })
        .catch(error => {
            console.error('Could not fetch the Main Menu Buttons File:', error.message);
        });
}


/**
 * // ENLIST  THE IN-MENU LIST OPTIONS FOR THE 'PROJECT' PAGE
 * @param {HTMLElement} element
 */
export function reveal_list_subcategories(element) {
    const oXML = Storage.get('sXML', true);

    if (oXML) {
        __RESOLVE_AND_DISPLAY_SUBSECTION(element, oXML);
        return;
    }

    fetch('index.xml')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            return response.text();
        })
        .then(data => {
            const parser = new DOMParser();
            const xmlData = parser.parseFromString(data, 'application/xml');
            __RESOLVE_AND_DISPLAY_SUBSECTION(element, xmlData);
        })
        .catch(error => {
            console.error('Failed to fetch data:', error.message);
        });
}


/**
 *
 * @param item_requested
 * @param function_caller
 * @param data
 * @private
 */
export function __RESOLVE_AND_POPULATE_MAIN_BOARD(item_requested, function_caller, data) {

    const item = item_requested;
    const caller = function_caller;

    // CLEAN ALL THE DATA DISPLAYED BY THE LATEST PREVIEWED ITM
    // AND DISPLAY, THEM, OFF
    Layout.reset()

    //THIS SCRIPT HANDLES THE MAIN NAVIGATION BUTTON ANIMES AND CHANGES THE BACKGROUND IMAGE ON CLICK
    if (caller === 'navigation') {
        const selectedTab = document.querySelector('#menu_tabs a:contains(' + item + ')');
        selectedTab.classList.add('selected');
        selectedTab.removeEventListener('hover', hover_in_menu_buttons);
        const nonSelectedTabs = document.querySelectorAll('#menu_tabs a:not(:contains(' + item + '))');
        nonSelectedTabs.forEach(tab => {
            tab.animate({'padding-top': 0});
            tab.classList.remove();
        });
    }

    //IF ONE OF THE MAIN BUTTONS IS SELECTED AND THE '#MEDIA_CONTROL' IS STILL OPEN
    //THE LINE BELOW  WILL HANDLE TO CLOSE IT
    if (document.getElementById('media_control')) {
        slide_images('x', null)
    }

    const temp_array = [];
    let num = -300;

    let childs = [];

    // A TEXT THAT INFORMS THE USER ABOUT THE CURRENT NAVIGATION LIST (BUILDS DYNAMIIC ALS0)
    document.getElementById('list').insertAdjacentHTML('afterbegin', '<h5>' + item.replace(/_/g, " ") + '</h5>');

    // A DISTINCTION IS MADE FOR THE CALLER, THAT WILL DEFINE THE QUERY TO THE XML FILE
    // AND FINALLY SUSTAIN THE BEHAVIOUR OF THE DISPLAY
    if (caller === "navigation") {
        childs = data.querySelectorAll('domain:contains(' + item + ') ~ section');
    } else {
        if (caller === "category") {

            // THE SCRIPT QUERIES THE 'CATEGORY' TAG FROM THE XML FILE
            childs = data.querySelectorAll('category:contains(' + item + ') ~ title');
            initialize_button(document.querySelectorAll('#menu_tabs a:not(:contains(' + item + '))'));
        } else {

            // THE SCRIPT QUERIES THE 'TOOLS' TAG FROM THE XML FILE (TOOLS ~ KEYWORDS)
            const tools = data.querySelectorAll('tools > tool:contains(' + item + ')');
            tools.forEach(tool => {
                if (tool.textContent === item) {
                    childs.push(tool.parentNode.querySelector('title'));
                }
            });
        }
    }
    initialize_button(document.querySelectorAll('#menu_tabs a:not(:contains(' + item + '))'));
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


/**
 *
 * @param direction
 * @param buttonClicked
 */
export function slide_images(direction, buttonClicked) {
    const handler = direction;
    const button = buttonClicked;
    let src = document.getElementById('preview').children[0].getAttribute('src');
    const mediaBox = document.getElementById('media_control');
    const selectedItem = document.querySelector('.item_previewed');
    const btnNext = document.querySelector('#cpanel span[title="next"]');
    const btnPrev = document.querySelector('#cpanel span[title="previous"]');

    if (handler === "next") {
        if (selectedItem.nextElementSibling && selectedItem.nextElementSibling.getAttribute('href')) {
            src = selectedItem.nextElementSibling.getAttribute('href');
            selectedItem.nextElementSibling.classList.add('item_previewed');
            selectedItem.classList.remove('item_previewed');
            btnNext.classList.add('haschild');
            btnPrev.classList.add('haschild');

            // The above handles whether the button will be enabled or not
            // To do that, I take the src of the item that will be displayed during this
            // code execution (--not the one that was already displayed on screen--)
            document.getElementById('preview').children[0]
                .animate(
                    {opacity: 0, right: '100%'},
                    {duration: 1000, fill: 'forwards'}
                ).onfinish = function () {
                // This code will run when the first animation finishes
                document.getElementById('preview').children[0].setAttribute('src', src);
                document.getElementById('preview').children[0].style.right = '-100%';

                // Start the second animation
                document.getElementById('preview').children[0].animate({opacity: 1, right: 0}, {
                    duration: 1000,
                    fill: 'forwards'
                });
            };
        } else {
            btnNext.classList.add('nochild');
        }
    } else if (handler === "previous") {
        if (selectedItem.previousElementSibling && selectedItem.previousElementSibling.getAttribute('href')) {
            src = selectedItem.previousElementSibling.getAttribute('href');
            selectedItem.previousElementSibling.classList.add('item_previewed');
            selectedItem.classList.remove('item_previewed');
            btnPrev.classList.add('haschild');
            btnNext.classList.add('haschild');

            // The above handles whether the button will be enabled or not
            // To do that, I take the src of the item that will be displayed during this
            // code execution (--not the one that was already displayed on screen--)
            const previewElement = document.getElementById('preview').children[0];

            previewElement
                .animate(
                    {opacity: 0, right: '-100%'},
                    {duration: 1000, fill: 'forwards'}
                ).onfinish = function () {
                // This code will run when the first animation finishes
                previewElement.setAttribute('src', src);
                previewElement.style.right = '100%';

                // Start the second animation
                previewElement.animate(
                    {opacity: 1, right: 0},
                    {duration: 1000, fill: 'forwards'}
                );
            };

        } else {
            btnPrev.classList.add('nochild');
        }
    } else {
        mediaBox.animate(
            {height: 0},
            'fast',
            () => {
                document.getElementById('iscreenshots').animate({bottom: 0});
                document.getElementById('idescription').animate({left: 0});
                mediaBox.remove();
            }
        );

        document.getElementById('ibody').firstElementChild.children.forEach(element => {
            element.style.display = 'block';
        });
        document.getElementById('ibody').firstElementChild.children.animate({opacity: 1}, 'slow');
    }
}


/**
 * // AUX-FUNCTION THAT ASSISTS 'NAV_BAR_DESIGNER' FUNCTION TO CLEAN THE FORMAT OF SELECTED MENU BUTTONS
 * @param {HTMLElement} btn
 */
export function initialize_button(btn) {
    btn.animate({'padding-top': 0});
}


/**
 *
 * @param element
 * @param data
 * @private
 */
export function __RESOLVE_AND_DISPLAY_SUBSECTION(element, data) {

    const curr_section = element.innerHTML;
    const curr_element = element;

    let list_elem = "";
    const childs = data.querySelectorAll('section:contains(' + curr_section + ')').forEach(
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
