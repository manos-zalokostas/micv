import {strJoin} from "/micv/utils/ally.js";

const BUTTONS = ['introduction', 'resume', 'timeline', 'document'];


class WCIntroductionNavigation extends HTMLElement {

    shadow = '';
    hasMount = false;


    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'})
        this.shadow.addEventListener('click', (evt) => {
            this.dispatchEvent(this.shoutChangeIntoTopic(evt.target.dataset.topic))
        })
        this.shoutChangeIntoTopic = (topic) => new CustomEvent("changeTopicIntroduction", {
                bubbles: true, cancelable: false, composed: true,
                detail: {
                    topic
                }
            }
        )
    }


    connectedCallback() {
        // !this.hasMount && attachListeners(this);
        this.render();
        this.hasMount = true;
    }


    render() {

        this.shadow.innerHTML = `<nav>${
            strJoin(BUTTONS.map(name =>
                `<a href="#" data-topic="${name}">${name}</a>`
            ))
        }
${style}
</nav>
`;

        this.hasMount = true;

    }
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
