/**
 *
 * @param data
 * @returns {*[]}
 */
export const groupTools = (data) => {

    let pack = data.map(o => Array.isArray(o.tools) ? o.tools : [])
    pack = new Set(pack.flat());

    return [...pack];
}


/**
 *
 * @param data
 * @returns {*}
 */
export const groupProjects = (data) => {
    let pack = data.map(o => [o.id, o.title, o.shots?.[0], o.id]);
    return pack;
}


/**
 *
 * @param tools
 * @returns {*}
 */
export const groupByTool = (tools) => {
    let pack = tools.map(item => [item.id, item.title])
    return pack;
}


/**
 *
 * @param data
 * @returns {[]}
 */
export const parseDomainSection = (data) => {
    
    let sections = data.map(o => o.section);
    sections = Array.from(new Set(sections));

    let pack = [];
    sections.forEach(str => {
        let a = data.reduce((acc, o) => {
            if (o.section === str) acc[1].push([o.id, o.title]);
            return acc;
        }, [str, []])
        pack.push(a);
    })

    return pack;
}

/**
 *
 * @param data
 * @returns {[]}
 */
export const parseDomain = (data) => {
//     
//     let domains = data.map(o => o.domain);
//     domains = Array.from(new Set(domains));
//
//     let pack = [];
//     data.forEach(str => {
//         let a = data.reduce((acc, o) => {
//             if (o.domain === str) acc[1].push([o.id, o.title]);
//             return acc;
//         }, [str, []])
//         pack.push(a);
//     })
// 
    return data;
}
