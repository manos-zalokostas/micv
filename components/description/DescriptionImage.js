import {itemById} from "/micv/service/DataStore.js";


class WCDescriptionImage extends HTMLElement {

    shadow = '';
    hasMount = false;
    pid = 'WB02';
    item = {};
    data = {};
    img = 0


    static get observedAttributes() {
        return ['item'];
    }


    constructor() {
        super();
        this.item = itemById(this.pid);
        this.data = makeData(this.item)
        this.img = 0;
        this.shadow = this.attachShadow({mode: 'open'})
        attachListeners(this);
    }


    attributeChangedCallback(attr, prev, next) {
        if (attr === 'item' && prev !== next) {
            this.item = JSON.parse(next)
            this.data = makeData(this.item)
            this.pid = this.item.id;
            this.render();
        }
    }


    connectedCallback() {
        this.render();
        this.hasMount = true;
    }


    render() {

        this.shadow.innerHTML = `
        <img class="preview" src="${this.data.images[this.img]}"/>
        <style>
        img {
            margin:0;
            padding:0;
            height: 100%;
        }
        </style>        
    `;

        this.hasMount = true;

    }
}


const attachListeners = (o) => {

    o.shadow.addEventListener('click', (evt) => {

        if (evt.target.classList.contains('media')) {
            console.log(evt.target.dataset.type, o.img)
            o.img = evt.target.dataset.index;
            o.render();
        }

        if (evt.target.classList.contains('nav-btn')) {
            console.log(evt.target.dataset.type, o.img)
            if (evt.target.dataset.type === 'exit') return;
            if (evt.target.dataset.type === 'next' && o.data.images[+o.img + 1]) o.img++;
            if (evt.target.dataset.type === 'prev' && o.data.images[+o.img - 1]) o.img--;
            o.render();
        }
    })

}


const makeData = (item) => ({
    text: item.description,
    images: item.screenshots.shot
})


customElements.define('wc-description-image', WCDescriptionImage);
