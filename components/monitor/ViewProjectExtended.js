import "/micv/components/description/DescriptionHeader.js"
import "/micv/components/description/DescriptionImage.js"
import "/micv/components/description/DescriptionText.js"


const CSSID = 'content-project';
let dataclone = [];
let DATA = '';


export default () => {

    let o = getDataset();

    return `
    <article data-pid=${o.id} class="${CSSID }">
        <div id="description-header">
            <wc-description-header></wc-description-header>
        </div>
        <div id="description-text">
            <wc-description-text></wc-description-text>
        </div>
        <div id="description-image">
            <wc-description-image></wc-description-image>
        </div>
    </article>
    <style>
        article {
            display: grid;
            grid-template-areas:
                    "header image"
                    "text image"
                    ;
            grid-template-rows: 30% 70%;
            grid-template-columns: 70% 30%;
            padding: 10px;
            height: 300px;
        }   
        #description-header {
            grid-area: header;
        }
        #description-text {
            grid-area: text;
            align-self: center;
        }
        #description-image {
            grid-area: image;
            justify-self: end;
        }
    </style>
    `;

}



const getDataset = () => {
    DATA = makeData();
    if (!dataclone.length) cloneData();
    return dataclone.pop();
};


const cloneData = () => {
    dataclone = JSON.parse(JSON.stringify(DATA));
}


/**
 *
 */
const attachListeners = () => {

    document.addEventListener('click', (evt) => {
        if (evt.target.classList.contains(CSSID)) {
        }
    });

}


const makeData = () => {

    let domain = 'WEB',
        o = JSON.parse(sessionStorage.MIDATA),
        items = o.items.item,
        domains = items.filter(o => o.domain === domain);

    let data = domains.map(o => {
            return {
                id: o.id,
                title: o.title ?? 'TITTLE',
                category: o.category ?? 'CATEGORY',
                subcategory: o.subcategory ?? 'SUBCATEGORY',
                description: o.description ? o.description.substring(0, 400) + " ... <i>more</i>" : 'DESCRIPTION',
                image: o.image,
            }
        }
    );

    return data;

};



