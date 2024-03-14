import Content from "../route/content.mjs";
import Visual from "../core/visual.mjs";
import {$, $All} from "../core/util.mjs";


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


    switch (current_page) {


        case 'projects':
            Visual.set(
                {$wrapper, top: '-100%', left: 0},
                {$img, left: '-100%'},
            )
            Content.load("mi-page-content", {tablet: null, detail: null});
            break;


        case 'projects-content':
            Visual.set(
                {$wrapper, left: '-100%'},
            )
            break;


        case 'projects-content-back':
            Visual.set(
                {$wrapper, left: 0},
            )
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

    // const id = '#' + domain + '_field',
    //     hostId = "interactive_intro";
    //
    // if ('#resume_cv_field' === id) return Timeline.install(hostId)
    //
    // if ('#interactive_cv_field' === id) return TimelineInteractive.install(hostId)
    //
    // QuotesIntro.install(hostId)
}


export default {
    // openResume,
    // reset,
    open,
}