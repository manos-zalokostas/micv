import {dq, cl, strJoin} from "./aux.js";

const CSSID = '#project-extras';

// let activeImage = 'images/webdes_a1/welcome_page.jpg';


export default (o = null) => run(o);


const run = (cssid) => {
    dq(cssid || CSSID).innerHTML = view()
}


const view = () => {
    return `
    <article class="description-extra">
        <section class="description-quote">
           <h2>COMPLEMENTS</h2>
          ${DATA.quotes.map(o =>
        `  <p>
                <span>${o.tutor}</span>
                <span>${o.score}</span>
                <span>${o.text}</span>
            </p>`
    )}
        </section>
        <section class="description-files">
        <h2>FILES</h2>
            ${DATA.files.map(path => `<img src="${path}" />`)}
        </section>
        <section class="description-links">
        <h2>LINKS</h2>
            ${DATA.links.map(path => `<a href="${path}">${path}</a>`)}
        </section>
            <style>.description-files img {width: 40px}</style>
            <script>${attachListeners()}</script>
    </article>
    `;
}


const attachListeners = () => {
    document.addEventListener('click', (evt) => {

        // if (evt.target.parentElement.parentElement.classList.contains('slideshow-media')) {
        //     cl('CLICK: ', evt.target.src)
        //     activeIndex = evt.target.dataset.index;
        //     dq('.slideshow-preview img').src = DATA.images[activeIndex];
        // }
        //
        // if (evt.target.parentElement.classList.contains('slideshow-nav')) {
        //     cl('CLICK: ', evt.target.dataset.type);
        //     if (evt.target.dataset.type === 'exit') return;
        //     // ,
        //     if (evt.target.dataset.type === 'next' && DATA.images[activeIndex + 1]) activeIndex++;
        //     if (evt.target.dataset.type === 'prev' && DATA.images[activeIndex - 1]) activeIndex--;
        //
        //     dq('.slideshow-preview img').src = DATA.images[activeIndex];
        // }
    })
}


const DATA =
    {
        quotes: [
            {
                tutor: 'TUTOR 1',
                score: '80',
                text: `Front-end developer with OOP PHP Zend Framework & Javascript / Jquery (backend was a remote service)
                Follow explicit instructions to consume required data from remote web services and blueprint layouts to deliver UIs
                Provide ticketing solutions for acknowledged bugs`,
            },
            {
                tutor: 'TUTOR 2',
                score: '87',
                text: `Follow explicit instructions to consume required data from remote web services and blueprint layouts to deliver UIs Provide ticketing solutions for acknowledged bugs. Front-end developer with OOP PHP Zend Framework & Javascript / Jquery (backend was a remote service)`,
            },
        ],
        files: [
            "images/webdes_a1/welcome_page.jpg",
            "images/webdes_a1/add_product_to_basket.jpg",
            "images/webdes_a1/single_product_description.jpg",
            "images/webdes_a1/preview_registered_products.jpg",
            "images/webdes_a1/preview_registered_users.jpg",
        ],
        links: [
            "images/webdes_a1/welcome_page.jpg",
            "images/webdes_a1/add_product_to_basket.jpg",
            "images/webdes_a1/single_product_description.jpg",
            "images/webdes_a1/preview_registered_products.jpg",
            "images/webdes_a1/preview_registered_users.jpg",
        ]
    }


run();
