import {dq, strJoin} from "./aux.js";


export default (o = null) => run(o);

const run = (data) => {
    // dq(cssid || CSSID).innerHTML = view();
    return view(data || DATA);
}


const view = (data) => {
    return `
    <section class="group-project">
        <h3>${data[0]}</h3>
        ${_projectList(data[1])}
        <style>${STYLE}</style>
        <script>${attachLoaders()}</script>
    </section>
    `;
};

const attachLoaders = () => {
    document.addEventListener('click', evt => {

        if (evt.target.dataset && evt.target.dataset.project) {
            navigateDescription(evt);
        }
    })
};


const navigateDescription = (evt) => {
    console.log(evt.target.dataset.project)
}


const _projectList = (data) => {

    return `
    <nav>
        ${
        strJoin(data.map((pack, i) => `<a data-project="${pack[0]}">${pack[1]}</a>`))
    }
</nav>`

}

const STYLE = `
    .group-project {
        background:silver;
    }
    .group-project h3 {
    }
    .group-project nav {
        display:flex;
        flex-flow:wrap;
        justify-content: space-around;
    }
    .group-project:hover nav a {
        opacity:1;
    }
    .group-project nav a {
        flex-basis: 40%;;
        opacity:0;
        background:white;
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


