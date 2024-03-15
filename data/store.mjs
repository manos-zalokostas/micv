import data from "./index.mjs";


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

    let pack = data.map(o => [o.id, o.title]);

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
export const groupByDomain = (domain = 'WEB') => {

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


const SAM_WEB = {
    "domain": "WEB",
    "id": "WB12",
    "section": "Application Development",
    "category": "Design and Development",
    "title": "Rateparity",
    "tools": {
        "tool": [
            "web_application",
            "javascript",
            "reactjs",
            "es6",
            "css3",
            "scss",
            "requirements",
            "nodejs",
            "webpack",
            "git",
            "rest_api"
        ]
    },
    "description": " <h3>Employed as standalone Frontend Developer to build fully customizable UI widgets and the backend configuration app  in association with a backend data api developer.</h3> <p> The objective was to create a new product that would explore the potentials of UI widgets and thus enter a new market for the company <br /> My role as a Frontend developer was to create the independable CORS empowered Javascript widgets that would load on affiliate sites. The widgets should invoke the latest Js trends, load on sites without causing or receiving Js / CSS defects and should be as lightweight as possible restraining from vaguely loading countless libraries. Additianally I was attached to build the backend configuration application. </p> <h4>Main Developments</h4> <u>FRONTEND WIDGETS</u> <ul> <li>Design and develop the app's Installer that can be used on affiliate sites with a single HTML “Head”entry</li> <li>Design and develop decoupled SPA widgets, that reside on their own domains and can be launched by installer on demand</li> <li> <p> Publish 5 distinct widget types, with 4 viewport layouts for each, to accommodate diversity of screen displays: <br /> - Price checks::          Integrates calendar that helps users check hotel prices per accommodation and compare with major booking channels <br />- Active offers::          Registered offers can be displayed with a user click <br />- Notifications::          Intresting metrics, in the form of notifications are displayed on sites screen <br />- Popup offers::          Offers can popup on user display at navigation time, based on submitted configuration </p> </li> <li>Utilize the latest React 16.8 build and make use of powerful features like Hooks, Code splitting, Lazy loading, Context api, Dynamic imports etc</li> <li>Make extensive use of cache so that widgets restrain from excessive calls to the remote service</li> <li>Structure the development environment with NodeJs, Webpack, Babel etc</li> </ul> <br /> <u>BACKEND APPLICATION</u> <ul> <li> <p>Create a React 16.4 application based on a helper theme with some main group activities <br />- Configuration domains per widget <br />- Metrics and evaluation of widget usage <br />- Main Dashboard, Install and more.. </p> </li> <li> <p> The widgets configuration includes <br />- Configurable, on screen, positioning <br />- Configurable colors and literals <br />- Configurable activation / deactivation periods </p> </li> </ul> ",
    "screenshots": {
        "shot": [
            "images/rateparity/widget_price_full.png",
            "images/rateparity/widget_max_roomstream.png",
            "images/rateparity/widget_offer_full.png",
            "images/rateparity/config_price_position.png",
            "images/rateparity/config_offer_colors.png"
        ]
    },
    "score": "-",
    "tutor": "-",
    "comment": "-",
    "files": {
        "file": [
            "images/rateparity/config_snippet_content.png",
            "images/rateparity/config_disparity_details.png",
            "images/rateparity/config_welcome.png",
            "images/rateparity/widget_price_mobile.png",
            "images/rateparity/widget_max_teaser.png"
        ]
    },
    "links": {
        "link": [
            "https://code.rateparity.com/v4.versions/?debug=price.max",
            "https://code.rateparity.com/v4.versions/?debug=price.full",
            "https://code.rateparity.com/v4.versions/?debug=price.min",
            "https://code.rateparity.com/v4.versions/?debug=price.plain",
            "https://code.rateparity.com/v4.versions/?debug=price.mob",
            "https://code.rateparity.com/v4.versions/?debug=offer.full",
            "https://code.rateparity.com/v4.versions/?debug=offer.plain",
            "https://code.rateparity.com/v4.versions/?debug=offer.mob",
            "https://code.rateparity.com/v4.versions/?debug=nudges",
            "https://code.rateparity.com/v4.versions/?debug=snippet",
            "https://code.rateparity.com/v4.versions/?debug=exit"
        ]
    }
}


// console.log(groupBySection())