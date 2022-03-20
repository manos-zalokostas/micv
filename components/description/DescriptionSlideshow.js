import {strJoin} from "/utils/ally.js";


class WCDescriptionSlideshow extends HTMLElement {

    shadow = '';
    hasMount = false;
    img = 1;


    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'})
    }


    static get observedAttributes() {
        return ['width', 'img'];
    }


    attributeChangedCallback(name, prev, next) {
        if (name === 'width' && prev !== next) {
            this.width = next;
            this.render();
        }
        if (name === 'img' && prev !== next) {
            this.img = next;
            this.render();
        }
    }


    connectedCallback() {
        this.render();
    }


    render() {

        this.shadow.innerHTML = `
        <article style="width:${this.width}%"  img=${this.img} class="description-slideshow">

            <section>
                <nav class="slideshow-nav">
            ${strJoin(
            ['prev', 'next', 'exit'].map(((str) =>
                    `<a class="nav-btn" data-type=${str}>${str}</a>`
            )))}
                </nav>

                <p class="slideshow-preview">
                    <img class="preview" src="${DATA.images[this.img]}"/>
                    <span>TEXT</span>
                </p>
            </section>

            <nav class="slideshow-media">
            ${strJoin(
            DATA.images.map(((path, i) =>
                    `<a href="#"><img class="media" data-index=${i} src=${path} /></a>`
            )))}
            </nav>

               ${style}
            <script>${!this.hasMount && attachListeners(this)}</script>

        </article>
    `;

        this.hasMount = true;

    }
}


const attachListeners = (o) => {

    if (o.hasMount) return;

    o.shadow.addEventListener('click', (evt) => {

        if (evt.target.classList.contains('media')) {
            console.log(evt.target.dataset.type, o.img)
            o.setAttribute('img', evt.target.dataset.index);
        }

        if (evt.target.classList.contains('nav-btn')) {
            console.log(evt.target.dataset.type, o.img)
            if (evt.target.dataset.type === 'exit') return;
            if (evt.target.dataset.type === 'next' && DATA.images[+o.img + 1]) o.setAttribute('img', ++o.img);
            if (evt.target.dataset.type === 'prev' && DATA.images[+o.img - 1]) o.setAttribute('img', --o.img);
        }
    })
}


const style = `
<style>
.description-slideshow {
    display: flex;
    flex-flow: column;
    padding: 10px;
}
.description-slideshow > section {
    display: flex;
    flex: 1 1 100%;
    margin: auto;
    width: 80%;
    flex-flow: column;
    background: silver;
}
.description-slideshow > section > nav{
    display: flex;
    place-content: flex-end;
    color: white;
    margin: 10px 0;
}
.description-slideshow > section > nav > a{
    margin:0 4px;
}
.description-slideshow > section > p {
    display: flex;
    flex: 1 1 100%;
    margin: auto;
    width: 80%;
    flex-flow: column;
    padding: 25px 0;
}
.description-slideshow > section > p > span {
    padding: 10px 0;
}
.description-slideshow > nav {
    display: flex;
    flex: 1 1 100%;
    margin: auto;
    width: 90%;
    place-content: space-evenly;
    padding: 10px 0;
    background: orange;
}
.slideshow-media img {
    width: 80px;
}
</style>
`;


/**
 *
 * @type {{images: string[], text: string}}
 */
const DATA =
    {
        text: `
Front-end developer with OOP PHP Zend Framework & Javascript / Jquery (backend was a remote service)
Follow explicit instructions to consume required data from remote web services and blueprint layouts to deliver UIs
Provide ticketing solutions for acknowledged bugs
`,
        images: [
            "images/webdes_a1/welcome_page.jpg",
            "images/webdes_a1/add_product_to_basket.jpg",
            "images/webdes_a1/single_product_description.jpg",
            "images/webdes_a1/preview_registered_products.jpg",
            "images/webdes_a1/preview_registered_users.jpg",
        ]
    };


customElements.define('wc-description-slideshow', WCDescriptionSlideshow);
