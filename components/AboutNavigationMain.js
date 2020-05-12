import {dq, cl, strJoin} from "./aux.js";
import {NavigationAbout} from "./Layout.js";

const CSSID = '#introduction-navigation';

// let activeImage = 'images/webdes_a1/welcome_page.jpg';


export default (o = null) => run(o);


const run = (cssid) => {

    dq(cssid || CSSID).innerHTML = view()
}


const view = () => {
    return `
            <nav id="about-navigation">
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

        if (evt.target.parentElement.id === 'about-navigation') {
            cl(evt.target.dataset.type)
            NavigationAbout(evt.target.dataset.type)
        }
    })


}

const style = () => `
${CSSID} nav#about-navigation {
    display: flex;
    place-content: space-evenly;
    flex: 0.25;
    background: slategrey;
}
${CSSID} nav#about-navigation > a {
    flex:0.25;
    color:white;
    text-align: center;
    text-decoration: none;
    border:solid 1px;
}
`;

const DATA =
    {
        buttons: ['welcome', 'timeline', 'interactive', 'document'],
    }


run();
