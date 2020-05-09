import {cl, dq, strJoin} from "./aux.js";

const CSSID = '#description #header';

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


const DATA =
    {
        title: 'What is this site about ?',
        category: 'CATEGORY 1',
        tools: [1, 2, 3, 4, 5]
    }

run();
