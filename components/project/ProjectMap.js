import {strJoin} from "/utils/ally.js";


let FILTER = 'web';
let CATEGORY = 'domain';


class WCProjectMap extends HTMLElement {

    shadow = '';
    hasMount = false;
    img = 1;


    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'})
    }


    static get observedAttributes() {
        return ['width'];
    }


    attributeChangedCallback(name, prev, next) {
        if (name === 'width' && prev !== next) {
            this.width = next;
            this.render();
        }
    }


    connectedCallback() {
        this.render();
    }


    render() {

        this.shadow.innerHTML = view();

        this.hasMount = true;

    }
}


/**
 *
 * @param domain
 * @returns {string}
 */
const view = () => {
    return `
    <article class="pool-project">
    TSIKIS PROJECT-MAP
    ${style}
    </article>
    `;
};



/**
 *
 * @param FILTER
 * @param type
 * @returns {Uint8Array|BigInt64Array|*[]|Float64Array|Int8Array|Float32Array|Int32Array|Uint32Array|Uint8ClampedArray|BigUint64Array|Int16Array|Uint16Array|string[]}
 */
const makeData = () => {

    let data, groups;

    // CATEGORY = 'tool';
    // FILTER = 'php';

    // if (CATEGORY === 'domain') {
    //     data = groupByDomain(FILTER);
    //     groups = data.map((group, i) => ProjectGroup(group, i));
    //     return groups;
    // }
    //
    //
    // if (CATEGORY === 'section') {
    //     data = groupBySection(FILTER);
    //     groups = data.map((group, i) => Projects(group, i));
    //     return groups;
    // }
    //
    //
    // if (CATEGORY === 'tool') {
    //     data = groupByTool(FILTER);
    //     groups = data.map((group, i) => Projects(group, i));
    //     return groups;
    // }


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
