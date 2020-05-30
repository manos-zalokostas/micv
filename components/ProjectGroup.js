import {dqa, dq, strJoin} from "./aux.js";
import {LayoutNavigationProjectShowcase} from "./Layout.js";

export default (o = null, i = 0) => run(o, i);


const run = (data, i) => {
    return view(data || DATA, i);
}


const view = (data, i) => {
    return `
    <section class="group-project">
        <h3>${data[0]}</h3>
        ${_projectList(data[1], i)}
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
const _projectList = (data, i) => {

    return `
    <nav> ${
        strJoin(data.map((pack, i) => `<a data-project="${pack[0]}">${pack[1]}</a>`))
    }</nav>`
}


/**
 *
 */
const attachLoaders = () => {
    document.addEventListener('click', evt => {
        if (Array.from(dqa('.group-project > nav > a')).includes(evt.target)) {
            console.log(evt.target.dataset.project)
            LayoutNavigationProjectShowcase(evt.target.dataset.project)
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


const DATA = [
    'DOMAIN A', [
        [1, 'PROJECT 1'],
        [2, 'PROJECT 2'],
        [3, 'PROJECT 3'],
        [5, 'PROJECT 4'],
    ],
];

// run('#dev');


