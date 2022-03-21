const CSSID = 'content-quote';
let dataclone = [];
let DATA = '';


/**
 *
 * @param o
 * @returns {string}
 */
export default () => {

    let o = getDataset();

    return `
    <section data-pid=${o.id} class="${CSSID}">
    <h1>${o.name}</h1>
    <h2>${o.title}</h2>
    <h3>${o.quote}</h3>
    <img src=${o.image} />
    <div>BACKGROUND IMAGE</div>
    <style>${STYLE}</style>
     <script>${attachListeners()}</script>
</section>
    `;
}




/**
 *
 * @returns {*}
 */
const getDataset = () => {
    DATA = makeData();
    if (!dataclone.length) cloneData();
    return dataclone.shift();
};


/**
 *
 */
const cloneData = () => {
    dataclone = JSON.parse(JSON.stringify(DATA));
}


/**
 *
 */
const attachListeners = () => {

    document.addEventListener('click', (evt) => {
        // console.log('ADD LISTENERS :  GLOBAL SEARCH 12')
//
        if (evt.target.classList.contains(CSSID)) {
            // LayoutNavigationGlobal('projects');
            // LayoutNavigationProjectShowcase(evt.target.dataset.pid)
            // // cl(evt.target.value)
        }
    });

}


/**
 *
 */
const makeData = () => {
    //
    let domain = 'STUDIES',
        o = JSON.parse(sessionStorage.MIDATA),
        items = o.items.item,
        domains = items.filter(o => o.domain === domain);


    let data = domains.map(o => {
            let a = o.tutor.split('>');

            return {
                id: o.id,
                name: a[2].split('<').shift(),
                title: a[5].split('<').shift(),
                quote: o.comment,
                image: a[1].includes('linkedin') ? 'lnkedin' : 'facebook'
            }
        }
    );

    return data;

};


const STYLE = `
.${CSSID} {
width:100%;
} 
`;
