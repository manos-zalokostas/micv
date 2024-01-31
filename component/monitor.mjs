import PageDescription from "../route/page-description.mjs";
import TabletMenu from "./tablet-menu.mjs";
import Service from "../core/service.mjs";
import Layout from "./layout.mjs";


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

    document.addEventListener(
        'click',
        (event) => {
            const target = event.target;


            /*
            // LISTENERS FOR THE BANNER BUTTONS
             */

            if (target.matches("#skill_fields b")) {
                const pauseBtn = document.querySelector('#skills_preview > div > em');
                if (pauseBtn.classList.contains('paused')) {
                    pause();
                }
                invoke('off');
                filter(target.getAttribute('title'));
            }

            /*
            // LISTENER FOR THE 'PAUSE' BUTTON
             */


            if (target.matches('#skills_preview > div > em')) {
                pause();
            }


            /*
            // LISTENERS FOR THE BANNER - SHOWCASE - ITEMS
             */


            if (target.closest('#skills_preview ul>li>div')) {
                select(target.parentNode.id);
            }


            /*
            MOUSE-ENTER INTERACTION
             */

            // #skills_preview mouseenter
            document.addEventListener('mouseenter', (event) => {
                const target = event.target;


                // LIST BUTTONS 'MOUSEENTER'

                if (target.tagName === 'LI' && (target.parentElement.classList.contains('list') || target.parentElement.classList.contains('sublist'))) {
                    if (target.parentElement.classList.contains('list')) {
                        TabletMenu.listContents(target);
                    } else {
                        event.stopPropagation();
                    }
                }

                // LISTENER FOR THE SKILLS - BANNER
                if (target.matches('#skills_preview')) {
                    const pauseBtn = document.querySelector('#skills_preview > div > em');
                    if (!pauseBtn.classList.contains('paused')) {
                        pauseBtn.style.display = 'block';
                    }
                }
            });


            /*
            MOUSE-LEAVE INTERACTION
            */

            document.addEventListener('mouseleave', function (event) {
                const target = event.target;

                // LIST BUTTON 'MOUSELEAVE'
                if (target.matches('#skills_preview')) {
                    const pauseBtn = document.querySelector('#skills_preview > div > em');
                    if (!pauseBtn.classList.contains('paused')) {
                        pauseBtn.style.display = 'none';
                    }
                }

                if (target.tagName === 'LI' && target.parentElement.classList.contains('list')) {
                    if (!Array.from(target.children[0].children).some(li => li.classList.contains('previewed'))) {
                        target.children[0].remove();
                    }
                }


                if (target.tagName === 'LI' && target.parentElement.id === 'temp_list') {
                    let list_item = target.innerHTML;
                    PageDescription.refresh(list_item, null);
                }


            });
        }
    )
}


function html() {

    return `
               <h1>Resume</h1>
            <div id="skills_preview" class="monitor">
                <div id="skill_fields" class='mbuttons'><b title='project'>projects</b><b
                        title="reference">references</b><b title="tool">skills</b><em>||</em></div>
                <div id="welcome">
                    <h3>Web Development</h3>
                    <h3>Web Design</h3>
                    <h3>Graphics Design</h3>
                    <h3 style="color:goldenrod">Welcome</h3>
                </div>

                <ul>
                    <li id="project" class='slide_animated'>
                        <div class='mitem'>
                            <h2>Projects</h2>
                            <h3>Project Name</h3>
                            <h4>Tech Field</h4>
                            <p>Description</p>
                            <img/>
                        </div>
                        <div>&nbsp;</div>
                    </li>
                    <li id="reference">
                        <div class='mitem'>
                            <h2>References</h2>
                            <h3>Instructor</h3>
                            <h4>Instructor Title</h4>
                            <p>Comment</p>
                            <img/>
                        </div>
                        <div>&nbsp;</div>
                    </li>
                    <li id="tool">
                        <div class='mitem'>
                            <h2>Skills</h2>
                            <div class='mgroupi'>
                                <h4>Tools</h4>
                            </div>
                            <div class="mgroupi">
                                <h4>Tools</h4>
                            </div>
                            <div class='mgroupi'>
                                <h4>Tools</h4>
                            </div>
                            <div class='mgroupi'>
                                <h4>Tools</h4>
                            </div>
                            <div class='mgroupi'>
                                <h4>Tools</h4>
                            </div>
                            <div class='mgroupi'>
                                <h4>Tools</h4>
                            </div>
                            <div class='mgroupi'>
                                <h4>Tools</h4>
                            </div>
                            <div class='mgroupi'>
                                <h4>Tools</h4>
                            </div>
                        </div>
                        <div>&nbsp;</div>
                    </li>
                </ul>
            </div>
            ${css()}
    `

}


function css(){
    return `
    <style>
    

#welcome h2 {
    float: left;
    width: 40%;
    text-align: left;
    font-size: 2em;
}

#welcome h3 {
    float: left;
    width: 100%;
    margin: 0;
    position: absolute;
    top: 30%;
    opacity: 0;
    color: white;
}
    
    
#skills_preview #skill_fields > b.filteron, #skills_preview #skill_fields > b:hover {
    background-color: tomato;
    color: white;
    border-bottom: 1px solid tomato;
}

#introduction #skills_preview .slide_animated {
    position: initial;
    /*display: block;*/
}

#introduction #skills_preview #welcome {
    position: absolute;
    left: 4%;
    font-family: arial;
    font-size: 2em;
    text-align: center;
    height: 100%;
    width: 95%;
}

#introduction #skills_preview ul li > #reference {
    display: block;
}


#introduction #skills_preview ul li#reference > div > p:before {
    content: '"..';
}

#introduction #skills_preview ul li#reference > div > p:after {
    content: '.."';
}

#introduction #skills_preview ul li#tool > div > div:hover {
    cursor: default;
}


.monitor {
    position: absolute;
    top: 8%;
    border: solid 12px #ccc;
    border-radius: 10px;
    border-top-left-radius: 30px;
    background-color: #555;
    margin-left: 1%;
    cursor: pointer;
    width: 75%;
    height: 30%;
}


#introduction .monitor > ul {
    float: left;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    overflow: hidden;
}


#introduction .monitor > ul > li {
    width: 100%;
    height: 100%;
    float: left;
    position: absolute;
    padding: 0;
    margin: 0;
    left: -150%;
    overflow: hidden;
}

.monitor > ul > li > div:last-child {
    /* display: none; */
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    opacity: 0.1;
    width: 70%;
}

.monitor #tool {
    top: -4%;
}



#context .monitor {
    float: left;
    font-family: Tahoma, Geneva, sans-serif;
    height: 82%;
    margin-top: 1%;
    width: 48%;
    background-color: #555;
    overflow-y: auto;
    overflow-x: hidden;
}

#context .monitor > h5 {
    font-size: 20em;
    color: lightslategrey;
    margin: 1%;
    width: 50%;
    position: absolute;
    text-align: center;
}

#context .monitor > ul {
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

#context .monitor ul {
    list-style-type: none;
}


.mbuttons {
    /* background-color: #444; */
    position: absolute;
    right: 8%;
    top: -3%;
    z-index: 30;
    height: 8%;
    border-radius: 2px;
    width: 45%;
}

.mbuttons > * {
    background-color: slategray;
    font-family: calibri;
    border-radius: 2px;
    color: #eee;
    font-size: 1em;
    border: 1px solid #ccc;
    padding: 0;
    margin: 0;
    margin-left: 3px;
    height: 80%;
    width: 31%;
    float: left;
    top: -100%;
    position: relative;
    /* border: solid 1px white; */
}

.mbuttons > b {
    opacity: 0;
    border: solid 4px #555;
    margin: 0;
    border-radius: 0;
}

.mbuttons > em {
    border-radius: 30px;
    position: absolute;
    top: 0;
    right: -200%;
    background-color: slategrey;
    border: 2px solid #555;
    font-style: normal;
    width: 10%;
    display: none;
    left: 100%;
}

.mbuttons > em.paused, .mbuttons > em:hover {
    display: block;
    background-color: tomato;
    color: white;
    border: 2px solid #555;
}



#reference .mitem > h3 a {
    color: cadetblue;
}

#tool .mitem h2 {
    position: relative;
    top: 0;
    left: 0;
    margin: 1% 0;
}

.mitem {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    overflow: hidden;
    font-family: verdana;
    z-index: 10;
}

.mitem > * {
    margin: 0;
    padding: 0;
    position: absolute;
    text-decoration: none;
    color: white;
    text-align: right;
}

.mitem > * * {
    text-decoration: none;
    padding: 0;
    margin: 0;
}

#project .mitem > h2 {
}

#project .mitem > h3 {
    bottom: 9%;
    left: 1%;
    color: goldenrod;
}

.mitem > h4 {
    bottom: 15%;
    left: 2%;
}

#project .mitem > p {
    left: 1%;
    top: 25%;
    width: 65%;
    font-size: 0.8em;
}

#project .mitem > img {
    bottom: 0;
    right: 0;
    max-width: 30%;
    max-height: 80%;
}

.mitem > h2 {
    top: 5%;
    left: 0;
    width: 10%;
    text-align: left;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    background-color: tomato;
    padding: 1%;
    font-size: 1em;
}

.mitem > h3 {
    width: 65%;
    height: 10%;
    text-align: left;
    font-size: 2.8em;
}

#project .mitem > h4 {
    width: 65%;
    height: 10%;
    text-align: left;
    font-size: 1em;
}

#reference .mitem > h3 {
    bottom: 11%;
    left: 22%;
}

#reference .mitem > h4 {
    bottom: 18%;
    left: 22%;
}

.mitem > p > * {
    margin: 0;
    padding: 0;
    display: inline;
}

#reference .mitem > p {
    right: 5%;
    top: 15%;
    width: 70%;
    height: 50%;
    font-size: 1.2em;
    overflow: hidden;
    font-style: italic;
}

#reference .mitem img {
    bottom: 0;
    left: 4%;
    width: 15%;
}



#introduction .mgroupi {
    height: 40%;
    width: 23%;
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

#context .mgroupi .sublist {
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

.mgroupi .sublist ul {
    margin: 0;
    padding: 0;
    border: none;
}

#context .mgroupi .sublist > li {
    margin: 2px;
    background-color: orange;
    padding: 1%;
    color: white;
    font-size: 1em;
    width: 40%;
    height: 20%;
    float: left;
}

.mgroupi > ul > li:hover {
    color: white;
    background-color: tan;
}


</style>
    `
}

function install(id){
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