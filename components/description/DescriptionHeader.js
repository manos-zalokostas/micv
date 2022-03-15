import {cl, dq, strJoin} from "/utils/ally.js";
// import {dqa} from "/utils/ally.js";
import {LayoutNavigationProjects} from "/layout/main.js";

const CSSID = '#project-title';

export default (pid) => run(pid);


/**
 *
 * @param projecid
 */
const run = (projecid) => {
    dq(CSSID).innerHTML = view(projecid)
}


/**
 *
 * @param pid
 * @returns {string}
 */
const view = (pid) => {
    let DATA = makeData(pid);
    return `
        <section>
            <h2>${DATA.title}</h2>
            <h3 class = 'description-section' data-type="${DATA.category}"> ${DATA.category}</h3>
            <dl>
                ${strJoin(DATA.tools.map(tool => `<dd class="description-tool" data-type="${tool}">${tool}</dd>`))}
            </dl>
            <style>${STYLE}</style>
            <script>${attachListeners()}</script>
        </section>
    `;
}


/**
 *
 */
const attachListeners = () => {
    document.addEventListener('click', (evt) => {
        // console.log('ADD LISTENERS :  DESCRIPTION HEADER')
        if (evt.target.classList.contains( 'description-section')) {
            LayoutNavigationProjects('section', evt.target.dataset.type)
        }
        if (evt.target.classList.contains('description-tool')) {
            LayoutNavigationProjects('tool', evt.target.dataset.type)
        }
    })
}


/**
 *
 * @param pid
 * @returns {{title: (string|string), category: section, tools: (*|[*])}}
 */
const makeData = (pid = 'WB02') => {
    let {items} = JSON.parse(sessionStorage.MIDATA)
    let item = items.item.find(o => o.id === pid);

    return {
        title: item.title,
        category: item.section,
        tools: Array.isArray(item.tools.tool) ? item.tools.tool : [item.tools.tool]
    }
};



/*

 */
const STYLE = `
div#project-title {
    // background:silver;
}
div#project-title > section{
    display:flex;
    flex-wrap: wrap;
    max-height: 100%;
    // overflow: auto;
    // background: yellow;
}
div#project-title > section > h2{flex: 0 0 100%;}

div#project-title > section > h3{
    z-index: 10;
    flex: 0 0 40%;
}

div#project-title > section > dl{
    z-index: 10;
    flex: 0 0 60%;
    display: flex;
    // background: silver;
    height: 15px;
    max-width: 56%;
    overflow: auto;
    height: 100%;
    flex-flow: wrap;
    justify-content: flex-end;
}
`;


const _DATA =
    {
        title: 'PROJECT NAME',
        category: 'CATEGORY 1',
        tools: [
            'tool a',
            'tool b',
            'tool c',
            'tool d',
            'tool e',
            'tool e',
            'tool e',
            'tool e',
            'tool e',
        ]
    }

// run();
