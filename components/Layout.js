import {remattr, cladd, setattr, dq, cl, strJoin} from "./aux.js";



export const NavigationAbout = (action) => {

    if (!(Actions[action])) return;

    Actions[action]();

};

const Actions = {
    welcome: () => {
        setattr(dq('#resume-text'), 'class', 'hide');
        setattr(dq('#resume-interactive'), 'class', 'hide');
        remattr(dq('#resume-introduction'), 'class');
    },
    timeline: () => {
        remattr(dq('#resume-text'), 'class');
        setattr(dq('#resume-interactive'), 'class', 'hide');
        setattr(dq('#resume-introduction'), 'class', 'hide');
    },
    interactive: () => {
        setattr(dq('#resume-text'), 'class', 'hide');
        remattr(dq('#resume-interactive'), 'class');
        setattr(dq('#resume-introduction'), 'class', 'hide');
    },
    document: () => {
    },
};