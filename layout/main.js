import {setstyle, remstyle, remattr, cladd, setattr, dq, cl, strJoin} from "/micv/utils/ally.js";
// import ProjectGroupPool from "/components/ProjectGroupPool.js";
// import DescriptionText from "/components/DescriptionText.js";
// import DescriptionExtra from "/components/DescriptionExtra.js";
// import DescriptionHeader from "/components/DescriptionHeader.js";
// import DescriptionMedia from "/components/DescriptionMedia.js";
// import DescriptionSlideshow from "./DescriptionSlideshow.js";
import PageProjects from '/pages/projects.js'


/**
 *
 * @param pid
 * @constructor
 */
export const LayoutNavigationProjectShowcase = (pid = null) => {

    let action = pid ? 'enter' : 'leave';

    const Actions = {
        enter: () => {
            DescriptionText(pid);
            DescriptionExtra(pid);
            DescriptionHeader(pid);
            DescriptionMedia(pid);
            // DescriptionSlideshow(pid);
            setstyle(dq('#projects-syndication'), 'display', 'none');
            setstyle(dq('#project-showcase'), 'display', 'flex');
        },
        leave: () => {
            setstyle(dq('#projects-syndication'), 'display', 'flex');
            setstyle(dq('#project-showcase'), 'display', 'none');
        },
    };

    if (!(Actions[action])) return;

    Actions[action]();

};


/**
 *
 * @param str
 * @returns {string}
 */
export const loadRepetitive = (str) => {
    str = str.replace(/\n/g, '')
        .replace(/ {2,}/g, '')
        .replace(/<\/style>/g, "<\/style>\n");

    let regxStyle = /<style>.*<\/style>/g;
    let regxScript = /<script>\w*<\/script>/g;

    let styles = str.match(regxStyle),
        scripts = str.match(regxScript),
        style = '',
        script = '';

    if (styles && styles[0]) {
        style = styles[0]
    }
    if (scripts && scripts[0]) {
        script = scripts[0]
    }

    str = str.replace(regxStyle, '', str);
    str = str.replace(regxScript, "", str);
//
    str += style;
    // str += script;

    return str;
}


/********************************************
 *  ========== EXPIRAMENTAL ===========
 * @param o
 * @param cssid
 */
export const loadElement = (o, cssid) => {

    let html = o.run();

    dq(cssid).innerHTML = `
        ${html}
        <style>${o.setStyles()}</style>
        <script>${o.setListeners()}</script>
`;
};


/**
 *
 * @param action
 * @constructor
 */
export const LayoutNavigationProjects = (action, filter = null) => {
    //de
    const Actions = {
        web: () => {
            ProjectGroupPool(action)
        },
        studies: () => {
            ProjectGroupPool(action)
        },
        work: () => {
            ProjectGroupPool(action)
        },
        section: () => {
            ProjectGroupPool(filter, action)
        },
        tool: () => {
            ProjectGroupPool(filter, action)
        }
    };

    if (!(Actions[action])) return;

    LayoutNavigationProjectShowcase();
    Actions[action]();

};


/**
 *
 * @param action
 * @constructor
 */
export const LayoutNavigationGlobal = (action) => {
    //
    const Actions = {
        introduction: () => {
            setstyle(dq('#page-introduction'), 'display', 'flex');
            setstyle(dq('#page-projects'), 'display', 'none');
            setstyle(dq('#page-footer'), 'display', 'none');
        },
        projects: () => {
            setstyle(dq('#page-introduction'), 'display', 'none');
            setstyle(dq('#page-projects'), 'display', 'flex');
            setstyle(dq('#page-footer'), 'display', 'none');
        },
        references: () => {
            setstyle(dq('#page-introduction'), 'display', 'none');
            setstyle(dq('#page-projects'), 'display', 'none');
            setstyle(dq('#page-footer'), 'display', 'block');
        },
    };

    if (!(Actions[action])) return;

    Actions[action]();

};


/**
 *
 * @param action
 * @constructor
 */
export const LayoutNavigationAbout = (action) => {

    const ActionsIntroduction = {
        welcome: () => {
            setattr(dq('#resume-timeline'), 'class', 'hide');
            setattr(dq('#resume-interactive'), 'class', 'hide');
            remattr(dq('#resume-introduction'), 'class');
        },
        timeline: () => {
            remattr(dq('#resume-timeline'), 'class');
            setattr(dq('#resume-interactive'), 'class', 'hide');
            setattr(dq('#resume-introduction'), 'class', 'hide');
        },
        interactive: () => {
            setattr(dq('#resume-timeline'), 'class', 'hide');
            remattr(dq('#resume-interactive'), 'class');
            setattr(dq('#resume-introduction'), 'class', 'hide');
        },
        document: () => {
        },
    };

    if (!(ActionsIntroduction[action])) return;

    ActionsIntroduction[action]();

};

