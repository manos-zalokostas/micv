import {dqa, dq, cl, strJoin} from "./ally.js";
import {LayoutNavigationProjects} from "./Layout.js";

const CSSID = '#projects-navigation';


/*

 */
export default (o = null) => run(o);



/*

 */
const run = (cssid) => {

    dq(cssid || CSSID).innerHTML = view()
}


/**
 *
 * @returns {string}
 */
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


/**
 *
 */
const attachListeners = () => {

    document.addEventListener('click', (evt) => {
        // console.log('ADD LISTENERS :  PROJECTS NAVIGATION')
        if (Array.from(dqa(`${CSSID} > nav > a`)).includes(evt.target)) {
            // cl(evt.target.dataset.type)
            LayoutNavigationProjects(evt.target.dataset.type)
        }
    })


}



/*

 */
const style = () => `

${CSSID} nav {
    display: flex;
    z-index: 100;
    // place-content: space-evenly;
    width:30%;
}
${CSSID} nav > a {
    flex:0.25;
    color:white;
    text-align: center;
    text-decoration: none;
    // border:solid 1px black;
    // background: slategrey;
}
`;


/*

 */
const DATA =
    {
        buttons: ['web', 'studies', 'work'],
    }


run();
