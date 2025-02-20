import data from "./_data.js";


/*

 */
export const itemByIndex = (idx = 0) => {

    let item = data[idx]

    return item;
}


export const itemById = (itemId) => {

    let item = data.find(o => o.id === itemId);

    return item;
}


/**
 *
 * @param tool
 * @returns {[]}
 */
export const groupTools = () => {

    let pack = data.map(o => Array.isArray(o.tools.tool) ? o.tools.tool : [])
    pack = new Set(pack.flat());

    return [...pack];
}


/**
 *
 * @param tool
 * @returns {[]}
 */
export const groupProjects = () => {

    let pack = data.map(o => [o.id, o.title, o.screenshots?.shot?.[0]]);

    return pack;
}


/**
 *
 * @param tool
 * @returns {[]}
 */
export const groupByTool = (tool) => {

    let tools = data.filter(o => o.tools.tool.includes(tool));

    let pack = tools.map(item => [item.id, item.title])

    return pack;
}


/**
 *
 * @param section
 * @returns {[]}
 */
export const groupBySection = (section) => {

    let a = data.filter(o => o.section === section);

    let pack = a.map(item => [item.id, item.title]);
    // console.log("pack >>>>>>>>>>>>>>>>>", pack)
    return pack;
}


/**
 *
 * @param domain
 * @returns {[]}
 */
export const groupByDomain = (domain = 'WORK') => {

    domain = domain.toUpperCase();

    let domains = data.filter(o => o.domain === domain),
        sections = domains.map(o => o.section);

    sections = Array.from(new Set(sections));

    let pack = [];
    sections.forEach(str => {
        let a = domains.reduce((acc, o) => {
            if (o.section === str) acc[1].push([o.id, o.title]);
            return acc;
        }, [str, []])
        pack.push(a);
    })

    // console.log(">>>>>>>>>>>>>>>>>> ", pack)

    return pack;
}