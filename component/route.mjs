import Monitor from "./monitor.mjs";

function query() {

    let search = window.location.search;
    if (!search) return [];

    let query = search.replace('?', '');
    let entries = query.split('=');

    return entries

}


function redirect() {

    let [type, target] = query();

    if (type === 'project') {
        Monitor.select('project', target);
        return true;
    }

    if (type === 'tool') {
        Monitor.select('tool', target);
        return true;
    }

    return false;

}


export default {
    redirect,
    query,
}