import {dq, cl, strJoin} from "./aux.js";
import {LayoutNavigationProjects} from "./Layout.js";

const CSSID = '#projects-navigation';

// let activeImage = 'images/webdes_a1/welcome_page.jpg';


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

        if (evt.target.parentElement.id === 'projects-navigation') {
//             cl(evt.target.dataset.type)
// debugger
//             LayoutNavigationProjects(evt.target.dataset.type)
        }
    })


}


const style = () => `
${CSSID} na {
    display: flex;
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
