import {animate_skills} from "./monitor";

/**
 *
 * @param {Object} project
 * @param {Object} comment
 * @param {Object} tools
 * @param {string} field
 * @param {string} process_string
 */
export function convert_data_to_html(project, comment, tools, field, process_string) {
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
export function place_skill_images(divs, skills, counter, field, pctl) {
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
