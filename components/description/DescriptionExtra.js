import {itemById} from "../../service/DataStore.js";

class WCDescriptionExtra extends HTMLElement {

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
            <article class="description-extra">

                <section class="description-quote">
                   <h2>COMPLEMENTS</h2>
                  ${this.data.quotes.map(o => `
                    <ul>
                        <li>${this.data.tutor || 'ITEM'}</li>
                        <li>${this.data.score || 'ITEM'}</li>
                        <li>${this.data.text || 'ITEM'}</li>
                    </ul>
                `)}
                </section>

                <section class="description-files">
                    <h2>FILES</h2>
                    <ol>
                        <li>${this.data.tutor || 'ITEM'}</li>
                        <li>${this.data.score || 'ITEM'}</li>
                        <li>${this.data.text || 'ITEM'}</li>
                    </ol>
<!--                        ${this.data.files.map && this.data.files.map(path => `<img src="${path}" />`)}-->
                </section>

                <section class="description-links">
                    <h2>LINKS</h2>
                    <ol>
                        <li>${this.data.tutor || 'ITEM'}</li>
                        <li>${this.data.score || 'ITEM'}</li>
                        <li>${this.data.text || 'ITEM'}</li>
                    </ol>
<!--                        ${this.data.links.map && this.data.links.map(path => `<a href="${path}">${path}</a>`)}-->
                </section>

              <link href="/components/description/DescriptionExtra.css" rel="stylesheet" />

            </article>
`;

    }
}


/**
 *
 * @returns {{files: (*|[*]), links: (*|[*]), quotes: [{score: *, text: *, tutor: *}]}}
 */
const makeData = (item) => {

    let files = [],
        links = [];

    if (item.files && item.files.file) {
        files = Array.isArray(item.files.file) ? item.files.file : [item.files.file]
    }
    if (item.links && item.links.link) {
        links = Array.isArray(item.links.link) ? item.links.link : [item.links.link]
    }

    return {
        quotes: [
            {
                tutor: item.tutor,
                score: item.score,
                text: item.description,
            },
        ],
        files: files,
        links: links
    }

};




customElements.define('wc-description-extra', WCDescriptionExtra);


// const DATA =
//     {
//         quotes: [
//             {
//                 tutor: 'TUTOR 1',
//                 score: '80',
//                 text: `Front-end developer with OOP PHP Zend Framework & Javascript / Jquery (backend was a remote service)
//                 Follow explicit instructions to consume required data from remote web services and blueprint layouts to deliver UIs
//                 Provide ticketing solutions for acknowledged bugs`,
//             },
//             {
//                 tutor: 'TUTOR 2',
//                 score: '87',
//                 text: `Follow explicit instructions to consume required data from remote web services and blueprint layouts to deliver UIs Provide ticketing solutions for acknowledged bugs. Front-end developer with OOP PHP Zend Framework & Javascript / Jquery (backend was a remote service)`,
//             },
//         ],
//         files: [
//             "images/webdes_a1/welcome_page.jpg",
//             "images/webdes_a1/add_product_to_basket.jpg",
//             "images/webdes_a1/single_product_description.jpg",
//             "images/webdes_a1/preview_registered_products.jpg",
//             "images/webdes_a1/preview_registered_users.jpg",
//         ],
//         links: [
//             "images/webdes_a1/welcome_page.jpg",
//             "images/webdes_a1/add_product_to_basket.jpg",
//             "images/webdes_a1/single_product_description.jpg",
//             "images/webdes_a1/preview_registered_products.jpg",
//             "images/webdes_a1/preview_registered_users.jpg",
//         ]
//     }


// run();
