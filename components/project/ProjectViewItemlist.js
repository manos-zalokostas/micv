import {strJoin} from "/utils/ally.js";


export default class WCProjectViewItemlist extends HTMLElement {

    shadow = '';
    hasMount = false;
    page = 'introduction'
    introTopic = 'welcome'
    data = [];


    constructor(data = DATA) {
        super();
        this.data = data;
        this.shadow = this.attachShadow({mode: 'open'})
        this.shadow.addEventListener('click', evt => {
            if (evt.target.classList.contains('project')) {
                this.dispatchEvent(this.shoutChangeDescriptionTopic(evt.target.dataset.pid));
            }
        })
        this.shoutChangeDescriptionTopic = (topicId) => new CustomEvent("changeTopicDescription", {
                bubbles: true,
                cancelable: false,
                composed: true,
                detail: {
                    topicId
                }
            }
        )

    }


    connectedCallback() {
        this.render();
    }


    render() {

        this.shadow.innerHTML = `
            <section class="group-project">
                <h3>${this.data[0]}</h3>
                    <nav> 
                        ${strJoin(this.data[1].map((pack, i) => `<a class="project" data-pid="${pack[0]}">${pack[1]}</a>`))}
                    </nav>
                    ${style}
            </section>
`;

    }

}


/*

 */
const style = `
<style>
    .group-project {
        background:#444;
    }
    .group-project h3 {
    }
    .group-project nav {
        display:flex;
        flex-flow:column;
        justify-content: space-around;
    }
    .group-project:hover nav a {
        opacity:1;
    }
    .group-project nav a {
        flex-basis: 40%;;
        opacity:0;
        margin: 4px 0;
        padding:4px;
    }
 </style>
`;


const DATA = [
    'DOMAIN A', [
        [1, 'PROJECT 1'],
        [2, 'PROJECT 2'],
        [3, 'PROJECT 3'],
        [5, 'PROJECT 4'],
    ],
];


customElements.define('wc-project-view-itemlist', WCProjectViewItemlist);


