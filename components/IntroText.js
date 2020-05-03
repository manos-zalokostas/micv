import {dq} from "./aux.js";

const CSSID = '#author_presentation';

export default (o = null) => run(o);

const run = (cssid) => {

    dq(cssid || CSSID).innerHTML = view();
}



const view = () => {
    return `
        <p class="intro-text">${DATA.text}</p>
    `;
}


const DATA = {
    text: `
        Creativity is the tool that while enjoy using and practicing is leading me a nice journey throughout diverse educational and occupational experiences. Unfolding my need for being creative and enthousiasm for technology I started my training on graphics design. Leveraging my skills on the area have let me acknowledge spare concepts around web technology. The need for obtaining fundamental understanding has gradually overwhelmed me, and drove me to migrate interest on the field.
        `,
}

run();


