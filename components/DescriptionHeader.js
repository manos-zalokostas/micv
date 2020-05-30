import {cl, dq, strJoin} from "./aux.js";

const CSSID = '#project-title';

export default (pid) => run(pid);


const run = (projecid) => {
    dq(CSSID).innerHTML = view()
}


const view = (pid) => {
    let DATA = makeData(pid);
    return `
        <section>
            <h2>${DATA.title}</h2>
            <h3 data-type = 'description-category'> ${DATA.category}</h3>
            <dl>
                <dt>TOOLS</dt>
                ${strJoin(DATA.tools.map(tool => `<dd data-type="description-tool">${tool}</dd>`))}
            </dl>
            <style>${STYLE}</style>
            <script>${attachListeners()}</script>
        </section>
    `;
}


const attachListeners = () => {
    document.addEventListener('click', (evt) => {
        if (evt.target.dataset.type === 'description-category') {
            cl('CLICK: ', 'description-category')
        }
        if (evt.target.dataset.type === 'description-tool') {
            cl('CLICK: ', 'description-tool')
        }
    })
}

const STYLE = `
div#project-title {
    // background:silver;
}

div#project-title > section{
    display:flex;
    flex-wrap: wrap;
}

div#project-title > section > h2{flex: 0 0 100%;}

div#project-title > section > h3{
    flex: 0 0 40%;
}

div#project-title > section > dl{
    flex: 0 0 40%;
    display: flex;
}
`;


const makeData = (pid = 'WB02') => {
    let {items} = JSON.parse(sessionStorage.MIDATA)
    let item = items.item.find(o => o.id === pid);

    return {
        title: item.title,
        category: item.category,
        tools: Array.isArray(item.tools.tool) ? item.tools.tool : [item.tools.tool]
}
};


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

run();
