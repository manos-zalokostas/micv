import {strJoin} from "/utils/ally.js";
import {itemById} from "/service/DataStore.js";


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
            console.log(itemById(evt.target.dataset.project))
        })
    }


    connectedCallback() {
        // !this.hasMount && attachLinsteners(this);
        this.render();
    }


    render() {

        this.shadow.innerHTML = view(this.data);

        this.hasMount = true;
    }

}


/**
 *
 * @param data
 * @param i
 * @returns {string}
 */
const view = (data = DATA) => {
    
    return `
    <section class="group-project">
        <h3>${data[0]}</h3>
            <nav> 
                ${strJoin(data[1].map((pack, i) => `<a data-project="${pack[0]}">${pack[1]}</a>`))}
            </nav>
            ${style}
    </section>
    `;
};





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


