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
                <slot></slot>
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
    o.addEventListener('changeIntroTopic', (evt) => {
        o.shadow.querySelectorAll('.introduction-topic > div')
            .forEach(node => node.style.display = 'none');

        o.shadow.querySelector(`.introduction-${evt.detail.topic}`).style.display = 'block'
    })
};


const style = `
<style>
</style>
`


customElements.define('wc-global-wrapper', WCGlobalWrapper);
