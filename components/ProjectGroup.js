import {dq, strJoin} from "./aux.js";

const CSSID = '#author_presentation';

export default (o = null) => run(o);

const run = (cssid) => {
    // dq(cssid || CSSID).innerHTML = view();
    return  view();
}


const view = () => {
    return `
    <section class="group-project">
        <h3>Project Group 1</h3>
        ${_projectList()}
        <style>${STYLE}</style>
        <script>${attachLoaders()}</script>
    </section>
    `;
};

const attachLoaders = () => {
    document.addEventListener('click', evt => {
        debugger
        if (evt.target.dataset && evt.target.dataset.project) {
            navigateDescription(evt);
        }
    })
};


const navigateDescription = (evt) => {
    console.log(evt.target.dataset.project)
}




const _projectList = () => {
    return `
    <nav>
        ${
        strJoin(DATA.projects.map((str, i) => `<a data-project="${i}">${str}</a>`))
        }
</nav>`

}

const STYLE = `
    .group-project {
        float:left;
        box-sizing:border-box;
        overflow:auto;
        padding:4px;
        width:25%;
        height:20%;
        background:silver;
    }

    .group-project h3 {
    }

    .group-project nav {
        display: none;
        background:yellow;
    }

    .group-project:hover nav {
        display: block;
    }

    .group-project nav a {
        display:block;
        margin: 0 0 0 10%;
        width:90%;
    }
`;

const DATA = {
    projects: ['a', 'b', 'c'],
}

// run('#dev');


