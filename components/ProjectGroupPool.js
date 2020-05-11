import ProjectGroup from "./ProjectGroup.js";
import {dq, strJoin} from "./aux.js";

const CSSID = '#projects-syndication';

export default (o = null) => run(o);

const run = (cssid) => {
    dq(cssid || CSSID).innerHTML = view();
    // return view();
}


const view = () => {
    return `
    <article class="pool-project">${strJoin(DATA())}
    <style>${STYLE}</style>
    </article>
    `;
};



const STYLE = `
    .pool-project {
        box-sizing:border-box;
        overflow:auto;
        padding:4px;
        width:100%;
        height:100%;
        border: solid 2px red;
        background:orange;
    }
`;

const DATA = () => {
    let html = ProjectGroup();
    let data = new Array(12);
    return data.fill(html);
}

run();


