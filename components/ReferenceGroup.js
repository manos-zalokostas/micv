import {dq, cl, strJoin} from "./aux.js";

const CSSID = '#page-footer';

// let activeImage = 'images/webdes_a1/welcome_page.jpg';


export default (o = null) => run(o);


const run = (cssid) => {
    dq(cssid || CSSID).innerHTML = view()
}


const view = () => {
    return `
    <div>
    ${occupation()}
    ${education()}
    ${certificates()}
    ${socials()}
    <style>
div#page-footer {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
}

div#page-footer > div {
    display: flex;
    flex-flow: row;
    place-content: space-around;
    width: 100%;
    height: 100%;
}

article.reference-domain {
    flex: 1 1 100%;
    background: #444;
    margin: 10px;
    flex-flow: column;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    place-content: space-between;
}

article.reference-domain img {
    width: 36px;
}

article.reference-domain ul {
    display: flex;
    flex-flow: column;
    place-content: space-evenly;
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
    height: 39%;
    background: #ddd;
}

article.reference-domain header {
    flex: 1 25 100%;
    align-self: center;
    justify-self: unset;
    color: #ddd;
    font-weight: bold;
    font-size: x-large;
    text-decoration: underline;
}

article.reference-domain a {
    text-decoration: none;
}

article.reference-domain section {
    flex: 1 4 100%;
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
}

article.reference-domain h2 {
}
article.reference-domain h3 {
}
article.reference-domain ul li {
}
section.reference-group {
}
    </style>
    </div>
    `;
}


const attachListeners = () => {
    document.addEventListener('click', (evt) => {
        // console.log('ADD LISTENERS :  REFERENCE GROUP')
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

const occupation = () => `
<article class="reference-domain">
        <header>OCCUPATION</header>
            ${
    DATA.occupation.map(o => `
                    <section class="reference-group">
                        <h3>${o.name}</h3>
                        <h4>${o.domain}</h4>
                        <ul>
                        ${o.referers.map(ref => `<li><a href="#">${ref}</a></li>`)}
                        </ul>
                    </section>
                    `)
}
</article>
 `;

const education = () => `
<article class="reference-domain">
        <header>EDUCATION</header>
            ${
    DATA.education.map(o => `
                    <section class="reference-group">
                        <h3>${o.name}</h3>
                        <h4>${o.domain}</h4>
                        <ul>
                        ${o.referers.map(ref => `<li><a href="#">${ref}</a></li>`)}
                        </ul>
                    </section>
                    `)
}
</article>
 `;

const certificates = () => `
<article class="reference-domain">
        <header>CERTIFICATES</header>
                    <section class="reference-group">
                        <ul>
                           ${
    DATA.certificates.map(link => `<li><a href="#">${link}</a></li>`)
}
                        </ul>
                    </section>
</article>
 `;

const socials = () => `
<article class="reference-domain">
        <header>SOCIALS</header>
                    <section class="reference-group">
                        <ul>
                           ${
    DATA.socials.map(link => `<li><a href="#"><img src="${link}"/>${link}</a></li>`)
}
                        </ul>
                    </section>
</article>
 `;


const DATA =
    {
        occupation: [
            {
                company: 'COMPANY 1',
                domain: 'DOMAIN 1',
                referers: ['ref 1', 'ref 2', 'ref 3', 'ref 4']
            },
            {
                company: 'COMPANY 2',
                domain: 'DOMAIN 3',
                referers: ['ref 14', 'ref 52', 'ref 53', 'ref 44']
            },
        ],
        education: [
            {
                company: 'SCHOOL 1',
                domain: 'DOMAIN 1',
                referers: ['ref 1', 'ref 2', 'ref 3', 'ref 4']
            },
            {
                company: 'SCHOOL 2',
                domain: 'DOMAIN 3',
                referers: ['ref 14', 'ref 52', 'ref 53', 'ref 44']
            },
        ],
        certificates: [
            "images/webdes_a1/welcome_page.jpg",
            "images/webdes_a1/add_product_to_basket.jpg",
            "images/webdes_a1/single_product_description.jpg",
            "images/webdes_a1/preview_registered_products.jpg",
            "images/webdes_a1/preview_registered_users.jpg",
        ],
        socials: [
            "images/webdes_a1/welcome_page.jpg",
            "images/webdes_a1/add_product_to_basket.jpg",
            "images/webdes_a1/single_product_description.jpg",
            "images/webdes_a1/preview_registered_products.jpg",
            "images/webdes_a1/preview_registered_users.jpg",
        ]
    }


run();
