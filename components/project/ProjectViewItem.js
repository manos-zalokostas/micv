export default class WCProjectViewItem extends HTMLElement {

    shadow = '';
    hasMount = false;
    page = 'introduction'
    introTopic = 'welcome'
    data = [];

    constructor(data = DATA) {
        super();
        this.data = data;
        this.shadow = this.attachShadow({mode: 'open'})
        attachListeners(this);
    }


    connectedCallback() {
        this.render();
    }


    render() {

        this.shadow.innerHTML = view(this.data);

        this.hasMount = true;
    }

}


const view = (data, renderTags = true) => {

    return `
    <section class="group-project">
        <a data-project="${data[0]}">${data[1]}</a>
        ${renderTags && style}
    </section>
    `;
};




/**
 *
 */
const attachListeners = () => {
    document.addEventListener('click', evt => {
        // !hasAttachedListeners && document.addEventListener('click', evt => {
        console.log('ADD LISTENERS :  PROJECTS')
        // if (Array.from(dqa('.group-project  > a')).includes(evt.target)) {
        // LayoutNavigationProjectShowcase(evt.target.dataset.project);
        // hasAttachedListeners = true;
        // }
    })
};


/*

 */
const style = `
<style>
    .group-project {
        background:silver;
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
        background:white;
        margin: 4px 0;
        padding:4px;
    }
</style>
`;


/*

 */
const DATA = [
    'DOMAIN A', [
        [1, 'PROJECT 1'],
        [2, 'PROJECT 2'],
        [3, 'PROJECT 3'],
        [5, 'PROJECT 4'],
    ],
];

// run('#dev');

customElements.define('wc-project-view-item', WCProjectViewItem);

