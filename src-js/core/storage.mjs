/**
 * Sets cached data in local storage.
 * @param {string} index - The cache index.
 * @param {any} data - The data to be cached.
 * @param {boolean} isXML - Whether the data is XML.
 * @private
 */
function set(index, data, isXML) {
    if (isXML) {
        const oSerializer = new XMLSerializer();
        const sXML = oSerializer.serializeToString(data);
        localStorage.setItem(index, sXML);
    } else {
        localStorage.setItem(index, JSON.stringify(data));
    }
}


/**
 * Gets cached data from local storage.
 * @param {string} index - The cache index.
 * @param {boolean} isXML - Whether the data is XML.
 * @returns {Document | any | null} - The cached data.
 * @private
 */
function get(index, isXML) {
    const data = localStorage.getItem(index);

    if (data && isXML) {
        const oParser = new DOMParser();
        return oParser.parseFromString(data, 'text/xml');
    }

    if (data && !isXML) {
        return JSON.parse(data);
    }

    return null;
}


export default {
    set,
    get,
}