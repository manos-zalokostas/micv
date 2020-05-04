export default (o) => run(o);


const run = (o) => {
    return view();
}


const getDataset = () => {
    if (!dataclone.length) cloneData();
    return dataclone.shift();
};


const cloneData = () => {
    dataclone = JSON.parse(JSON.stringify(DATA));
}


const view = () => {

    let o = getDataset();

    return `
    <section class="content-project">
        <h1>${o.title}</h1>
        <h2>${o.category}</h2>
        <h3>${o.subcategory}</h3>
        <p>${o.description}</p>
        <img src=${o.image} />
        <div>BACKGROUND IMAGE</div>
    </section>
    `;
}


let dataclone = [];


const DATA = [
    {
        id: 'id',
        title: 'PROJECT A',
        category: 'category',
        subcategory: 'subcategory',
        description: 'description',
        image: 'image',
    },
    {
        id: 'id',
        title: 'PROJECT AB',
        category: 'category',
        subcategory: 'subcategory',
        description: 'description',
        image: 'image',
    },
    {
        id: 'id',
        title: 'PROJECT DD',
        category: 'category',
        subcategory: 'subcategory',
        description: 'description',
        image: 'image',
    },
]
// run();