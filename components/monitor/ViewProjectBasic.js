import "/micv/components/description/DescriptionHeader.js"
import "/micv/components/description/DescriptionImage.js"

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
        <div id="description-image">
            <wc-description-image></wc-description-image>
        </div>
    </article>
    <style>
        article {
        display: flex;
        justify-content: space-between;
        height: 200px;
        width: 100%;
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
                image: o.image,
            }
        }
    );

    return data;

};



