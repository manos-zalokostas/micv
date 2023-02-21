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
<article data-pid=${o.id} class="${CSSID}">
    <header>
        <h1>${o.name || 'NAME'}</h1>
       <h2>${o.title || 'TITTLE'}</h2>
    </header>
    <main>
        <h3>${o.quote || 'QUOTE'}</h3>
    </main>
    <picture>
        <img src=${ '/images/tmp.jpg' || o.image } />
    </picture>
     <script>${attachListeners()}</script>
     <link href="/components/monitor/MonitorViewQuote.css" rel="stylesheet"/>
</article>
    `;
}


/**
 *
 * @returns {*}
 */
const getDataset = () => {
    DATA = makeData();
    if (!dataclone.length) cloneData();
    return dataclone.pop();
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
                quote: o.comment ? o.comment.substring(0, 400) + "<i> ...more </i>" : 'QUOTE',
                image: a[1].includes('linkedin') ? 'lnkedin' : 'facebook'
            }
        }
    );

    return data;

};


