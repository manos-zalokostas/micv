import Monitor from "./monitor.mjs";
import Content from "../route/content.mjs";
import Reference from "../route/reference.mjs";
import Introduction from "../route/introduction.mjs";


function init() {
// 
    // let path = window.location.search
    //
    // if (path.includes('p=content')) return Content.load()
    //
    // if (path.includes('p=reference')) return Reference.load()

    Introduction.load()

}


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
    init,
    redirect,
    query,
}