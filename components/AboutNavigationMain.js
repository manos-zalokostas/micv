import {dq, cl, strJoin} from "./aux.js";
import {NavigationAbout} from "./Layout.js";

const CSSID = '#introduction_menu';

// let activeImage = 'images/webdes_a1/welcome_page.jpg';


export default (o = null) => run(o);


const run = (cssid) => {

    dq(cssid || CSSID).innerHTML = view()
}


const view = () => {
    return `
        <div>
            <nav id="about-navigation">
            ${DATA.buttons.map(name => `
            <a href="#" data-type="${name}">${name}</a>
            `)}
            </nav>
            <script>${attachListeners()}</script>
        </div>
    `;
}


const attachListeners = () => {

    document.addEventListener('click', (evt) => {

        if (evt.target.parentElement.id === 'about-navigation') {
            cl(evt.target.dataset.type)
            NavigationAbout(evt.target.dataset.type)
        }
    })


}


const DATA =
    {
        buttons: ['welcome', 'timeline', 'interactive', 'document'],
    }


run();
