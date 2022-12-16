import {strJoin} from "/micv/utils/ally.js";

const BUTTONS = ['web', 'studies', 'work'];


class WCProjectNavigation extends HTMLElement {

    shadow = '';
    hasMount = false;
    img = 1;


    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.shadow.addEventListener('click', (evt) => {
            this.dispatchEvent(this.shoutChangeProjectTopic(evt.target.dataset.topic))
        })
        this.shoutChangeProjectTopic = (topic) =>{
            
            return new CustomEvent("changeTopicProject", {
                    bubbles: true,
                    cancelable: false,
                    composed: true,
                    detail: {
                        topic
                    }
                }
            )
        }
    }


    connectedCallback() {
        this.render();
        this.hasMount = true;
    }


    render() {
        this.shadow.innerHTML = `<nav>${
            strJoin(BUTTONS.map(name => `
                <a data-topic="${name}">${name}</a>
                `))
        }
${style} 
</nav>`;


    }
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


customElements.define('wc-project-navigation', WCProjectNavigation);
