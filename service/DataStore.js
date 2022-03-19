/**
 *
 * @param tool
 * @returns {[]}
 */
export const itemById = (itemId) => {

    let o = _loadData();
    let items = o.items.item;

    let item = items.find(o => o.id === itemId);
    // tools = new Set(tools.flat());
debugger
    return item;
}


/**
 *
 * @param tool
 * @returns {[]}
 */
export const groupTools = () => {

    let o = _loadData();
    let items = o.items.item;

    let tools = items.map(o => Array.isArray(o.tools.tool) ? o.tools.tool : [])
    tools = new Set(tools.flat());

    return [...tools];
}


/**
 *
 * @param tool
 * @returns {[]}
 */
export const groupProjects = () => {

    let o = _loadData(),
        items = o.items.item,
        projects = items.map(o => [o.id, o.title]);

    return projects;
}


/**
 *
 * @param tool
 * @returns {[]}
 */
export const groupByTool = (tool) => {


    let o = _loadData(),
        items = o.items.item,
        tools = items.filter(o => o.tools.tool.includes(tool));

    let data = tools.map(item => [item.id, item.title])

    return data;
}


/**
 *
 * @param section
 * @returns {[]}
 */
export const groupBySection = (section) => {

    let o = _loadData(),
        items = o.items.item,
        sections = items.filter(o => o.section === section);

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

    let o = _loadData(),
        items = o.items.item,
        domains = items.filter(o => o.domain === domain),
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


const _loadData = () => JSON.parse(sessionStorage.MIDATA);
