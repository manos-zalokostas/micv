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
        $menu = $('#site_menu'),
        $img = $('#author_presentation > img'),
        $linkActive = $('#site_menu a.selected');


    if ($linkActive.getAttribute('title') === current_page) {
        return;
    }
    let animation_paused = $('#skill_fields > em').classList.contains('paused');

    $linkActive.removeAttribute('class');
    $('#site_menu a[title="' + current_page + '"]').classList.add('selected');


    $menu.animate({'top': '-10%'});

    switch (current_page) {

        case 'about':
            Visual.set(
                {$wrapper, 'top': 0},
                {$img, 'left': 0},
            )
            Introduction.load()
            // if (!Monitor.animation_running && !animation_paused) {
            //     Monitor.invoke(Service.gmode);
            // }
            break;

        case 'projects':

            Visual.set(
                {$wrapper, top: '-100%'},
                {$img, left: '-100%'},
            )
            Content.load()

            // Monitor.invoke('off');
            break;

        case 'certificates':

            Visual.set(
                {$wrapper, top: '-200%'},
                {$img, left: '-100%'},
            )
            Reference.load();
            // Monitor.invoke('off');
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

    /**
     @TODO:: CHECK THE LOADING OF 'INTODUCTION QUOTES' BEFORE OTHER VIEWS DISPLAYED
      => USE DEBUGGER TO SEE THE ALWAYS LOADING 'QUOTES' BEFORE SWITCHED W/ SELECTED LAYOUT
     *
     */

    if ('#resume_cv_field' === id) return Timeline.install(hostId)

    if ('#interactive_cv_field' === id) return TimelineInteractive.install(hostId)

    QuotesIntro.install(hostId)

    // if ( '#document_cv_field' === id )

    // const linkActive = $('#introduction_menu a.selected');
    // if (linkActive) linkActive.removeAttribute('class');
    //
    // $(`#${domain}`).classList.add('selected');
    //
    // if (id === '#document_cv_field') {
    //     reset();
    //     open('projects');
    //
    //     $('#context').setAttribute('style', 'left: -100%;');
    //     PageDescription.openSlider('images/cv_document/micv.pdf', 'pdf');
    // }
    //
    // $All(id).forEach(elem => {
    //     if (elem.id.match('cv_field')) Visual.set({
    //         elem, opacity: '0', left: '-100%'
    //     })
    // });
    //
    // const $pMain = `${id} .main_txt > p`,
    //  $pAux = `${id}  .aux_txt > p`,
    //  $h2Main = `${id}  .main_txt > h2`,
    //  $h3Aux = `${id}  .main_txt > h3`;
    //
    //
    // Visual.set(
    //     {$elemActive, 'opacity': 1, 'left': 0},
    //     {$pMain, left: 0},
    //     {$pAux, right: 0}
    // )
    //
    // Visual.set(
    //     {$h2Main, opacity: 1},
    //     {$h3Aux, opacity: 1}
    // )

    // $(id).animate({'opacity': '1', 'left': '0'});
    // $(id + ' .main_txt > p').animate(
    //     {'left': '0'},
    //     function () {
    //         $(id + ' .main_txt > h2').animate({'opacity': '1'});
    //     }
    // );
    // $(id + ' .aux_txt > p').animate(
    //     {'right': '0'},
    //     function () {
    //         $(id + ' .aux_txt > h3').animate({'opacity': '1'});
    //     }
    // );
}


export default {
    openResume,
    open,
    reset,
}