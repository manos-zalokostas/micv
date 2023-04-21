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
                    </ol>${this.data.files.map && this.data.files.map(path => `<img src="${path}" />`)}
                </section>

                <section class="description-links">
                    <h2>LINKS</h2>
                    <ol>
                        <li>${this.data.tutor || 'ITEM'}</li>
                        <li>${this.data.score || 'ITEM'}</li>
                        <li>${this.data.text || 'ITEM'}</li>
                    </ol>
                    ${this.data.links.map && this.data.links.map(path => `<a href="${path}">${path}</a>`)}
                </section>
            </article>
            <style>
                .description-extra {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    /*background-color: blue;*/
                    height: 100%;
                }
                section{
                    width: 80%;
                    text-align: center;
                }
                h2 {
                    color: white;
                    background-color: #333;
                    margin: 0;
                }
                ol, ul {
                    text-align: left;
                    background-color: #555;
                    margin: 0;
                    display: none;
                }
                section:hover ul, section:hover ol {
                    display: block;
                }
                li {
                    color: white;
                    border-bottom: 2px solid #666;
                    background-color: #555555;
                }
            </style>
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
