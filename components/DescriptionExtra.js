import {dq, cl, strJoin} from "./aux.js";

const CSSID = '#project-extras';
let DATA = null;
let PID = 'WB02';
// let activeImage = 'images/webdes_a1/welcome_page.jpg';


export default (pid) => run(pid);


const run = (pid) => {
    PID = pid || PID;
    DATA = makeData(PID);
    dq(CSSID).innerHTML = view()
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
            ${DATA.files.map && DATA.files.map(path => `<img src="${path}" />`)}
        </section>
        <section class="description-links">
        <h2>LINKS</h2>
            ${DATA.links.map && DATA.links.map(path => `<a href="${path}">${path}</a>`)}
        </section>
            <style>${STYLE}</style>
            <script>${attachListeners()}</script>
    </article>
    `;
}


/**
 *
 */
const attachListeners = () => {
    document.addEventListener('click', (evt) => {
        console.log('ADD LISTENERS :  DESCRIPTION EXTRA')


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


/**
 *
 * @returns {{files: (*|[*]), links: (*|[*]), quotes: [{score: *, text: *, tutor: *}]}}
 */
const makeData = () => {
    // ;
    let {items} = JSON.parse(sessionStorage.MIDATA)
    let item = items.item.find(o => o.id === PID);

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


/*

 */
const STYLE = `
${CSSID} {
    position: relative;
    top: -55%;
    height: 85%;
    width:40%;
    // background: blue;
    overflow: auto;
}
`;


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


run();
