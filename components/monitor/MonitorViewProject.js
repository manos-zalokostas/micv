const CSSID = 'content-project';
let dataclone = [];
let DATA = '';

export default () => {

    let o = getDataset();

    return `
    <article data-pid=${o.id} class="${CSSID}">
        <header>
            <h1>${o.title}</h1>
            <h2>${o.category}</h2>
        </header>
        <main>${o.description}</main>
        <picture>
            <img src="/images/tmp.jpg" />
        </picture>
<!--        <div>BACKGROUND IMAGE</div>-->
        <script>${attachListeners()}</script>
        <link href="/components/monitor/MonitorViewProject.css" rel="stylesheet"/>
    </article>
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
        // console.log('ADD LISTENERS :  GLOBAL SEARCH 12')
//
        if (evt.target.classList.contains(CSSID)) {
            // LayoutNavigationGlobal('projects');
            // LayoutNavigationProjectShowcase(evt.target.dataset.pid)
            // cl(evt.target.value)
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
