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

            <link href="/components/description/DescriptionSlideshow.css" rel="stylesheet" />

        </article>
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


/*

 */
const DATA = {
    text: `Front-end developer with OOP PHP Zend Framework & Javascript / Jquery (backend was a remote service)Follow explicit instructions to consume required data from remote web services and blueprint layouts to deliver UIsProvide ticketing solutions for acknowledged bugs`,
    images: [
        "images/webdes_a1/welcome_page.jpg",
        "images/webdes_a1/add_product_to_basket.jpg",
        "images/webdes_a1/single_product_description.jpg",
        "images/webdes_a1/preview_registered_products.jpg",
        "images/webdes_a1/preview_registered_users.jpg",
    ]
};



customElements.define('wc-description-slideshow', WCDescriptionSlideshow);
