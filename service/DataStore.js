import {raw} from "./data.js";

export const load = () => _loadData();


let cache = raw
/**
 *
 * @returns {Promise<*|*[]>}
 * @private
 */
const _loadData = () => {

    // if (cache[0]) return cache;
    //
    // if (sessionStorage.raw) {
    //     cache = JSON.parse(sessionStorage.raw);
    //     return cache;
    // }
    //
    // cache = raw;
    // sessionStorage.raw = JSON.stringify(cache)

    return cache;

}


/*

 */
export const itemById = (itemId) => {

    const item = cache.find(o => o.id === itemId);

    return item;
}


/**
 *
 * @returns {*[]}
 */
export const groupTools = () => {
    
    let tools = cache.map(o => Array.isArray(o.tools.tool) ? o.tools.tool : [])
    tools = new Set(tools.flat());

    return [...tools];
}


/**
 *
 * @returns {[undefined,undefined][]}
 */
export const groupProjects = () => {

    const projects = cache.map(o => [o.id, o.title]);

    return projects;
}


/**
 *
 * @param tool
 * @returns {[undefined,undefined][]}
 */
export const groupByTool = (tool) => {

    const tools = cache.filter(o => o.tools.tool.includes(tool));

    let data = tools.map(item => [item.id, item.title])

    return data;
}


/**
 *
 * @param section
 * @returns {[undefined,undefined][]}
 */
export const groupBySection = (section) => {

    const sections = cache.filter(o => o.section === section);

    let data = sections.map(item => [item.id, item.title]);

    return data;
}


/**
 *
 * @param domain
 * @returns {[]}
 */
export const groupByDomain = (domain) => {

    domain = domain.toUpperCase();

    let domains = cache.filter(o => o.domain === domain),
        sections = domains.map(o => o.section);

    sections = Array.from(new Set(sections));

    let data = [];
    sections.forEach(str => {
        let pack = domains.reduce((acc, o) => {
            if (o.section === str) acc[1].push([o.id, o.title]);
            return acc;
        }, [str, []])
        data.push(pack);
    })

    return data;
}



