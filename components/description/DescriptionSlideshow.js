import {strJoin} from "/micv/utils/ally.js";
import {itemById} from "../../service/DataStore.js";


class WCDescriptionSlideshow extends HTMLElement {

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
        <article class="description-slideshow">

            <section>

                <nav class="slideshow-nav">
                    ${
                        strJoin(['prev', 'next', 'exit'].map(((str) =>
                                `<a class="nav-btn" data-type=${str}>${str}</a>`
                        )))
                    }
                </nav>

                <p class="slideshow-preview">
                    <img class="preview" src="${this.data.images[this.img]}"/>
                    <br />
                    <br />
                    <span>TEXT</span>
                </p>

            </section>


            <div class="slideshow-media">
                <nav >
                    ${
                        strJoin(this.data.images.map(((path, i) =>
                                `<a href="#"><img class="media" data-index=${i} src=${path} /></a>`
                        )))
                    }
                </nav>
            </div>
        </article>
        <style>
            .description-slideshow {
                display: grid;
                grid-template-rows: 85% 15%;
                grid-template-columns: 1fr;
                height: 100%;
                /*background-color: blue;*/
            }
            .description-slideshow section {
                margin: auto;
                display: flex;
                flex-direction: column;
                justify-content: start;
                height: 100%;
            }
            .slideshow-preview {
                display: flex;
                flex-direction: column;
            }
            .slideshow-preview img {
                width: 800px;
            }
            .slideshow-media {
                display: flex;
                flex-direction: column;
                /*background-color: blue;*/
                height: 100%;
            }
            .slideshow-media nav {
                display: flex;
                justify-content: space-evenly;
                align-items: center;
                height: 100%;
            }
            .slideshow-media img {
                width: 125px;
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


customElements.define('wc-description-slideshow', WCDescriptionSlideshow);
