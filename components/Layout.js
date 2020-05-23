import {setstyle, remstyle, remattr, cladd, setattr, dq, cl, strJoin} from "./aux.js";
import ProjectGroup from "./ProjectGroup.js";


export const LayoutNavigationProjects = (action) => {
    //
    const Actions = {
        web: () => {
            ProjectGroup('web')
        },
        studies: () => {
            ProjectGroup('studies')
        },
        work: () => {
            ProjectGroup('work')
        },
    };

    if (!(Actions[action])) return;

    Actions[action]();

};


export const LayoutNavigationGlobal = (action) => {
    //
    const Actions = {
        introduction: () => {
            setstyle(dq('#page-projects'), 'display', 'none');
            setstyle(dq('#page-introduction'), 'display', 'flex');
        },
        projects: () => {
            setstyle(dq('#page-introduction'), 'display', 'none');
            setstyle(dq('#page-projects'), 'display', 'flex');
        },
        references: () => {
            return null;
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

