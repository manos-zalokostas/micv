import {dq, cl, strJoin} from "./aux.js";

const CSSID = '#project-media';

// let activeImage = 'images/webdes_a1/welcome_page.jpg';
let activeIndex = 0;

export default (o = null) => run(o);


const run = (cssid) => {
    dq(cssid || CSSID).innerHTML = view()
}


const view = () => {
    return `
        <article class="description-slideshow">
            <section>
                <nav class="slideshow-nav">
                    <a data-type="next">next</a>
                    <a data-type="prev">prev</a>
                    <a data-type="exit">exit</a>
                </nav>
                <p class="slideshow-preview">
                    <img src="${DATA.images[activeIndex]}"/>
                    <span>TEXT</span>
                </p>
            </section>
            <nav class="slideshow-media">
            ${strJoin(
        DATA.images.map(((path, i) =>
                `<a href="#"><img data-index=${i} src=${path} /></a>`
        )))}
            </nav>
            <style>.${style()}</style>
            <script>${attachListeners()}</script>
        </article>
    `;
}


const attachListeners = () => {
    document.addEventListener('click', (evt) => {
        if (evt.target.parentElement.parentElement.classList.contains('slideshow-media')) {
            cl('CLICK: ', evt.target.src)
            activeIndex = evt.target.dataset.index;
            dq('.slideshow-preview img').src = DATA.images[activeIndex];
        }

        if (evt.target.parentElement.classList.contains('slideshow-nav')) {
            cl('CLICK: ', evt.target.dataset.type);
            if (evt.target.dataset.type === 'exit') return;
            // ,
            if (evt.target.dataset.type === 'next' && DATA.images[activeIndex + 1]) activeIndex++;
            if (evt.target.dataset.type === 'prev' && DATA.images[activeIndex - 1]) activeIndex--;

            dq('.slideshow-preview img').src = DATA.images[activeIndex];
        }
    })
}


const style = () => `
${CSSID} article.description-slideshow {
    display: flex;
    flex-flow: column;
    padding: 10px;
    background: black;
}
${CSSID} article.description-slideshow > section {
    display: flex;
    flex: 1 1 100%;
    margin: auto;
    width: 80%;
    flex-flow: column;
    background: silver;
}
${CSSID} article.description-slideshow > section > nav{
    display: flex;
    place-content: flex-end;
    color: white;
    margin: 10px 0;
}
${CSSID} article.description-slideshow > section > nav > a{
    margin:0 4px;
}
${CSSID} article.description-slideshow > section > p {
    display: flex;
    flex: 1 1 100%;
    margin: auto;
    width: 80%;
    flex-flow: column;
    padding: 25px 0;
}
${CSSID} article.description-slideshow > section > p > span {
    padding: 10px 0;
}
${CSSID} article.description-slideshow > nav {
    display: flex;
    flex: 1 1 100%;
    margin: auto;
    width: 90%;
    place-content: space-evenly;
    padding: 10px 0;
    background: orange;
}
${CSSID} .slideshow-media img {
    width: 80px;
}
`;

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
    }


run();
