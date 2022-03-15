import {strJoin} from "/utils/ally.js";


const BUTTONS = ['introduction', 'resume', 'timeline', 'document'];



class WCIntroductionNavigation extends HTMLElement {

    shadow = '';
    hasMount = false;


    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'})
        this.signalChangeIntoTopic = (topic) => new CustomEvent("changeIntroTopic", {
                bubbles: true,
                cancelable: false,
                composed: true,
                detail: {
                    topic
                }
            }
        )
    }


    connectedCallback() {
        !this.hasMount && attachListeners(this);
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
                ${
        strJoin(BUTTONS.map(name =>
            `<a href="#"data-topic="${name}">${name}</a>`)
        )
    }
            </nav>
           ${style}
    `;
}


/**
 *
 */
const attachListeners = (o) => {
    o.shadow.addEventListener('click', (evt) => {
        o.dispatchEvent(o.signalChangeIntoTopic(evt.target.dataset.topic))
    })
}


/*

 */
const style = `
<style>
nav {
    display: flex;
    place-content: space-evenly;
    width:30%;
}
nav a {
    flex:0.25;
    color:white;
    text-align: center;
    text-decoration: none;
}
</style>
`;


customElements.define('wc-introduction-navigation', WCIntroductionNavigation);
