import {strJoin} from "/micv/utils/ally.js";
import "/micv/components/project/WCProject.js"

export default class WCProjectViewItemlist extends HTMLElement {

    shadow = '';
    hasMount = false;
    page = 'introduction'
    data = [];


    constructor(data) {
        super();
        this.data = data;
        this.shadow = this.attachShadow({mode: 'open'})
        this.shadow.addEventListener('click', evt => {
            if (evt.target.classList.contains('project')) {
                let pid = evt.target.dataset.pid;
                const nodes = this.shadow.querySelectorAll('nav a');
                const elems = Array.from(nodes);
                elems.forEach(elem => elem.classList.add('hide'))
                elems.find(elem => elem.dataset.pid === pid).classList.add('max')
            }
            if (evt.target.classList.contains('project-exit')) {
                const nodes = this.shadow.querySelectorAll('nav a');
                const elems = Array.from(nodes);
                let pid = evt.target.parentNode.dataset.pid;
                elems.find(elem => elem.dataset.pid === pid).classList.remove('max')
                elems.forEach(elem => elem.classList.remove('hide'))
            }
            if (evt.target.classList.contains('group-project')) {
                this.dispatchEvent(this.shoutMaximizeProjectGroup(evt.target.dataset.gid));
            }
            if (evt.target.classList.contains('group-project-exit')) {
                
                this.dispatchEvent(this.shoutExitProjectGroup(evt.target.parentNode.dataset.gid));
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
        this.shoutMaximizeProjectGroup = (groupId) => new CustomEvent("maximizeProjectGroup", {
                bubbles: true,
                cancelable: false,
                composed: true,
                detail: {
                    groupId
                }
            }
        )
        this.shoutExitProjectGroup = (groupId) => new CustomEvent("exitProjectGroup", {
                bubbles: true,
                cancelable: false,
                composed: true,
                detail: {
                    groupId
                }
            }
        )

    }


    connectedCallback() {
        let shadow = this.shadow;

        this.render();

        setTimeout(
            () => {
                shadow.querySelector(".group-project").classList.add("init")
            }, 250
        )
    }

    html = () => `
<section class="group-project" data-gid=${this.data[0].replaceAll(" ", "_").toLowerCase()}>
    <span class="group-project-exit">x</span>
    <h3>${this.data[0]} </h3>
        <nav>
            ${strJoin(this.data[1].map((pack, i) =>
        `<a class="project" data-pid="${pack[0]}">
                ${pack[1]}
                <span class="project-exit">x</span>
                <wc-project></wc-project>
                </a>`
    ))
    }
        </nav>
</section>
`;


    render() {

        this.shadow.innerHTML = this.html() + style()

    }

}


const style = () => `
    <style>
                .group-project {
                position: relative;
                opacity: 0;
                bottom: -100%;
                right: 200%;
                width: 200%;
                height: 0;
                background-color: #aaa;
                transition: bottom .5s, right .5s, height .2s, opacity 4s, width 1s;
            }
            
            .group-project.init {
                opacity: 1;
                bottom: 0;
                right: 0;
                width: 100%;
                height: 200px;
            }

            .group-project.max {
                z-index: 10;
                opacity: 1;
                left: 0;
                top: 0;
                bottom: unset;
                right: unset;
                width: 100%;
                height: 100%;
                position: absolute;
            }

            .group-project.min {
                /*opacity: 1;*/
                /*bottom: 0;*/
                /*right: 0;*/
                /*width: 100%;*/
                /*height: 200px;*/
            }

            .group-project.hide {
                display: none;
                /*opacity: 1;*/
                /*bottom: 0;*/
                /*right: 0;*/
                /*width: 100%;*/
                /*height: 200px;*/
            }
            
            
            h3 {
                font-size: 1.5rem;
                color: white;
                text-align: center;
                text-decoration: underline;
            }

             span {
                background: red
            }
            
            nav {
                /*display: flex;*/
                /*flex-direction: column;*/
                /*flex-wrap: wrap;*/
                /*justify-content: space-around;*/
                /*align-items: center;*/
                /*height: 60%;*/
                overflow: auto;
            }
            
            nav a {
                /*display: none;*/
                opacity: 1;
                width: 40%;
                height: 40px;
                cursor: pointer;
                transition: bottom .5s, right .5s, height .2s, opacity 4s, width 1s;
                background-color: #888888;
            }

            nav a.hide {
                display:none;
                opacity: 0;
                height: 0;
            }

            nav a.max {
                display:initial;
                position: absolute;
                opacity: 1;
                top: 15vh;
                left: 0;
                width: 100%;
                height: 100%;
            }
            
            /*nav:hover a {*/
            /*    display: block;*/
            /*}*/
    </style>
    `

customElements.define('wc-project-view-itemlist', WCProjectViewItemlist);


