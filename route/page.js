import Monitor from "../component/monitor.mjs";

/**
 * // CLEARS ALL THE DATA DISPLAYED ON SCREEN BY THE LATEST PREVIEWED ITEM, AND DISPLAY, THEM, OFF
 *
 *
 */
export function clean_page_data() {
    const idElems = Array.from(document.querySelectorAll('#description #iextra *[id]'));
    const elemSpans = Array.from(document.querySelectorAll('#description span'));
    const navigationList = document.getElementById('list');

    idElems.forEach(elem => {
        elem.style.display = 'none';
    });

    elemSpans.forEach(span => {
        span.innerHTML = '';
    });

    if (navigationList) {
        navigationList.innerHTML = '';
    }
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
                Monitor.invoke(gmode);
            }
            break;

        case 'projects':
            document.querySelector('#wrapper').animate({'top': '-100%'}, 'slow', 'swing');
            document.querySelector('#author_presentation > img').animate(
                {'left': '-100%'}, 'slow', function () {
                    document.querySelector('#site_menu').animate({'top': 0});
                }
            );
            Monitor.invoke('off');
            break;

        case 'certificates':
            document.querySelector('#wrapper').animate(
                {'top': '-200%'}, 'slow', 'swing', function () {
                    document.querySelector('#site_menu').animate({'top': 0});
                }
            );
            document.querySelector('#author_presentation > img').animate({'left': '-100%'});
            Monitor.invoke('off');
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
 *
 * @param {string} domain
 */
export function navigate_resume_page(domain) {
    const id = '#' + domain;
    const domainSelector = '#' + domain + '_field';

    const selectedIntroductionMenu = document.querySelector('#introduction_menu a.selected');
    if (selectedIntroductionMenu) {
        selectedIntroductionMenu.removeAttribute('class');
    }
    document.querySelector(id).classList.add('selected');

    if (domainSelector === '#document_cv_field') {
        clean_page_data();
        animate_page('projects');

        document.querySelector('#context').setAttribute('style', 'left: -100%;');
        content_handler('images/cv_document/micv.pdf', 'pdf');
    }

    document.querySelectorAll(domainSelector).forEach(element => {
        if (element.id.match('cv_field')) {
            element.animate(
                {'opacity': '0', 'left': '-100%'},
                'swing',
                function () {
                }
            );
        }
    });

    document.querySelector(domainSelector).animate({'opacity': '1', 'left': '0'});
    document.querySelector(domainSelector + ' .main_txt > p').animate(
        {'left': '0'},
        function () {
            document.querySelector(domainSelector + ' .main_txt > h2').animate({'opacity': '1'});
        }
    );
    document.querySelector(domainSelector + ' .aux_txt > p').animate(
        {'right': '0'},
        function () {
            document.querySelector(domainSelector + ' .aux_txt > h3').animate({'opacity': '1'});
        }
    );
}

