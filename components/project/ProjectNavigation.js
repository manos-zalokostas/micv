import {dqa, strJoin} from "/utils/ally.js";
// import {LayoutNavigationProjects} from "/layout/main.js";



class WCProjectNavigation extends HTMLElement {

    shadow = '';
    hasMount = false;
    img = 1;


    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'})
    }


    // static get observedAttributes() {
    //     return ['width', 'img'];
    // }


    attributeChangedCallback(name, prev, next) {
    }


    connectedCallback() {
        this.render();
    }


    render() {

        this.shadow.innerHTML = view(this);

        this.hasMount = true;

    }
}


/**
 *
 * @returns {string}
 */
const view = (o) => {
    return `
            <nav>
            ${strJoin(DATA.buttons.map(name => `
                <a href="#" data-type="${name}">${name}</a>
                `))}
            </nav>
               ${style}
            <script>${!o.hasMount && attachListeners(o)}</script>
    `;
}


/**
 *
 */
const attachListeners = (o) => {

    o.shadow.addEventListener('click', (evt) => {
        // console.log('ADD LISTENERS :  PROJECTS NAVIGATION')
        if (Array.from(dqa(`> nav > a`)).includes(evt.target)) {
            // cl(evt.target.dataset.type)
            // LayoutNavigationProjects(evt.target.dataset.type)
        }
    })
}


/*

 */
const style = `
<style>
nav {
    display: flex;
    z-index: 100;
    width:30%;
}
nav > a {
    flex:0.25;
    color:white;
    text-align: center;
    text-decoration: none;
}
</style>
`;


/*

 */
const DATA =
    {
        buttons: ['web', 'studies', 'work'],
    }


customElements.define('wc-project-navigation', WCProjectNavigation);
