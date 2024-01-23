document.addEventListener('DOMContentLoaded', async () => {
    console.log('MCV1');

    let animation = '';
    let animation_running = false;
    let gmode = 'global';

    localStorage.clear();

    await ajax_retrieve_skill_data();

    EVAL_EXTERNAL_URL_COMMAND();

    start_projector_display();

    initializeListeners()
});


/** ===========================
 *
 * LISTENERS
 *
 */


function initializeListeners() {
    const rootElement = document; // You can replace this with the actual root element

    rootElement.addEventListener('click', (event) => {
        const target = event.target;


        // LISTENER FOR THE PAGES


        // Input[value=project] click
        if (target.matches("#search_radio input[value=project]")) {
            document.querySelector(('input[list]')).setAttribute('list', 'project_list');
        }

        // Input[value=skill] click
        if (target.matches("#search_radio input[value=skill]")) {
            document.querySelector(('input[list]')).setAttribute('list', 'skill_list');
        }

        // Input[list] change
        if (target.matches("input[list]")) {
            handleInputListChange.call(target);
        }

        // #site_menu a click
        if (target.matches("#site_menu a")) {
            const current_page = target.innerHTML;
            animate_page(current_page);
        }


        // LISTENERS FOR THE BANNER BUTTONS

        if (target.matches("#skill_fields b")) {
            const pauseBtn = document.querySelector('#skills_preview > div > em');
            if (pauseBtn.classList.contains('paused')) {
                handle_pause_action();
            }
            animate_skills('off');
            configure_banner_display(target.getAttribute('title'));
        }


        // LISTENER FOR THE 'PAUSE' BUTTON


        if (target.matches('#skills_preview > div > em')) {
            handle_pause_action();
        }


        // LISTENERS FOR THE BANNER - SHOWCASE - ITEMS


        if (target.closest('#skills_preview ul>li>div')) {
            handle_banner_input(target.parentNode.id);
        }


        //LISTENERS FOR THE 'INTRODUCTION' PAGE


        if (target.closest('#introduction_menu a')) {
            const domain = target.id;
            navigate_resume_page(domain);
        }

        // #cv_comments click

        if (target.matches('#cv_comments')) {
            const cvDescriptionI = document.querySelector('#cv_description i');
            if (cvDescriptionI.style.display === 'none' || !cvDescriptionI.hasAttribute('style')) {
                cvDescriptionI.style.display = 'block';
                animate_opacity(cvDescriptionI, 1);
            } else {
                animate_opacity(cvDescriptionI, 0, () => {
                    cvDescriptionI.style.display = 'none';
                });
            }
        }


        // LISTENERS FOR THE BUTTONS THAT ISSUE THE TIMELINE DATES  (2001, 2002 etc) TO SCALE AND CHANGE COLOR


        if (target.closest('#timeline_btns a')) {
            const domain = target.id;

            let color;
            if (domain === 'mlt') {
                color = 'gainsboro';
            } else if (domain === 'std') {
                color = 'teal';
            } else {
                color = 'goldenrod';
            }

            const selectedTimelineA = document.querySelector('#timeline a.selected');
            const timelineObjectives = document.querySelector('#objectives');
            const timelineBtnsAWithStyle = document.querySelector('#timeline_btns a[style]');

            if (selectedTimelineA) {
                selectedTimelineA.classList.remove('selected');
                selectedTimelineA.style.paddingBottom = '0';
                timelineObjectives.style.opacity = '0';
            }

            if (timelineBtnsAWithStyle) {
                timelineBtnsAWithStyle.removeAttribute('style');
            }

            target.style.backgroundColor = color;
            document.querySelector('#label').style.color = color;

            document.querySelectorAll('#timeline li').forEach((li) => {
                if (li.classList.contains(domain)) {
                    li.classList.remove('_off');
                    li.style.opacity = '0';
                    li.style.paddingLeft = '6px';
                    li.style.opacity = '1';
                } else {
                    if (!li.classList.contains('_off') && li.classList !== 'default') {
                        li.classList.add('_off');
                        li.style.paddingLeft = '0px';
                    }
                }
            });
        }


// LISTENERS FOR THE TIMELINE DATES (2001, 2005 etc) TO DELIVER (ONCLICKED) THEIR CONTENT ONSCREEN


        if (target.closest('#timeline > li a')) {
            const selectedTimelineA = document.querySelector('#timeline > li a.selected');
            const timelineObjectives = document.querySelector('#objectives');

            if (selectedTimelineA) {
                selectedTimelineA.classList.remove('selected');
                selectedTimelineA.removeAttribute('style');
            }

            target.classList.add('selected');
            target.animate([{paddingBottom: '0'}, {paddingBottom: '100px'}], {
                duration: 500,
                easing: 'ease-in-out',
                fill: 'both'
            });

            timelineObjectives.style.opacity = '0';

            const label = target.parentNode.querySelector('p[title="item_label"]').innerHTML;
            const skill = target.parentNode.querySelector('p[title="item_skills"]').innerHTML;
            document.querySelector('#label').innerHTML = label;
            document.querySelector('#skills').innerHTML = skill;

            timelineObjectives.animate({opacity: '1'}, {duration: 'slow', easing: 'swing'});
        }


        //LISTENERS FOR THE ''WORK'' PAGE

        if (target.tagName === 'A' && target.parentNode.tagName === 'LI' && target.parentNode.parentNode.id === 'menu_tabs') {
            const contextLeft = document.querySelector('#context').style.left;

            if (contextLeft !== '0px') {
                document.querySelector('#context').style.left = '0';
            }

            nav_bar_designer(target.innerHTML, 'navigation');
        }


        // LIST BUTTONS 'CLICK'

        if (target.tagName === 'LI' && target.parentNode.classList.contains('sublist')) {
            const liElements = document.querySelectorAll('li');
            const previewedExists = Array.from(liElements).some(li => li.classList.contains('previewed') && !li.nextElementSibling?.classList.contains('previewed'));

            if (previewedExists) {
                document.querySelector('.previewed').parentElement.parentElement.style.backgroundColor = 'white';
                document.querySelector('.previewed').parentElement.remove();
            }

            target.classList.add('previewed');
            target.parentElement.parentElement.style.backgroundColor = '#eee';
            target.style.backgroundColor = 'white';
            target.style.color = 'orange';

            build_selected_item_content(target.innerHTML, document.querySelector('.list').id);

            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                'event': 'evt-project-preview',
                'project-previewed': target.innerText
            });


            // EXTRA BUTTONS 'CLICK'

            if (target.tagName === 'DIV' && target.parentElement.id === 'iextra') {
                preview_extras(target);
            }


            // MEDIA / FILES / IMAGES ELEMENTS 'CLICK'


            if (target.tagName === 'A' && (target.parentElement.id === 'imedia' || target.parentElement.id === 'ifiles' || target.parentElement.id === 'iscreenshots')) {
                let item_src = target.getAttribute('href');
                let app = "";

                if (target.parentElement.parentElement.id.includes('media')) {
                    app = 'avi';
                } else if (target.parentElement.parentElement.id.includes('files')) {
                    app = 'pdf';
                } else {
                    app = 'jpg';
                }

                target.classList.remove('item_previewed');
                content_handler(item_src, app);
                event.preventDefault();
            }


            // HEAD - KEYWORDS LINKS 'CLICK'


            if (target.tagName === 'A' && target.classList.contains('keys')) {
                nav_bar_designer(target.innerHTML, 'keyword');
                document.getElementById('context').style.left = '0';
                event.preventDefault();
            }


            // HEAD - CATEGORY-KEYWORDS 'CLICK'


            if (target.tagName === 'A' && target.classList.contains('cat_key')) {
                nav_bar_designer(target.innerHTML, 'category');
                document.getElementById('context').style.left = '0';
                event.preventDefault();
            }


            // LIST CREATED BY KEYWORDS 'CLICK'


            if (target.tagName === 'LI' && target.parentElement.id === 'temp_list') {
                list_item = target.innerHTML;
                build_selected_item_content(list_item, null);
            }


        }


        // #skills_preview mouseenter
        rootElement.addEventListener('mouseenter', (event) => {
            const target = event.target;


            // LIST BUTTONS 'MOUSEENTER'

            if (target.tagName === 'LI' && (target.parentElement.classList.contains('list') || target.parentElement.classList.contains('sublist'))) {
                if (target.parentElement.classList.contains('list')) {
                    reveal_list_subcategories(target);
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


        rootElement.addEventListener('mouseleave', function (event) {
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


        });

    })


}


/** ===========================
 *
 *  LISTENERS HELPERS
 *
 */

function handleInputListChange() {
    if (this.getAttribute('list') === 'project_list') {
        handle_banner_input('project', this.value.split(' ').shift());
    }
    if (this.getAttribute('list') === 'skill_list') {
        handle_banner_input('tool', this.value.split(' ').shift());
    }
    document.querySelector("input[list]").value = '';
}


function animate_opacity(selector) {
    const element = document.querySelector(selector);

    if (element) {
        element.style.display = 'block';
        element.style.opacity = '0';

        const duration = 1000; // Set your desired duration in milliseconds
        const startTime = performance.now();

        function animate(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = elapsed / duration;

            element.style.opacity = progress < 1 ? progress : 1;

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        }

        requestAnimationFrame(animate);
    }
}

/**===========================
 *
 * FUNCTIONS
 *
 */

function start_projector_display() {
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
 */
function handle_pause_action() {
    const pauseBtn = document.querySelector('#skills_preview > div > em');
    if (pauseBtn.getAttribute('class')) {
        pauseBtn.classList.remove();
        animation_running = true;
        animate_skills(gmode);
    } else {
        pauseBtn.classList.add('paused');
        animation_running = false;
        animate_skills('off');
    }
}


/**
 *
 * @param {string} domain
 */
function navigate_resume_page(domain) {
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




/**
 *
 */
async function ajax_retrieve_skill_data() {
    let oXML = __GET_CACHED_DATA('sXML', true);

    if (oXML) {
        __INITIALIZE_PAGE_DATA(oXML);
        proccess_ajax_data(gmode);
        return;
    }

    try {
        const response = await fetch('items.xml');

        if (!response.ok) {
            throw new Error('Failed to fetch items.xml');
        }

        const data = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data, 'application/xml');

        __SET_CACHE_DATA('sXML', xmlDoc, true);
        __INITIALIZE_PAGE_DATA(xmlDoc);
        proccess_ajax_data(gmode);

    } catch (error) {
        console.error('Error fetching items.xml:', error.message);
    }
}


/**
 *
 * @param {string} field
 */
function proccess_ajax_data(field) {
    let p = {};
    let c = {};
    let t = [];

    let prun = false, crun = false, trun = false;
    let procstr = '';

    if (field === 'global') {
        prun = true;
        crun = true;
        trun = true;
    }

    if (field === 'project' || prun) {
        procstr = 'p';
        p = __GET_PROJECT();
    }
    if (field === 'reference' || crun) {
        procstr += 'c';
        c = __GET_REFERENCE();
    }
    if (field === 'tool' || trun) {
        procstr += 't';
        t = __GET_TOOLS();
    }

    convert_data_to_html(p, c, t, field, procstr);
}


/**
 *
 * @param {Object} project
 * @param {Object} comment
 * @param {Object} tools
 * @param {string} field
 * @param {string} process_string
 */
function convert_data_to_html(project, comment, tools, field, process_string) {
    let p = project;
    let c = comment;
    let t = tools;

    let pdiv = document.querySelector('#project > div:first-child ');
    let pdivl = document.querySelector('#project > div:last-child');
    let cdiv = document.querySelector('#reference > div');
    let cdivl = document.querySelector('#reference > div:last-child');
    let tdiv = document.querySelectorAll('#tool > div > div');
    let counter = 0;
    let data_loaded = false;

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
            gmode = 'project';
            animate_skills(gmode);
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
            gmode = 'reference';
            animate_skills(gmode);
            return;
        }
    }

    if (pct.includes('t')) {
        place_skill_images(tdiv, t, counter, field, pctl);
    }
}


/**
 * //   THE FUNCTION WILL CHECK IF THE CURRENT DIVS THAT ARE EXAMINED
 // CREATE VALID IMAGES (BY-IMAGE-NAME), AND WILL OUTPUT - IF TRUE

 /**
 *
 * @param {NodeList} divs
 * @param {NodeList} skills
 * @param {number} counter
 * @param {string} field
 * @param {number} pctl
 */
function place_skill_images(divs, skills, counter, field, pctl) {
    let node = divs[counter];
    let name = skills[counter].tagName;

    node.innerHTML = `<h4>${name.replace(/_/g, ' ')}</h4><img src="images/tech_logos/${name}.jpg" />`;

    counter++;

    if (counter < divs.length) {
        place_skill_images(divs, skills, counter, field, pctl);
    } else {
        if (animation_running) {
            return;
        }

        gmode = (pctl > 1) ? 'global' : 'tool';
        animate_skills(gmode);
    }
}


/**
 *
 * @param {string} mode
 */
function animate_skills(mode) {
    if (mode === 'off') {
        stop_animation();
    } else {
        let frames = 10000;
        let counter = 0,
            max = 0,
            index = 0,
            sindex = 0;
        let anime_items;
        let animate_next = true;

        if (mode === 'global') {
            max = document.querySelectorAll('#skills_preview> ul> li').length;
        } else {
            if (mode === 'reference') {
                sindex += 1;
            } else {
                if (mode === 'tool') {
                    sindex += 2;
                }
            }
            max = 1;
        }

        index = sindex;

        let num = 0;
        animation = self.setInterval(
            function () {
                animation_running = true;
                if (mode === 'off') {
                    stop_animation();
                } else {
                    if (counter >= max) {
                        proccess_ajax_data(mode);
                        index = sindex;
                        counter = 0;
                    }

                    let anime_child = document.querySelector('#skills_preview> ul> li:nth-child(' + (index + 1) + ')');

                    if (document.querySelector('.slide_animated')) {
                        reset_animation();
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
}


/**
 * Stop the animation.
 */
function stop_animation() {
    window.clearTimeout(animation);
    animation_running = false;
    animation = null;
}


/**
 * Reset the animation state.
 */
function reset_animation() {
    document.querySelector('.slide_animated img').style.right = '-100%';
    document.querySelector('.slide_animated div:last-child').style.bottom = '-100%';
    document.querySelector('.slide_animated').removeAttribute('class');
    document.querySelector('.slide_animated').style.left = '-150%';
}


/**
 *
 * @param {string} filter
 */
function configure_banner_display(filter) {
    if (gmode === 'global' || gmode !== filter) {
        gmode = filter;

        const filteronElement = document.querySelector('.filteron');
        if (filteronElement) {
            filteronElement.removeAttribute('class');
        }

        const filterElement = document.querySelector(`#skill_fields>b[title="${filter}"]`);
        filterElement.setAttribute('class', 'filteron');
    } else {
        gmode = 'global';
        document.querySelector(`#skill_fields>b[title="${filter}"]`).removeAttribute('class');
    }
    animate_skills(gmode);
}



/**
 * // ENLIST  THE IN-MENU LIST OPTIONS FOR THE 'PROJECT' PAGE
 * @param {HTMLElement} element
 */
function reveal_list_subcategories(element) {
    const oXML = __GET_CACHED_DATA('sXML', true);

    if (oXML) {
        __RESOLVE_AND_DISPLAY_SUBSECTION(element, oXML);
        return;
    }

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
            __RESOLVE_AND_DISPLAY_SUBSECTION(element, xmlData);
        })
        .catch(error => {
            console.error('Failed to fetch data:', error.message);
        });
}


/**
 * // THE SCRIPT HANDLES THE DISPLAY FOR THE 'EXTRAS' FIELD ('MEDIA', 'FILES', ...)
 * - CLICKING ON EACH OF THE FIELDS, THE SCRIPT ANIMATESAND REVEALS IT
 * WHILE AT THE SAME TIME ANIMATES TO HIDE ITS SIBLINGS
 * @param {HTMLElement} element
 */
/**
 * Preview extra information.
 * @param {HTMLElement} element - The HTML element to preview.
 */
function preview_extras(element) {
    let elem = element;

    // Hide the previewed sibling
    let iextra = document.querySelector('#iextra');
    let extraPreview = iextra.querySelector('.extra_preview');
    extraPreview.animate({'height': '5%'});

    // Animate-in the selected field
    elem.setAttribute('class', 'extra_preview');
    elem.animate(
        {'height': '80%'},
        'medium',
        'linear',
        function () {
            elem.querySelector('span').style.display = 'block';
        }
    );
}


/**
 * @param {string} item_requested
 * @param {string} function_caller
 */



/**
 * // AUX-FUNCTION THAT ASSISTS 'NAV_BAR_DESIGNER' FUNCTION TO CLEAN THE FORMAT OF SELECTED MENU BUTTONS
 * @param {HTMLElement} btn
 */
function initialize_button(btn) {
    btn.animate({'padding-top': 0});
}


/**
 * // CLEARS ALL THE DATA DISPLAYED ON SCREEN BY THE LATEST PREVIEWED ITEM, AND DISPLAY, THEM, OFF
 *
 *
 */
function clean_page_data() {
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
 * // CHECK THE DOMAIN THAT THE USER PICKED, AND DECIDE WHICH AUX-FIELD SHOULD OPEN
 // AT THE END OF THE ANIMATION (EXAMPLE: IF DOMAIN='WEB' => LINK-FIELD, IF STUDIES => FILES-FIELD)
 *
 * @param list
 * @returns {Element}
 */
function open_field_on_anime_end(list) {
    let field = {};

    switch (list.toLowerCase()) {
        case 'web':
            field = document.getElementById('ilink');
            break;
        case 'studies':
            field = document.getElementById('icomplements');
            break;
        case 'work':
            field = document.getElementById('imedia');
            break;
        default:
            field = document.getElementById('ifiles');
            break;
    }

    return field;
}


/**
 *
 * @param itemSrc
 * @param app
 */
function content_handler(itemSrc, app) {
    const src = itemSrc;

    // SINCE THE 'PREVIEW' AREA WORKS ALL FOR IMAGES/VIDEOS/PPT/PDF
    // I HAVE INTENTIONALLY DESIGNED THE HTML PAGE AS TO WRAP THE SRC OF THE ABOVE
    // IN 'ANCHOR' TAGS THAT LINK TO THE SOURCE ITSELF.
    // THIS WAY I CAN COMMUNICATE WITH ALL ELEMENTS, EMPOWERED BY A SIMPLER UNIFIED CODE
    const imageParent = document.querySelector(`a[href="${src}"]`);
    let item;

    if (src === 'images/cv_document/micv.pdf') {
        document.querySelectorAll('#iextra > div').forEach(div => {
            div.style.display = 'none';
        });
    }

    // ANIMATES THE OPACITY OF THE 'TEXT and IMAGES' BACKGROUND RESOURCES
    // BEFORE THE SLIDESHOW AREA IS EXPANDED
    const firstChildElements = Array.from(document.querySelector('#ibody > div:first-child').children);
    firstChildElements.forEach(child => {
        child.animate({opacity: 0}, 'normal', () => {
            child.style.display = 'none';
        });
    });

    if (!document.getElementById('media_control')) {
        const mediaControl = document.createElement('div');
        mediaControl.id = 'media_control';
        mediaControl.innerHTML = '<div id="cpanel"><span title="next"> > </span><span title="previous"> < </span><span title="exit"> x </span></div><div id="preview"></div>';
        document.getElementById('description').appendChild(mediaControl);

        document.getElementById('iscreenshots').animate({bottom: '-100%'});
        document.getElementById('idescription').animate({left: '-100%'});

        mediaControl.animate({left: '51%'}, 'linear', () => {
            document.getElementById('cpanel').animate({left: 0});
        });
    }

    item = handle_preview_content(app, src);
    document.getElementById('preview').innerHTML = item.outerHTML;

    const preview = document.getElementById('preview');
    preview.style.right = '-100%';
    preview.children[0].style.opacity = 0;
    preview.children[0].style.right = '-100%';
    preview.children[0].style.opacity = 1;
}


/**
 *
 * @param app
 * @param src
 * @returns {string}
 */
function handle_preview_content(app, src) {
    let item = "";

    switch (app) {
        case 'jpg':
            item += `<img src="${src}" /></div>`;
            break;

        case 'pdf':
            item += `<embed src="${src}" />`;
            break;

        case 'avi':
        case 'swf':
            item += `<iframe src="${src}"></iframe>`;
            break;

        case 'pptx':
            item += `<iframe src="${src}"></iframe>`;
            break;

        default:
            // Handle other cases if needed
            break;
    }

    return item;
}


/**
 *
 * @param direction
 * @param buttonClicked
 */
function slide_images(direction, buttonClicked) {
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
 * Evaluates external URL commands from the window location search.
 * @returns {boolean} Returns true if a command was successfully evaluated, otherwise false.
 */
function EVAL_EXTERNAL_URL_COMMAND() {
    const search = window.location.search;
    if (search) {
        const entries = search.replace('?', '').split('=');
        const type = entries[0];
        const target = entries[1];

        if (type === 'project') {
            handle_banner_input('project', target);
            return true;
        }
        if (type === 'tool') {
            handle_banner_input('tool', target);
            return true;
        }
    }
    return false;
}


/**
 * Retrieves project data.
 * @returns {{img: string, data: string, name: string, label: string}|Document|any|null} The project data.
 * @private
 */
function __GET_PROJECT() {
    let item = {};
    let cacheIdx = '';

    if (temp_projects.length === 0) {
        temp_projects = projects.slice();
    }
    item = temp_projects.pop();
    cacheIdx = _toIndex('p_' + item.id);

    if (__GET_CACHED_DATA(cacheIdx, false)) {
        return __GET_CACHED_DATA(cacheIdx, false);
    }

    // Designate the 'PROJECT' object for 1st-PAGE SHOWCASE
    const p = {
        name: item.name,
        label: item.cat,
        img: item.img,
        data: item.desc
    };

    __SET_CACHE_DATA(cacheIdx, p, false);

    return p;
}


/**
 * Retrieves reference data.
 * @returns {{img: string, item: string, data: string, name: string, label: string}|Document|any|null} The reference data.
 * @private
 */
function __GET_REFERENCE() {
    let o = {};
    let cacheIdx = '';

    if (temp_references.length === 0) {
        temp_references = references.slice();
    }
    o = temp_references.pop();

    // 'project' variable holds the name of the project that was referenced.
    // BUT:: it is not used at the moment
    const project = _toIndex('c_' + o[2]);
    cacheIdx = _toIndex('c_' + o[3]);

    if (__GET_CACHED_DATA(cacheIdx, false)) {
        return __GET_CACHED_DATA(cacheIdx, false);
    }

    let name, data;

    name = o[1];
    data = o[0];

    // THIS WILL BE USED TO REMOVE DUPLICATE ENTRIES FROM THE ARRAY BUILD
    // ckey = name.substring(name.indexOf('">') + 2, name.indexOf(','));

    const c = {
        name: name.substring(0, name.indexOf('</h4>') + 5),
        label: name.substring(name.indexOf('<p>'), name.indexOf('</p>') + 4),
        img: (name.includes('linkedin') > -1) ? 'images/tech_logos/linkedin_user.jpg' : 'images/tech_logos/facebook_user.jpg',
        data: data,
        item: o[3]
    };

    // THROUGH (POP) THE ITEM FROM THE ARRAY, SO THAT IT WILL NOT BE RETRIEVED AGAIN LATER
    __SET_CACHE_DATA(cacheIdx, c, false);

    return c;
}


/**
 * Retrieves tools data.
 * @returns {[]} The tools data.
 * @private
 */
function __GET_TOOLS() {
    let item = [];
    let t = [];
    let size;

    // Assuming 'skills_preview', '#tool', and 'h4' are classes and tags in the HTML structure
    const skillsPreview = document.getElementById('skills_preview');
    const toolElements = skillsPreview.getElementsByClassName('tool');

    // Assuming the size is the number of 'h4' elements inside each 'tool' element
    size = toolElements.length > 0 ? toolElements[0].getElementsByTagName('h4').length : 0;

    for (let i = 0; i < size; i++) {
        if (temp_tools.length === 0) {
            temp_tools = tech_tools.slice();
        }
        t.push(temp_tools.pop());
    }

    return t;
}


/**
 * Initializes page data.
 * @param data The data to initialize.
 * @private
 */
function __INITIALIZE_PAGE_DATA(data) {
    let a = [];
    let proj = {};

    projects = _suffleArray(__GET_ALL_PROJECTS(data));
    temp_projects = projects.slice();

    references = _suffleArray(__GET_ALL_REFERENCES(data));
    temp_references = references.slice();

    tech_tools = _suffleArray(__GET_ALL_TOOLS(data));
    temp_tools = tech_tools.slice();

    _BUILD_SEARCH_LISTS(projects, tech_tools);
}


/**
 * Builds search lists for projects and tools.
 * @param projects The projects to build the search list for.
 * @param tools The tools to build the search list for.
 * @private
 */
function _BUILD_SEARCH_LISTS(projects, tools) {
    let htmlProjects = [];
    let htmlTools = [];

    projects.forEach(function (project) {
        htmlProjects.push("<option value='" + project.name + "'>" + project.name + "</option>");
    });

    tools.forEach(function (tool) {
        htmlTools.push("<option value='" + tool + "'>" + tool + "</option>");
    });

    document.querySelector(('#project_list')).innerHTML = htmlProjects.join('');
    document.querySelector(('#skill_list')).innerHTML = htmlTools.join('');
}


/**
 * Retrieves all tools from the data.
 * @param data The data to retrieve tools from.
 * @returns {[]} The array containing all tools.
 * @private
 */
function __GET_ALL_TOOLS(data) {
    const index = 'all_tools';
    let a = [];
    const cache = __GET_CACHED_DATA(index, false);

    if (cache) {
        return JSON.parse(cache);
    }

    const keys = new Set();
    let key = '';

    data.querySelectorAll('.tool').forEach((tool) => {
        key = tool.textContent.trim();

        if (key !== '-') {
            keys.add(key);
        }
    });

    a = Array.from(keys);
    __SET_CACHE_DATA(index, JSON.stringify(a), false);

    return a;
}


/**
 * Retrieves all projects from the data.
 * @param data The data to retrieve projects from.
 * @returns {[]} The array containing all projects.
 * @private
 */
function __GET_ALL_PROJECTS(data) {
    const index = 'all_projects';
    let a = [];
    const aSerialized = [];
    const cache = __GET_CACHED_DATA(index, false);

    if (cache) {
        return JSON.parse(cache).map((serialized) => JSON.parse(serialized));
    }

    let proj = {};

    data.querySelectorAll('.item').forEach((item) => {
        proj = {
            id: item.querySelector('.id').textContent,
            name: item.querySelector('.title').textContent,
            cat: item.querySelector('.category').textContent,
            desc: ".." + item.querySelector('.description span').textContent + "..",
            img: item.querySelector('.screenshots .shot:first-child').textContent
        };

        a.push(proj);
        aSerialized.push(JSON.stringify(proj));
    });

    __SET_CACHE_DATA(index, JSON.stringify(aSerialized), false);

    return a;
}


/**
 * Retrieves all references from the provided data.
 * @param {Document} data - The XML document containing references.
 * @returns {Array} - An array of reference items.
 * @private
 */
function __GET_ALL_REFERENCES(data) {
    const index = 'all_references';
    let a = [];
    const aSerialized = [];
    let aTemp = [];
    const cache = __GET_CACHED_DATA(index, false);

    if (cache) {
        aSerialized = JSON.parse(cache);
        return aSerialized;
    }

    const comments = data.querySelectorAll('item > comment');
    comments.forEach(function (comment) {
        if (comment.textContent !== '-') {
            aTemp = [
                comment.textContent.substring(comment.textContent.indexOf('<span>') + 6, comment.textContent.indexOf('</span>')),
                comment.previousElementSibling.textContent,
                comment.parentElement.querySelector('title').textContent,
                comment.parentElement.querySelector('id').textContent,
            ];
            a.push(aTemp);
            aSerialized.push(JSON.stringify(aTemp));
        }
    });

    __SET_CACHE_DATA(index, JSON.stringify(a), false);

    return a;
}


/**
 *
 * @param element
 * @param data
 * @private
 */
function __RESOLVE_AND_DISPLAY_SUBSECTION(element, data) {

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


/**
 *
 * @param item_requested
 * @param function_caller
 * @param data
 * @private
 */
function __RESOLVE_AND_POPULATE_MAIN_BOARD(item_requested, function_caller, data) {

    const item = item_requested;
    const caller = function_caller;

    // CLEAN ALL THE DATA DISPLAYED BY THE LATEST PREVIEWED ITM
    // AND DISPLAY, THEM, OFF
    clean_page_data();

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
 * Resolves and displays the item's full description.
 * @param {Object} currentListItem - The current list item.
 * @param {Object} currList - The current list.
 * @param {Object} data - The data to process.
 */
function __RESOLVE_AND_DISPLAY_ITEM_FULL_DESCRIPTION(currentListItem, currList, data) {
    clean_page_data();

    const lItem = Array.from(data.querySelectorAll('item>title')).find(item => item.textContent.includes(currentListItem));

    let num = -250;

    Array.from(lItem.parentElement.children).forEach(child => {
        const tag = child.tagName;
        let data = '';

        if (child.children[0] && child.children[0].nodeType === 1) {
            data = child.children[0].textContent;
            if (data !== '' && data !== '-') {
                handleTagWithData(tag, Array.from(child.children));
            }
        } else {
            data = child.textContent;
            if (data !== '' && data !== '-') {
                handleTagWithData(tag, [child]);
            }
        }
    });

    if (currList) {
        const field = open_field_on_anime_end(currList);
        const context = document.getElementById('context');
        if (context) {
            context.style.left = '-100%';
            preview_extras(field);
        }
        return;
    }

    const context = document.getElementById('context');
    if (context) {
        context.style.left = '-100%';
    }
}


/**
 * Handles the given tag with the corresponding data.
 * @param {string} tag - The HTML tag.
 * @param {Array} data - The data associated with the tag.
 */
function handleTagWithData(tag, data) {
    let mdata = '';

    switch (tag) {
        case 'tools':
            data.forEach(tool => {
                mdata += `<a class="keys" href="#">${tool.textContent}</a>`;
            });
            break;
        case 'screenshots':
            data.forEach(screenshot => {
                const src = screenshot.textContent;
                mdata += `<a href="${src}"><img src="${src}" title="${src.substring(src.lastIndexOf('/') + 1, src.lastIndexOf('.'))}" /></a>`;
                const imgLoader = new Image();
                imgLoader.src = src;
                num += 10;
            });
            break;
        case 'files':
            data.forEach(file => {
                const addr = file;
                const app = addr.textContent.substring(addr.textContent.lastIndexOf(".") + 1);
                const label = addr.textContent.substring(addr.textContent.lastIndexOf("/") + 1, addr.textContent.lastIndexOf("."));
                mdata += `<a href="${addr.textContent}"><img src="images/_buttons/${app}.png" /><p>${label.replace(/_/g, " ").toUpperCase()}</p></a>`;
            });
            break;
        case 'media':
            data.forEach(media => {
                const addr = media;
                const app = addr.textContent.substring(addr.textContent.lastIndexOf(".") + 1);
                const label = addr.textContent.substring(addr.textContent.lastIndexOf(",") + 1, addr.textContent.lastIndexOf("."));
                const src = addr.textContent.substring(0, addr.textContent.lastIndexOf(","));
                mdata += `<a href="${src}"><img src="images/_buttons/${app}.png" /><p>${label.replace(/_/g, " ").toUpperCase()}</p></a>`;
            });
            break;
        case 'links':
            data.forEach(link => {
                const addr = link;
                const app = 'link';
                const label = addr.textContent.substring(link.textContent.lastIndexOf("=") + 1).split('.');
                mdata += `<a target="_blank" style="text-transform: uppercase" href="${link.textContent}">${label.join(' ')}<img src="images/_buttons/link.jpg" style="width:35px; float:right " /></a>`;
            });
            break;
        default:
            /* I LEFT IT PURPOSELY BECAUSE I NEED TO SEE THE 'VALUES' INDEXED BY THE SCRIPT */
            break;
    }

    const descriptionTag = document.getElementById(`i${tag}`);
    if (descriptionTag) {
        descriptionTag.style.display = 'block';
        const spanTag = descriptionTag.querySelector('span');
        if (spanTag) {
            spanTag.innerHTML += mdata;
        }
    }
}


/**
 * Sets cached data in local storage.
 * @param {string} index - The cache index.
 * @param {any} data - The data to be cached.
 * @param {boolean} isXML - Whether the data is XML.
 * @private
 */
function __SET_CACHE_DATA(index, data, isXML) {
    if (isXML) {
        const oSerializer = new XMLSerializer();
        const sXML = oSerializer.serializeToString(data);
        localStorage.setItem(index, sXML);
    } else {
        localStorage.setItem(index, JSON.stringify(data));
    }
}


/**
 * Gets cached data from local storage.
 * @param {string} index - The cache index.
 * @param {boolean} isXML - Whether the data is XML.
 * @returns {Document | any | null} - The cached data.
 * @private
 */
function __GET_CACHED_DATA(index, isXML) {
    const data = localStorage.getItem(index);

    if (data && isXML) {
        const oParser = new DOMParser();
        return oParser.parseFromString(data, 'text/xml');
    }

    if (data && !isXML) {
        return JSON.parse(data);
    }

    return null;
}


/**
 * Converts a string to a cache index.
 * @param {string} str - The input string.
 * @returns {string} - The converted cache index.
 * @private
 */
function _toIndex(str) {
    return str.toLowerCase().replace(/ /g, '_');
}


/**
 * Shuffles an array randomly.
 * @param {Array} a - The input array.
 * @returns {Array} - The shuffled array.
 * @private
 */
function _suffleArray(a) {
    const b = [];
    let x = null;

    while (a.length > 0) {
        x = a.splice(Math.floor(Math.random() * a.length), 1);
        b.push(x[0]);
    }

    return b;
}
