import {dq, cl, strJoin} from "./aux.js";

const CSSID = '#project-media';
let DATA = '';
// let activeImage = 'images/webdes_a1/welcome_page.jpg';
let activeIndex = 0;


/**
 */
export default (pid) => run(pid);


/**
 */
const run = (pid) => {
    dq(CSSID).innerHTML = view(pid)
}


/**
 */
const view = (pid) => {

    DATA = makeData(pid);

    return `
        <article class="description-slideshow">
                <nav class="slideshow-media">
                ${strJoin(DATA.images.map(((path, i) =>
            `<a href="#"><img data-index=${i} src=${path} /></a>`
    )))}
                </nav>
                <style>${style()}</style>
            <script>${attachListeners()}</script>
        </article>
    `;
}


/**
 */
const attachListeners = () => {
    document.addEventListener('click', (evt) => {
        console.log('ADD LISTENERS :  DESCRIPTION MEDIA')
        if (evt.target.parentElement.parentElement.classList.contains('slideshow-media')) {
            // cl('CLICK: ', evt.target.src)
            activeIndex = evt.target.dataset.index;
            dq('.slideshow-preview img').src = DATA.images[activeIndex];
        }

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


/**
 */
const makeData = (pid = 'WB02') => {
    let {items} = JSON.parse(sessionStorage.MIDATA)
    let item = items.item.find(o => o.id === pid);


    return {
        // text: item.description,
        images: Array.isArray(item.screenshots.shot) ? item.screenshots.shot : [item.screenshots.shot]
    }
};


const style = () => `
${CSSID} article.description-slideshow {
    display: flex;
    padding: 10px;
    background: black;
    flex-flow: row-reverse;
    height:100%;
}
${CSSID} .slideshow-media img {
    width: 80px;
}
${CSSID} nav.slideshow-media {
    display: flex;
    flex-flow: row;
    flex: 4 4 80%;
    place-content: space-around;
    height:100%;
    align-items: center;
}
`;

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


run();
