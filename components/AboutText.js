import {dq} from "./aux.js";

const CSSID = '#introduction_cv_field .aux_txt';

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
        title: 'What is this site about ?',
        text: `On site you may resume both of my occupational and educational timelines, how the two were drawn and evolve in parellel during previous years. Context may be indexed in detail, either as bulleted descriptions or guided by an interactive timeline. Along with the descriptive context you may also have an overview on some of the most critical projects that I have encountered. Therefore you may find available work-samples while working as a freelance developer on the Web, as officer occupied by pharmaceutical company, and last but not least as student at university. For the latter you may additionally index the scores attained, instructors’ comments, while also documentation and video reference whenever appropriate. Finally on the last page there are available links to the officials sites for each cited organization. You are suggested to request for reference where available. If you wish you may contact me using any of my personal accounts provided for some of the most popular social networks. Please suggest the context if you feel like.`,
    }

run();

