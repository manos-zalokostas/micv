import {itemById} from "../../service/DataStore.js";

class WCGlobalWrapper extends HTMLElement {

    shadow = '';
    hasMount = false;
    page = 'introduction'
    introTopic = 'welcome'

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'})
        this.shadow.innerHTML = `
            <div id="global-wrapper">
                <slot name="global-navigation"></slot>
                <slot name="global-search"></slot>
                <div id="page-content"></div>
            </div>
                `;
    }


    connectedCallback() {
        !this.hasMount && attachLinsteners(this);
        this.render();
    }


    render() {

        let template = document.getElementById(this.page + '-tmpl');
        let templateContent = template.content;

        this.shadow.querySelector('#page-content').appendChild(templateContent.cloneNode(true));

        this.hasMount = true;

    }

}


const attachLinsteners = (o) => {

    o.addEventListener('changePage', (evt) => {
        o.shadow.querySelector('#page-content').innerHTML = '';
        o.page = evt.detail.type;
        o.render();
    })

    o.addEventListener('changeTopicIntroduction', (evt) => {
        o.shadow.querySelectorAll('.introduction-topic > div')
            .forEach(node => node.style.display = 'none');
        o.shadow.querySelector(`.introduction-${evt.detail.topic}`).style.display = 'block'
    })

    o.addEventListener('changeTopicProject', (evt) => {
        let elem = o.shadow.querySelector('wc-project-map');
        elem.setAttribute('filter', evt.detail.topic)

    })

    o.addEventListener('changeTopicDescription', (evt) => {
        o.shadow.querySelector('#page-content').innerHTML = '';
        o.page = 'description';
        o.render();

        let item = itemById(evt.detail.topicId);
        let elems = o.shadow.querySelectorAll('#description-wrapper > div > *');
        elems.forEach(
            elem => elem.setAttribute('item', JSON.stringify(item))
        )
    })

};


const style = `
<style>
</style>
`


customElements.define('wc-global-wrapper', WCGlobalWrapper);
