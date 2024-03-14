import Content from "../route/content.mjs";


function init() {
    Content.load();
}


function query() {

    let search = window.location.search;
    if (!search) return [];

    let query = search.replace('?', '');
    let entries = query.split('=');

    return entries

}



export default {
    init,
    query,
}