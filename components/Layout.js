import {remattr, cladd, setattr, dq, cl, strJoin} from "./aux.js";



export const NavigationAbout = (action) => {

    if (!(Actions[action])) return;

    Actions[action]();

};

const Actions = {
    welcome: () => {
        setattr(dq('#resume_cv_field'), 'class', 'hide');
        setattr(dq('#interactive_cv_field'), 'class', 'hide');
        remattr(dq('#introduction_cv_field'), 'class');
    },
    timeline: () => {
        remattr(dq('#resume_cv_field'), 'class');
        setattr(dq('#interactive_cv_field'), 'class', 'hide');
        setattr(dq('#introduction_cv_field'), 'class', 'hide');
    },
    interactive: () => {
        setattr(dq('#resume_cv_field'), 'class', 'hide');
        remattr(dq('#interactive_cv_field'), 'class');
        setattr(dq('#introduction_cv_field'), 'class', 'hide');
    },
    document: () => {
    },
};