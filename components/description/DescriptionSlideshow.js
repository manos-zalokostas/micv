import {dq, cl, strJoin} from "/utils/ally.js";

const CSSID = '#project-slideshow';
let DATA = '';
// let activeImage = 'images/webdes_a1/welcome_page.jpg';
let activeIndex = 0;

export default (pid) => run(pid);


const run = (pid) => {
    dq(CSSID).innerHTML = view(pid)
}


const view = (pid) => {

     DATA = makeData(pid);

    return `
        <article class="description-slideshow">
            <section>
                <p class="slideshow-preview">
                    <img src="${DATA.images[activeIndex]}"/>
                </p>
            </section>
            <div class="media-navs">
                <nav class="slideshow-nav">
                    <a data-type="next">next</a>
                    <a data-type="prev">prev</a>
                    <a data-type="exit">exit</a>
                </nav>
                <nav class="slideshow-media">
                ${strJoin(DATA.images.map(((path, i) =>
            `<a href="#"><img data-index=${i} src=${path} /></a>`
    )))}
                </nav>
            </div>
                <style>${style()}</style>
            <script>${attachListeners()}</script>
        </article>
    `;
}


const attachListeners = () => {
    document.addEventListener('click', (evt) => {
        // console.log('ADD LISTENERS :  DESCRIPTION SLIDESHOW')
        if (evt.target.parentElement.parentElement.classList.contains('slideshow-media')) {
            // cl('CLICK: ', evt.target.src)
            activeIndex = evt.target.dataset.index;
            dq('.slideshow-preview img').src = DATA.images[activeIndex];
        }

        if (evt.target.parentElement.classList.contains('slideshow-nav')) {
            // cl('CLICK: ', evt.target.dataset.type);
            if (evt.target.dataset.type === 'exit') return;
            // ,
            if (evt.target.dataset.type === 'next' && DATA.images[activeIndex + 1]) activeIndex++;
            if (evt.target.dataset.type === 'prev' && DATA.images[activeIndex - 1]) activeIndex--;

            dq('.slideshow-preview img').src = DATA.images[activeIndex];
        }
    })
}



const makeData = (pid = 'WB02') => {
    let {items} = JSON.parse(sessionStorage.MIDATA)
    let item = items.item.find(o => o.id === pid);


    return {
        // text: item.description,
        images: item.screenshots.shot
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
${CSSID} article.description-slideshow .slideshow-preview img{
    max-width:100%;
    max-height: 100%;
}
${CSSID} article.description-slideshow > section {
    display: flex;
    flex: 4 4 100%;
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
    padding: 10px;
    color: white;
    text-align: right;
}
${CSSID} article.description-slideshow > nav {
    display: flex;
    background: orange;
    flex-flow: column;
    place-content: flex-end;
}
${CSSID} article.description-slideshow > nav > a {
    margin:5px
}
${CSSID} .slideshow-media img {
    width: 80px;
}
${CSSID} .media-navs {
    flex: 1 1 15%;
    display: flex;
    flex-flow: column;
    padding: 0 10px 0 0;
}
${CSSID} nav.slideshow-nav {
    display: flex;
    flex:  1 1 10%;
    flex-flow: column;
    text-align: center;
    align-items: flex-start;
}
${CSSID} nav.slideshow-nav > a {
    color:white;
    padding:2px 4px 4px 4px;
}
${CSSID} nav.slideshow-media {
    display: flex;
    flex-flow: column;
    flex: 4 4 80%;
    place-content: flex-end;
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
