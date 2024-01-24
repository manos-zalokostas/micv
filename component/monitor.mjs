// import {build_selected_item_content} from "./page-description";
// import {nav_bar_designer} from "./page-project";
// import {animate_page} from "./page";


import Service from "../core/service.mjs";


let animation,
    animation_running;


/**
 *
 * @param {string} mode
 */
function invoke(mode) {

    if (mode === 'off') return stop();

    let frames = 10000;
    let counter = 0,
        max = 0,
        index = 0,
        sindex = 0;
    let anime_items;
    let animate_next = true;

    if (mode === 'global') {
        max = document.querySelectorAll('#skills_preview> ul> li').length;
    }
    if (mode === 'reference') {
        sindex += 1;
        max = 1;
    }
    if (mode === 'tool') {
        sindex += 2;
        max = 1;
    }

    index = sindex;

    let num = 0;
    animation = self.setInterval(
        function () {
            animation_running = true;
            if (mode === 'off') {
                stop();
            } else {
                if (counter >= max) {
                    Service.resolveNextEntry(mode);
                    index = sindex;
                    counter = 0;
                }

                let anime_child = document.querySelector('#skills_preview> ul> li:nth-child(' + (index + 1) + ')');

                if (document.querySelector('.slide_animated')) {
                    reset();
                }

                anime_child.setAttribute('class', 'slide_animated');
                anime_child.animate(
                    {'left': 0},
                    function () {
                        anime_child.querySelector('img').animate({'right': 0});
                        anime_child.querySelector('div:last-child').animate({'bottom': 0});
                    }
                );

                counter++;
                index = counter;
            }
        },
        frames
    );
}


/**
 * Reset the animation state.
 */
function reset() {
    document.querySelector('.slide_animated img').style.right = '-100%';
    document.querySelector('.slide_animated div:last-child').style.bottom = '-100%';
    document.querySelector('.slide_animated').removeAttribute('class');
    document.querySelector('.slide_animated').style.left = '-150%';
}


/**
 * Stop the animation.
 */
function stop() {
    window.clearTimeout(animation);
    animation_running = false;
    animation = null;
}


/**
 *
 */
function pause() {
    const pauseBtn = document.querySelector('#skills_preview > div > em');
    if (pauseBtn.getAttribute('class')) {
        pauseBtn.classList.remove();
        animation_running = true;
        invoke(Service.gmode);
    } else {
        pauseBtn.classList.add('paused');
        animation_running = false;
        invoke('off');
    }
}


function start() {
    let icounter = 0;

    const introAnime = setInterval(() => {
        const child1 = document.querySelector('#welcome h3:nth-child(1)');
        const child2 = child1.nextElementSibling;
        const child3 = child2.nextElementSibling;
        const child4 = child3.nextElementSibling;

        if (icounter > 50) {
            clearInterval(introAnime);
            icounter = null;
            document.querySelector('#skill_fields > em').style.right = '-24%';
        }

        if (icounter >= 1) {
            document.querySelector('#skills_preview').style.left = '0';
        }

        if (icounter === 5) {
            document.querySelectorAll('#skill_fields b').forEach(skill => {
                skill.style.top = '0';
                skill.style.opacity = '1';
            });
        }

        if (icounter === 10) {
            child1.style.opacity = '1';
            navigate_resume_page('introduction_cv');
        }

        if (icounter === 18) {
            child1.style.opacity = '0';
        }
        if (icounter === 20) {
            child2.style.opacity = '1';
        }
        if (icounter === 28) {
            child2.style.opacity = '0';
        }
        if (icounter === 30) {
            child3.style.opacity = '1';
        }
        if (icounter === 38) {
            child3.style.opacity = '0';
        }
        if (icounter === 40) {
            child4.style.opacity = '1';
        }
        if (icounter === 48) {
            child4.style.opacity = '0';
        }
        if (icounter === 50) {
            document.querySelector('#welcome').remove();
        }
        icounter++;
    }, 120);
}


/**
 *
 * @param {string} filter
 */
function filter(filter) {
    if (Service.gmode === 'global' || Service.gmode !== filter) {
        Service.gmode = filter;

        const filteronElement = document.querySelector('.filteron');
        if (filteronElement) {
            filteronElement.removeAttribute('class');
        }

        const filterElement = document.querySelector(`#skill_fields>b[title="${filter}"]`);
        filterElement.setAttribute('class', 'filteron');
    } else {
        Service.gmode = 'global';
        document.querySelector(`#skill_fields>b[title="${filter}"]`).removeAttribute('class');
    }

    invoke(Service.gmode);
}


function select(caller, target) {
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


export default {
    animation,
    animation_running,
    select,
    invoke,
    pause,
    filter,
}