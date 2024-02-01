import PageDescription from "../route/page-description.mjs";
import Monitor from "../component/monitor.mjs";
import Service from "../core/service.mjs";
import {$, $All} from "../core/util.mjs";
import Visual from "../core/visual.mjs";
import TimelineInteractive from "./timeline-interactive.mjs";
import Timeline from "./timeline.mjs";
import QuotesIntro from "./quotes-intro.mjs";
import Introduction from "../route/introduction.mjs";
import Content from "../route/content.mjs";
import Reference from "../route/reference.mjs";


/**
 * // CLEARS ALL THE DATA DISPLAYED ON SCREEN BY THE LATEST PREVIEWED ITEM, AND DISPLAY, THEM, OFF
 *
 *
 */
function reset() {
    const idElems = Array.from($All('#description #iextra *[id]'));
    const elemSpans = Array.from($All('#description span'));
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
function open(current_page) {
    const $wrapper = $('#wrapper'),
        $img = $('#author_presentation > img')
    // $menu = $('#site_menu'),
    // $linkActive = $('#site_menu a.selected')
    // ;


    // if ($linkActive.getAttribute('title') === current_page) {
    //     return;
    // }
    // let animation_paused = $('#skill_fields > em').classList.contains('paused');
    //
    // $linkActive.removeAttribute('class');
    // $('#site_menu a[title="' + current_page + '"]').classList.add('selected');
    //
    //
    // $menu.animate({'top': '-10%'});

    switch (current_page) {

        case 'about':
            Visual.set(
                {$wrapper, 'top': 0, left: 0},
                {$img, 'left': 0},
            )
            Introduction.load()
            break;

        case 'projects':

            Visual.set(
                {$wrapper, top: '-100%', left: 0},
                {$img, left: '-100%'},
            )
            Content.load()

            break;

        case 'projects-content':

            Visual.set(
                {$wrapper, left: '-100%'},
            )
            Content.load()

            break;

        case 'certificates':

            Visual.set(
                {$wrapper, top: '-200%', left: 0},
                {$img, left: '-100%'},
            )
            Reference.load();
            break;

        default:
            // DEFAULT:: TOP LEVEL PAGE
            console.log('FUNCTION: ANIMATE_PAGE -> RUNS DEFAULT - PLEASE CHECK !');
            Visual.set(
                {$wrapper, top: '-200%'}
            )
            break;
    }
}


/**
 *
 * @param {string} domain
 */
function openResume(domain) {

    const id = '#' + domain + '_field',
        hostId = "interactive_intro";

    if ('#resume_cv_field' === id) return Timeline.install(hostId)

    if ('#interactive_cv_field' === id) return TimelineInteractive.install(hostId)

    QuotesIntro.install(hostId)
}


export default {
    openResume,
    open,
    reset,
}