class WCReference extends HTMLElement {

    shadow = '';
    hasMount = false;


    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'})
    }


    connectedCallback() {
        this.render();
        this.hasMount = true;
    }


    render() {

        this.shadow.innerHTML = `
            <article id="reference-wrapper">
                ${occupation()}
                ${education()}
                ${certificates()}
                ${socials()}
                <link href="/components/reference/Reference.css" rel="stylesheet" />
            </article>
`
    }
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


const DATA = {
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


customElements.define('wc-reference', WCReference);
