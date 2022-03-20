import {strJoin} from "/utils/ally.js";
import {itemById} from "../../service/DataStore.js";


/**
 */
const makeData = (item ) => {

    return {
        images: Array.isArray(item.screenshots.shot) ? item.screenshots.shot : [item.screenshots.shot]
    }
};



const style =  `
<style>
article.description-slideshow {
    display: flex;
    padding: 10px;
    background: black;
    flex-flow: row-reverse;
    height:100%;
}
.slideshow-media img {
    width: 80px;
}
nav.slideshow-media {
    display: flex;
    flex-flow: row;
    flex: 4 4 80%;
    place-content: space-around;
    height:100%;
    align-items: center;
}
</style>
`;



class WCDescriptionMedia extends HTMLElement {

    shadow = '';
    hasMount = false;
    pid = 'WB02';
    item = {};
    data = {};



    static get observedAttributes() {
        return ['item'];
    }


    constructor() {
        super();
        this.item = itemById(this.pid);
        this.data = makeData(this.item)
        this.shadow = this.attachShadow({mode: 'open'})
    }


    attributeChangedCallback(attr, prev, next) {
        if (attr === 'item' && prev !== next) {
            this.item = JSON.parse(next)
            this.data= makeData(this.item)
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
            <nav class="slideshow-media">${
            strJoin(this.data.images.map(((path, i) => `<a href="#"><img data-index=${i} src=${path} /></a>`)))
        }</nav>
        ${style}
        </article>
    `;

    }
}

customElements.define('wc-description-media', WCDescriptionMedia);


// /**
//  */
// const attachListeners = () => {
//     document.addEventListener('click', (evt) => {
//         // console.log('ADD LISTENERS :  DESCRIPTION MEDIA')
//         if (evt.target.parentElement.parentElement.classList.contains('slideshow-media')) {
//             // cl('CLICK: ', evt.target.src)
//             activeIndex = evt.target.dataset.index;
//             dq('.slideshow-preview img').src = DATA.images[activeIndex];
//         }
//
//         // if (evt.target.parentElement.classList.contains('slideshow-nav')) {
//         //     cl('CLICK: ', evt.target.dataset.type);
//         //     if (evt.target.dataset.type === 'exit') return;
//         //     // ,
//         //     if (evt.target.dataset.type === 'next' && DATA.images[activeIndex + 1]) activeIndex++;
//         //     if (evt.target.dataset.type === 'prev' && DATA.images[activeIndex - 1]) activeIndex--;
//         //
//         //     dq('.slideshow-preview img').src = DATA.images[activeIndex];
//         // }
//     })
// }




//
// const DATA =
//     {
//         text: `
// Front-end developer with OOP PHP Zend Framework & Javascript / Jquery (backend was a remote service)
// Follow explicit instructions to consume required data from remote web services and blueprint layouts to deliver UIs
// Provide ticketing solutions for acknowledged bugs
// `,
//         images: [
//             "images/webdes_a1/welcome_page.jpg",
//             "images/webdes_a1/add_product_to_basket.jpg",
//             "images/webdes_a1/single_product_description.jpg",
//             "images/webdes_a1/preview_registered_products.jpg",
//             "images/webdes_a1/preview_registered_users.jpg",
//         ]
//     }


