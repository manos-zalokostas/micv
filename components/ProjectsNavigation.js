import {dqa, dq, cl, strJoin} from "./aux.js";
import {LayoutNavigationProjects} from "./Layout.js";

const CSSID = '#projects-navigation';


export default (o = null) => run(o);


const run = (cssid) => {

    dq(cssid || CSSID).innerHTML = view()
}


const view = () => {
    return `
            <nav>
            ${
        strJoin(DATA.buttons.map(name => `
                <a href="#" data-type="${name}">${name}</a>
                `))
    }
            </nav>
            <style>${style()}</style>
            <script>${attachListeners()}</script>
    `;
}


const attachListeners = () => {

    document.addEventListener('click', (evt) => {

        if (Array.from(dqa(`${CSSID} > nav > a`)).includes(evt.target)) {
            cl(evt.target.dataset.type)
//
            LayoutNavigationProjects(evt.target.dataset.type)
        }
    })


}


const style = () => `

${CSSID} nav {
    display: flex;
    z-index: 100;
    place-content: space-evenly;
    background: slategrey;
    width:30%;
}
${CSSID} nav > a {
    flex:0.25;
    color:white;
    text-align: center;
    text-decoration: none;
    border:solid 1px;
}
`;

const DATA =
    {
        buttons: ['web', 'studies', 'work'],
    }


run();
