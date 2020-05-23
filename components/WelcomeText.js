import {dq} from "./aux.js";

const CSSID = '#resume-introduction > div:first-child';

export default (o = null) => run(o);


const run = (cssid) => {
    dq(cssid || CSSID).innerHTML = view()
}

const view = () => {
    return `
        <section class="welcome-text">
            <header>${DATA.title}</header>
            <p class="intro">${DATA.text}</p>
            <style>${style()}</style>
        </section>
    `;
}

const style = () => `
${CSSID} section.welcome-text {
    display: flex;
    place-content: space-evenly;
    place-items: center;
}
${CSSID} section.welcome-text header {
    flex: 0.3;
    text-align: center;
    font-size: xxx-large;
    font-weight:bold;
    color: slategrey;
}
${CSSID} section.welcome-text p {
    flex: 0.7   
}
`;

const DATA =
    {
        title: 'Welcome',
        text: `Creativity is the tool that while enjoy using and practicing is leading me a nice journey throughout diverse educational and occupational experiences. Unfolding my need for being creative and enthousiasm for technology I started my training on graphics design. Leveraging my skills on the area have let me acknowledge spare concepts around web technology. The need for obtaining fundamental understanding has gradually overwhelmed me, and drove me to migrate interest on the field.`,
    }


run();

