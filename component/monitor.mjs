import MonitorViewProject from "./monitor-view-project.mjs";
import PageDescription from "../route/page-description.mjs";
import TabletMenu from "./tablet-menu.mjs";
import Service from "../core/service.mjs";
import Layout from "./layout.mjs";
import {$} from "../core/util.mjs";
import MonitorViewReference from "./monitor-view-reference.mjs";
import MonitorViewTool from "./monitor-view-tool.mjs";


let animation,
    animation_running;


function intro() {
    let icounter = 0;

    const introAnime = setInterval(() => {
        console.log("counter: ", icounter)
        const child1 = document.querySelector('#welcome h3:nth-child(1)');
        const child2 = child1.nextElementSibling;
        const child3 = child2.nextElementSibling;
        const child4 = child3.nextElementSibling;


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
            Layout.openResume('introduction_cv');
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
        if (icounter > 50) {
            icounter = null;
            clearInterval(introAnime);
            document.querySelector('#skill_fields > em').style.right = '-24%';
            document.querySelector('#welcome').remove();
            let ctx = Service.resolveNextEntry('global')
            next(...ctx)
        }
        icounter++;
    }, 120);
}


/**
 *
 * @param {Object} project
 * @param {Object} comment
 * @param {Object} tools
 * @param {string} field
 * @param {string} process_string
 */
function next(project, comment, tools, field, process_string) {

    let p = project;
    let c = comment;
    let t = tools;

    let pdiv = document.querySelector('#project > div:first-child ');
    let pdivl = document.querySelector('#project > div:last-child');
    let cdivl = document.querySelector('#reference > div:last-child');
    let tdiv = document.querySelectorAll('#tool > div > div');
    let cdiv = document.querySelector('#reference > div');
    let data_loaded = false;
    let counter = 0;

    let pct = process_string;
    let pctl = pct.length;

    if (pct.includes('p')) {
        pdiv.querySelector('h3').innerHTML = p.name;
        pdiv.querySelector('h4').innerHTML = p.label;
        pdiv.querySelector('p').innerHTML = p.data;
        pdiv.querySelector('img').setAttribute('src', p.img);
        pdivl.style.background = `url(${p.img}) no-repeat`;
        pdivl.style.backgroundSize = '100%';
        pdivl.style.backgroundPosition = '50%';

        pct = pct.replace('p', '');
        if (pct === '' && !animation_running) {
            Service.gmode = 'project';
            invoke(gmode);
            return;
        }
    }

    if (pct.includes('c')) {
        cdiv.querySelector('h3').innerHTML = c.name;
        cdiv.querySelector('h3').setAttribute('title', c.item);
        cdiv.querySelector('h4').innerHTML = c.label;
        cdiv.querySelector('p').innerHTML = c.data;
        cdiv.querySelector('img').setAttribute('src', c.img);
        cdivl.style.background = `url(${c.img}) no-repeat`;
        cdivl.style.backgroundSize = '100%';
        cdivl.style.backgroundPosition = '50%';

        pct = pct.replace('c', '');
        if (pct === '' && !animation_running) {
            Service.gmode = 'reference';
            invoke(Service.gmode);
            return;
        }
    }

    if (pct.includes('t')) {

        _nextTools(tdiv, t, counter, field, pctl);
    }
}


/**
 *
 * @param {NodeList} divs
 * @param {NodeList} skills
 * @param {number} counter
 * @param {string} field
 * @param {number} pctl
 */
function _nextTools(divs, skills, counter, field, pctl) {

    let node = divs[counter];
    let name = skills[counter];

    node.innerHTML = `<h4>${name.replace(/_/g, ' ')}</h4><img src="images/tech_logos/${name}.jpg" />`;

    counter++;

    if (animation_running) {
        return;
    }
    if (counter < divs.length) {
        _nextTools(divs, skills, counter, field, pctl);
    }

    Service.gmode = (pctl > 1) ? 'global' : 'tool';
    invoke(Service.gmode);
}


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
 * //   THE FUNCTION WILL CHECK IF THE CURRENT DIVS THAT ARE EXAMINED
 // CREATE VALID IMAGES (BY-IMAGE-NAME), AND WILL OUTPUT - IF TRUE



 /**
 * Reset the animation state.
 */
function reset() {
    document.querySelector('.slide_animated img').style.right = '-100%';
    document.querySelector('.slide_animated div:last-child').style.bottom = '-100%';
    document.querySelector('.slide_animated').style.left = '-150%';
    document.querySelector('.slide_animated').removeAttribute('class');
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
    target ??= '';

    if (caller === 'project') {
        if (!target) {
            target = document.querySelector('#' + caller + ' h3').textContent;
        }
        Layout.open('projects');
        PageDescription.refresh(target, 'default');
        return;
    }

    if (caller === 'reference') {
        target = document.querySelector('#' + caller + ' h3').getAttribute('title');
        Layout.open('projects');
        PageDescription.refresh(target, 'studies');
        return;
    }

    if (caller === 'tool') {
        if (!target) {
            target = document.event.target.previousElementSibling.textContent.replace(/ /g, '_');
        }
        document.querySelector('#context').setAttribute('style', 'left: 0;');
        Layout.open('projects');
        TabletMenu.refresh(target, 'keyword');
        return;
    }

    console.log('FUNCTION HANDLE_BANNER_INPUT RUNS WITH A DEFAULT, PLEASE CHECK!');
}


function listen() {


    $('#skills_preview').addEventListener(
        'click',
        (event) => {
            const $elem = event.target;

            if ($elem.title === "project") return MonitorViewProject.install();

            if ($elem.title === "reference") return MonitorViewReference.install();

            if ($elem.title === "tool") return MonitorViewTool.install();


            //
            // /*
            // // LISTENERS FOR THE BANNER BUTTONS
            //  */
            //
            // if (target.matches("#skill_fields b")) {
            //     const pauseBtn = document.querySelector('#skills_preview > div > em');
            //     if (pauseBtn.classList.contains('paused')) {
            //         pause();
            //     }
            //     invoke('off');
            //     filter(target.getAttribute('title'));
            // }
            //
            // /*
            // // LISTENER FOR THE 'PAUSE' BUTTON
            //  */
            //
            //
            // if (target.matches('#skills_preview > div > em')) {
            //     pause();
            // }
            //
            //
            // /*
            // // LISTENERS FOR THE BANNER - SHOWCASE - ITEMS
            //  */
            //
            //
            // if (target.closest('#skills_preview ul>li>div')) {
            //     select(target.parentNode.id);
            // }
            //
            //
            // /*
            // MOUSE-ENTER INTERACTION
            //  */
            //
            // // #skills_preview mouseenter
            // document.addEventListener('mouseenter', (event) => {
            //     const target = event.target;
            //
            //
            //     // LIST BUTTONS 'MOUSEENTER'
            //
            //     if (target.tagName === 'LI' && (target.parentElement.classList.contains('list') || target.parentElement.classList.contains('sublist'))) {
            //         if (target.parentElement.classList.contains('list')) {
            //             TabletMenu.listContents(target);
            //         } else {
            //             event.stopPropagation();
            //         }
            //     }
            //
            //     // LISTENER FOR THE SKILLS - BANNER
            //     if (target.matches('#skills_preview')) {
            //         const pauseBtn = document.querySelector('#skills_preview > div > em');
            //         if (!pauseBtn.classList.contains('paused')) {
            //             pauseBtn.style.display = 'block';
            //         }
            //     }
            // });
            //
            //
            // /*
            // MOUSE-LEAVE INTERACTION
            // */
            //
            // document.addEventListener('mouseleave', function (event) {
            //     const target = event.target;
            //
            //     // LIST BUTTON 'MOUSELEAVE'
            //     if (target.matches('#skills_preview')) {
            //         const pauseBtn = document.querySelector('#skills_preview > div > em');
            //         if (!pauseBtn.classList.contains('paused')) {
            //             pauseBtn.style.display = 'none';
            //         }
            //     }
            //
            //     if (target.tagName === 'LI' && target.parentElement.classList.contains('list')) {
            //         if (!Array.from(target.children[0].children).some(li => li.classList.contains('previewed'))) {
            //             target.children[0].remove();
            //         }
            //     }
            //
            //
            //     if (target.tagName === 'LI' && target.parentElement.id === 'temp_list') {
            //         let list_item = target.innerHTML;
            //         PageDescription.refresh(list_item, null);
            //     }
            //
            //
            // });
        }
    )
}


function html() {

    return `

           <h1>Resume</h1>

            <div id="skills_preview" class="monitor">

                <div id="skill_fields" class='mbuttons'>
                    <b title='project'>projects</b>
                    <b title="reference">references</b>
                    <b title="tool">skills</b>
                    <em>||</em >
                </div>

                <ul>

                    <li id="mi-monitor-view" ></li>

<!--                    <li id="mi-monitor-view-welcome" ></li>-->

<!--                    <li id="mi-monitor-view-project" class='slide_animated'></li>-->

<!--                    <li id="mi-monitor-view-reference"></li>-->

<!--                    <li id="mi-monitor-view-tool"></li>-->

                </ul>

            </div>

            ${css()}
    `

}


function css() {
    return `
    <style>
    
    
.mbuttons {
    position: relative;
    z-index: 15;
    float: right;
    color: #eee;
    padding: 0;
    width: 100%;
    
}

.mbuttons > b {
    /*opacity: 0;*/
    float:right;
    border: solid 4px #555;
    text-transform: uppercase;
    margin: 5px;;
    text-align: center;
    width: 125px;
}

.mbuttons > em {
    float: left;
    text-align: center;
    background-color: slategrey;
    font-style: normal;
    /*width: 48px;*/
    /*display: none;*/
}

.mbuttons > em.paused, 
.mbuttons > em:hover {
    display: block;
    color: white;
    background-color: tomato;
    border: 2px solid #555;
}




.monitor {
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    background-color: #555;
    cursor: pointer;
}

.monitor > ul  {
    list-style: none;;
}

.monitor > ul > li > div:last-child {
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    opacity: 0.1;
    width: 70%;
}








.mitem {
    font-family: verdana;
    color: white;
}

.mitem > h4 {
    position: absolute;;
    bottom: 15%;
    left: 2%;
}

.mitem > h2 {
    width: 10%;
    text-align: left;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    background-color: tomato;
    padding: 1%;
    font-size: 1em;
}

.mitem > h3 {
    font-family: arial;
    text-transform: uppercase;
    color: goldenrod;
    font-size: 2.8em;
}

.mitem > p > * {
    display: inline;
    font-size: 0.8em;
    margin: 0;
    padding: 0;
}




.mgroupi > h4 {
    float: left;
    font-size: 1.5em;
    font-family: calibri;
    width: 44%;
    margin-top: 6%;
}

.mgroupi > img {
    position: relative;
    bottom: -5%;
    right: -100%;
    border-radius: 6px;
    width: 28%;
    border: 4px solid gainsboro;
}

.mgroupi > img:hover {
    cursor: pointer;
    border: 4px solid gold;
}

.mgroupi div > div {
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

.mgroupi {
    float: left;
    list-style-type: none;
    text-align: right;
    color: white;
    width: 30%;
    height: 26%;
    padding-right: 1%;
    margin: 2px;
    background-color: rgba(255, 255, 255, 0.2);
    position: relative;
}

.mgroupi .sublist ul {
    margin: 0;
    padding: 0;
    border: none;
}

.mgroupi > ul > li:hover {
    color: white;
    background-color: tan;
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
    animation_running,
    animation,
    select,
    invoke,
    pause,
    intro,
    filter,
    listen,
    html,
}