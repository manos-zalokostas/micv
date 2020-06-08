/**
 *
 * @param tool
 * @returns {[]}
 */
export const groupTools = () => {

    let o = JSON.parse(sessionStorage.MIDATA)
    let items = o.items.item;

    let tools = items.map(o => Array.isArray(o.tools.tool) ? o.tools.tool : [])
    tools = new Set(tools.flat());
    //

    return [...tools];
    // let sections = domains.map(o => o.section);
    // sections = Array.from(new Set(sections));
    //
    // let data = [];
    // sections.forEach(str => {
    //     let pack = domains.reduce((acc, o) => {
    //         if (o.section === str) acc[1].push([o.id, o.title]);
    //         return acc;
    //     }, [str, []])
    //     data.push(pack);
    // })
}

/**
 *
 * @param tool
 * @returns {[]}
 */
export const groupProjects = () => {

    let o = JSON.parse(sessionStorage.MIDATA);
    let items = o.items.item;

    let projects = items.map(o => [o.id, o.title]);
//
    return projects;

    //     let o = JSON.parse(sessionStorage.MIDATA)
//     let items = o.items.item;
//
//
//     let sections = domains.map(o => o.section);
//     sections = Array.from(new Set(sections));
//
//     let data = [];
//     sections.forEach(str => {
//         let pack = domains.reduce((acc, o) => {
//             if (o.section === str) acc[1].push([o.id, o.title]);
//             return acc;
//         }, [str, []])
//         data.push(pack);
//     })
}


/**
 *
 * @param tool
 * @returns {[]}
 */
export const groupByTool = (tool) => {
    let o = JSON.parse(sessionStorage.MIDATA),
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

    let o = JSON.parse(sessionStorage.MIDATA)
    let items = o.items.item;

    let sections = items.filter(o => o.section === section);

    let data = sections.map(item => [item.id, item.title])

    return data;
}


/**
 *
 * @param domain
 * @returns {[]}
 */
export const groupByDomain = (domain) => {

    domain = domain.toUpperCase();

    let o = JSON.parse(sessionStorage.MIDATA)
    let items = o.items.item;
    let domains = items.filter(o => o.domain === domain);

    let sections = domains.map(o => o.section);
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

