import {dq, cl, strJoin} from "./aux.js";

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
        strJoin(DATA.pages.map(page => `<a title="page-${page}">${page}</a>`))
    }
        <style>${style()}</style>
        </nav>
            `;
}


const attachListeners = () => {

    // document.addEventListener('click', (evt) => {
    //
    //     if (evt.target.parentElement.id === 'about-navigation') {
    //         cl(evt.target.dataset.type)
    //         NavigationAbout(evt.target.dataset.type)
    //     }
    // })

}

const style = () => `
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
