export function handle_banner_input(caller, target) {
    target = target ? target : '';

    if (caller === 'project') {
        if (!target) {
            target = document.querySelector('#' + caller + ' h3').textContent;
        }
        animate_page('projects');
        build_selected_item_content(target, 'default');
        return;
    }

    if (caller === 'reference') {
        target = document.querySelector('#' + caller + ' h3').getAttribute('title');
        animate_page('projects');
        build_selected_item_content(target, 'studies');
        return;
    }

    if (caller === 'tool') {
        if (!target) {
            target = document.event.target.previousElementSibling.textContent.replace(/ /g, '_');
        }
        document.querySelector('#context').setAttribute('style', 'left: 0;');
        animate_page('projects');
        nav_bar_designer(target, 'keyword');
        return;
    }

    console.log('FUNCTION HANDLE_BANNER_INPUT RUNS WITH A DEFAULT, PLEASE CHECK!');
}


/**
 * //  SCRIPT THAT TRAVELS AMONG 3 MAIN PAGES
 *
 * @param {string} current_page
 */
export function animate_page(current_page) {
    if (document.querySelector('#site_menu a.selected').getAttribute('title') === current_page) {
        return;
    }
    let animation_paused = document.querySelector('#skill_fields > em').classList.contains('paused');

    document.querySelector('#site_menu a.selected').removeAttribute('class');
    document.querySelector('#site_menu a[title="' + current_page + '"]').classList.add('selected');

    document.querySelector('#site_menu').animate({'top': '-10%'});

    switch (current_page) {
        case 'about':
            document.querySelector('#wrapper').animate(
                {'top': '0%'}, 'slow', 'swing', function () {
                    document.querySelector('#site_menu').animate({'top': 0});
                }
            );
            document.querySelector('#author_presentation > img').animate({'left': 0}, 'slow');
            if (!animation_running && !animation_paused) {
                animate_skills(gmode);
            }
            break;
        case 'projects':
            document.querySelector('#wrapper').animate({'top': '-100%'}, 'slow', 'swing');
            document.querySelector('#author_presentation > img').animate(
                {'left': '-100%'}, 'slow', function () {
                    document.querySelector('#site_menu').animate({'top': 0});
                }
            );
            animate_skills('off');
            break;
        case 'certificates':
            document.querySelector('#wrapper').animate(
                {'top': '-200%'}, 'slow', 'swing', function () {
                    document.querySelector('#site_menu').animate({'top': 0});
                }
            );
            document.querySelector('#author_presentation > img').animate({'left': '-100%'});
            animate_skills('off');
            break;
        default:
            // DEFAULT:: TOP LEVEL PAGE
            console.log('FUNCTION: ANIMATE_PAGE -> RUNS DEFAULT - PLEASE CHECK !');
            document.querySelector('#wrapper').animate(
                {'top': '0%'}, 'slow', 'swing', function () {
                    document.querySelector('#site_menu').animate({'top': 0});
                }
            );
            break;
    }
}


/**
 * @param currentListItem
 * @param currList
 */
export function build_selected_item_content(currentListItem, currList) {
    const oXML = __GET_CACHED_DATA('sXML', true);

    if (oXML) {
        __RESOLVE_AND_DISPLAY_ITEM_FULL_DESCRIPTION(currentListItem, currList, oXML);
        return;
    }

    // CALL THE FETCH API TO RETRIEVE RELATED DATA AND DISPLAY THE ITEM FULL DESCRIPTION
    fetch('items.xml')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            return response.text();
        })
        .then(data => {
            const parser = new DOMParser();
            const xmlData = parser.parseFromString(data, 'application/xml');
            __RESOLVE_AND_DISPLAY_ITEM_FULL_DESCRIPTION(currentListItem, currList, xmlData);
        })
        .catch(error => {
            console.error('Failed to open:', error.message);
        });
}


