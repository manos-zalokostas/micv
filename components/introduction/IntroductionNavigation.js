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


    async render() {
        this.shadow.innerHTML = `
            <nav>${
                        strJoin(BUTTONS.map(name =>
                            `<a href="#" data-topic="${name}">${name}</a>`
                        ))
                    }
            </nav>
            <link href="/components/introduction/IntroductionNavigation.css"   rel="stylesheet" />
`;

        this.hasMount = true;

    }
}


customElements.define('wc-introduction-navigation', WCIntroductionNavigation);
