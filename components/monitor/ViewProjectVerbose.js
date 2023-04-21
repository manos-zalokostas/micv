import "/micv/components/description/DescriptionSlideshow.js"
import "/micv/components/description/DescriptionHeader.js"
import "/micv/components/description/DescriptionMedia.js"
import "/micv/components/description/DescriptionExtra.js"
import "/micv/components/description/DescriptionText.js"
import "/micv/components/description/DescriptionTag.js"

const CSSID = 'content-project';
let dataclone = [];
let DATA = '';


export default () => {

    return `
     <div id="description-wrapper">

        <div id="description-header">
            <wc-description-header></wc-description-header>
        </div>

        <div id="description-tag">
            <wc-description-tag></wc-description-tag>
        </div>

        <div id="description-text">
            <wc-description-text></wc-description-text>
        </div>

        <div id="description-extra">
            <wc-description-extra></wc-description-extra>
        </div>

        <div id="description-slideshow">
            <wc-description-slideshow></wc-description-slideshow>
        </div>

    </div>

    ` + style()

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



const style = () => `<style>
#description-wrapper {
    display: grid;
    grid-template-areas:
            "header tag"
            "text slideshow"
            "extra slideshow";
    grid-template-rows: 15% 50% 30%;
    grid-template-columns: 50% 50%;
    padding: 10px;
    height: 100%;
}
#description-header {
    grid-area: header;
}
#description-tag {
    grid-area: tag;
}
#description-text {
    grid-area: text
}
#description-slideshow {
    grid-area: slideshow;
}
#description-extra {
    grid-area: extra
}
</style>`
