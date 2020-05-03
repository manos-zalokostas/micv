import {dq} from "./aux.js";

const CSSID = '#introduction_cv_field .main_txt';

export default (o = null) => run(o);


const run = (cssid) => {
    dq(cssid || CSSID).innerHTML = view()
    }

const view = () => {
    return `
        <section class="welcome-text">
            <header>${DATA.title}</header>
            <p class="intro">${DATA.text}</p>
        </section>
    `;
}


const DATA =
    {
        title: 'Welcome',
        text: `Creativity is the tool that while enjoy using and practicing is leading me a nice journey throughout diverse educational and occupational experiences. Unfolding my need for being creative and enthousiasm for technology I started my training on graphics design. Leveraging my skills on the area have let me acknowledge spare concepts around web technology. The need for obtaining fundamental understanding has gradually overwhelmed me, and drove me to migrate interest on the field.`,
    }



run();

