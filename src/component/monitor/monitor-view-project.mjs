import Monitor from "/component/monitor/monitor.mjs";

let hostId = 'dev';

function update(o) {
    document.getElementById(hostId).innerHTML = html(o);
}


function html(o = SAM) {
    // o = SAM;
    let tools = o.tools.tool;

    return `
            <div id="project" class='mitem'>
                <h2>${o.title}</h2>
                <h4>${o.section}</h4>
                <div class="mtext">${o.description}</div>
                <img src=${o.screenshots.shot[0]} alt=${o.screenshots.shot[0]}/>
            </div>
            <div id="project_tools">
            ${
                Array.isArray(tools) && tools.map(
                        val => `
                        <a href=${val}>
                            <img src="images/tech_logos/${val}.jpg" alt=${val}
                        </a>`
        )
    }
              </div>
            ${css()}
    `
}


function css() {
    return `
    <style>
#project.mitem img {
    padding: 15px;
}

#project.mitem img {
    position: absolute; 
    opacity: .3;
    top: 0;
    right: 0;
    padding: 0;
    width: 50%;
}

#project.mitem h2 {
    text-align: left;    
    margin-left: 15px;
}

#project.mitem .mtext {
    float: left;
    text-align: left;    
    overflow: hidden;
    max-height: 245px;
    margin-left: 50px;
    width: 75%;
}

#project.mitem .mtext  > * {
    display: inline;
    /*font-size: 0.8em;*/
    margin: 0;
    padding: 0;
}


#project_tools {
    position: absolute;
    bottom: 0;
    width: 100%;
}

#project_tools img {
    max-height: 48px;
}


</style>
    `
}


function install(id = "mi-monitor-view") {
    hostId = id;

    document.getElementById(id).innerHTML = html(Monitor.curr());
    // listen();
}


export default {
    update,
    install,
    html,
}


const SAM = {
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
            "images/rateparity/widget_max_roomstream.png",
            "images/rateparity/widget_price_full.png",
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