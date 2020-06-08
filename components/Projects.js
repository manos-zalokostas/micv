import {dqa, dq, strJoin} from "./aux.js";
import {LayoutNavigationProjectShowcase} from "./Layout.js";

let hasAttachedListeners = false;

export default (o = null, i = 0) => run(o, i);


const run = (data, i) => {
    return view(data || DATA, i);
}


const view = (data, i) => {
    return `
    <section class="group-project">
        ${_projectList(data)}
        <style>${i === 0 && STYLE}</style>
        <script>${i === 0 && attachLoaders()}</script>
    </section>
    `;
};


/**
 *
 * @param data
 * @returns {string}
 * @private
 */
const _projectList = (data) => {
    //
    return `<a data-project="${data[0]}">${data[1]}</a>`
}


/**
 *
 */
const attachLoaders = () => {
    !hasAttachedListeners && document.addEventListener('click', evt => {
        console.log('ADD LISTENERS :  PROJECTS')
        if (Array.from(dqa('.group-project  > a')).includes(evt.target)) {
            LayoutNavigationProjectShowcase(evt.target.dataset.project);
            hasAttachedListeners = true;
        }
    })
};


/*

 */
const STYLE = `
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


