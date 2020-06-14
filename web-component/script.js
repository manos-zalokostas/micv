import * as aux from "./aux.js";


export const run = () => {

    let data = makeData();

    console.log('VIEW', view(data));

}


const makeData = () => {
    let a = Array(6);
    return a.fill(schema);
}


const schema = {
    id: 'id',
    tile: 'title',
    image: 'image',
}


const view = (a) => {

    a = a.map(o => item(o));

    return aux.strHtml(`
    <section>${aux.strJoin(a)}</section>
    `);
}


const item = (o) => {
    return aux.strHtml(`
    <section onclick=${evt => event(o.id)}>
    <h1>${o.title}</h1>
    <img src=${o.image} />
    <div>BACKGROUND IMAGE</div>
    </section>
    `);
}

const event = (id) => new CustomEvent('projector-event', {bubbles: true, detail: {type: 'tool', id}});


// run();