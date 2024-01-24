// import {handle_pause_action, configure_banner_display, animate_skills, handle_banner_input} from "./monitor";
// import {build_selected_item_content, preview_extras, content_handler} from "./page-description";
// import {nav_bar_designer, reveal_list_subcategories} from "./page-project";
// import {animate_page, navigate_resume_page} from "./page";
// import {animate_opacity} from "./visual";

import Monitor from "component/monitor.mjs";


export function initializeListeners() {
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
            if (this.getAttribute('list') === 'project_list') {
                Monitor.select('project', this.value.split(' ').shift());
            }
            if (this.getAttribute('list') === 'skill_list') {
                Monitor.select('tool', this.value.split(' ').shift());
            }
            document.querySelector("input[list]").value = '';
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
                Monitor.pause();
            }
            Monitor.invoke('off');
            Monitor.filter(target.getAttribute('title'));
        }


        // LISTENER FOR THE 'PAUSE' BUTTON


        if (target.matches('#skills_preview > div > em')) {
            Monitor.pause();
        }


        // LISTENERS FOR THE BANNER - SHOWCASE - ITEMS


        if (target.closest('#skills_preview ul>li>div')) {
            Monitor.select(target.parentNode.id);
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
