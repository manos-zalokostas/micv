import ProjectViewItemlist from "/micv/components/project/ProjectViewItemlist.js";
import {groupByDomain} from "/micv/service/DataStore.js";


let CATEGORY = 'domain';
let FILTER = 'web';

// let CATEGORY = 'section';
// let FILTER = "Site Development";

// let CATEGORY = 'tool';
// let FILTER = 'web_application';


class WCProjectMap extends HTMLElement {

    shadow = '';
    hasMount = false;

    category = '';
    filter = '';


    static get observedAttributes() {
        return [
            "category",
            "filter"
        ];
    }


    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
    }


    attributeChangedCallback(name, prev, next) {

        if (prev !== next) {
            this[name] = next;
        }

        this.render();
    }


    connectedCallback() {

        this.filter = this.getAttribute('filter');
        this.category = this.getAttribute('category');

        this.render();

        this.hasMount = true;
    }


    render() {
        let shadow = this.shadow;
        shadow.innerHTML = view();

        makeData(this.category, this.filter).forEach(
            wc => shadow.firstChild.appendChild(wc)
        )

    }

}


/*

 */
const view = () => `<article class="pool-project">${style}</article>`;


/**
 *
 * @returns {WCProjectViewItemlist[]|WCProjectViewItem[]|*[]}
 */
const makeData = (category, filter) => {

    let data, groups;


    // if (category === 'domain') {
        data = groupByDomain(filter);
        groups = data.map((group, i) => new ProjectViewItemlist(group, i));


        return groups;
    // }

    // if (category === 'section') data = groupBySection(filter);
    //
    // if (category === 'tool') data = groupByTool(filter);

    // groups = data.map((group, i) => new ProjectViewItem(group, i));

    // return groups;

}


/*

 */
const style = `
    <style>
    .pool-project {
        display: flex;
        flex-flow: wrap; 
        justify-content:space-around;
        align-content:center;
        width:100%;
    }
    .pool-project > section {
        flex-basis: 20%;
        box-sizing:border-box;
        margin:1%;
        padding:2%;
    }
</style>
`;


const _DATA = [
    'DOMAIN A', [
        [1, 'PROJECT 1'],
        [2, 'PROJECT 2'],
        [3, 'PROJECT 3'],
        [5, 'PROJECT 4'],
    ]
];


customElements.define('wc-project-map', WCProjectMap);
