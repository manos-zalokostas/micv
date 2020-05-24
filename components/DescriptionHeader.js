import {cl, dq, strJoin} from "./aux.js";

const CSSID = '#project-title';

export default (o = null) => run(o);


const run = (cssid) => {
    dq(cssid || CSSID).innerHTML = view()
}


const view = () => {
    return `
        <section>
            <h2>${DATA.title}</h2>
            <h3 data-type = 'description-category'>CATEGORY ${DATA.category}</h3>
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
    flex: 1 1 100%;
    flex-direction: column;
}
div#project-title section {
    flex: 1 1 100%;
    flex-direction: column;
}
div#project-title section h2 {
    flex: 1 1 100%;
    flex-direction: column;
}
div#project-title section h3 {
    flex: 1 1 100%;
    flex-direction: column;
    background: blue;
    width: fit-content;
}
div#project-title section dl {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
}
div#project-title section dt {
    display:none;
    padding: 10px  10px 10px 0;
    background: yellow;
    width: initial;
}
div#project-title section dd {
    flex-direction: column;
}
div#project-body {
    flex: 1 1 100%;
}
div#project-extras {}
section {}
`;

const DATA =
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
