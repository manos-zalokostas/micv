import {dq, dqa, cl, strJoin} from "./ally.js";
import {LayoutNavigationGlobal} from "./Layout.js";

const CSSID = '#global-navigation';

// let activeImage = 'images/webdes_a1/welcome_page.jpg';


export default (o = null) => run(o);

const run = (cssid) => {
    dq(cssid || CSSID).innerHTML = view()
}


const view = () => {
    return `
        <nav>
    ${
        strJoin(DATA.pages.map(page => `<a data-type="${page}"">${page}</a>`))
    }
        <style>${style()}</style>
        <script>${attachListeners()}</script>
        </nav>
            `;
}


const attachListeners = () => {

    document.addEventListener('click', (evt) => {
        // console.log('ADD LISTENERS :  DESCRIPTION GLOBAL NAVIGATION')

        if (Array.from(dqa('#global-navigation > nav > a')).includes(evt.target)) {
           LayoutNavigationGlobal(evt.target.dataset.type)

        }
    })

}

const style = () => `
div#global-navigation {
    position: fixed;
    z-index: 100;
    right: 0;
    top:  0;
}

div#global-navigation > nav > a {
    padding:10px;
}

${CSSID} nav {
    display: flex;
    place-content: space-evenly;
}

${CSSID} nav > a {
    flex:1;
    color: #555;
    background:white;
    border:1px solid #888;
    text-align:center;
    text-transform: uppercase;
}
`

const DATA =
    {
        pages: ['introduction', 'projects', 'references',],
    }


run();
