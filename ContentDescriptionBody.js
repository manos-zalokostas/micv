export const ContentDescriptionBody = () => {
    let [title, description, groups] = _getData();
    return (`
    <div id="ibody">
        <div id="idescription" style="display: block;">
            <h3>${title}</h3>
            <p>${description}</p>
        </div>
            <div id="iscreenshots" style="display: block;">${getScreenshots(groups)}</div>
        <span>
    </div>
    `);
}


const getScreenshots = (groups) => {

    return groups.map(entries =>
        `<a href=${entries[0]}>
            <img src="${entries[0]}" title=${entries[1]}>
        </a> `
    )

};


const _getData = () => {
    return [
        `Employed as standalone Frontend Developer to build fully customizable UI widgets and the backend configuration app  in association with a backend data api developer.`,

        `<p>The objective was to create a new product that would explore the potentials of UI widgets and thus enter a new market for the company
        <br>My role as a Frontend developer was to create the independable CORS empowered Javascript widgets that would load on affiliate sites. The widgets should invoke the latest Js trends, load on sites without causing or receiving Js / CSS defects and should be as lightweight as possible restraining from vaguely loading countless libraries. Additianally I was attached to build the backend configuration application.
        </p>
        <h4>Main Developments
        </h4>
        <u>FRONTEND WIDGETS
        </u>
        <ul>
        <li>Design and develop the app's Installer that can be used on affiliate sites with a single HTML “Head”entry
        </li>
        <li>Design and develop decoupled SPA widgets, that reside on their own domains and can be launched by installer on demand
        </li>
        <li>
        <p>Publish 5 distinct widget types, with 4 viewport layouts for each, to accommodate diversity of screen displays:
        <br> - Price checks::          Integrates calendar that helps users check hotel prices per accommodation and compare with major booking channels
        <br>- Active offers::          Registered offers can be displayed with a user click
        <br>- Notifications::          Intresting metrics, in the form of notifications are displayed on sites screen
        <br>- Popup offers::          Offers can popup on user display at navigation time, based on submitted configuration
        </p>
        </li>
        <li>Utilize the latest React 16.8 build and make use of powerful features like Hooks, Code splitting, Lazy loading, Context api, Dynamic imports etc
        </li>
        <li>Make extensive use of cache so that widgets restrain from excessive calls to the remote service
        </li>
        <li>Structure the development environment with NodeJs, Webpack, Babel etc
        </li>
        </ul>
        <br>
        <u>BACKEND APPLICATION
        </u>
        <ul>
        <li>
        <p>Create a React 16.4 application based on a helper theme with some main group activities
        <br>- Configuration domains per widget
        <br>- Metrics and evaluation of widget usage
        <br>- Main Dashboard, Install and more..
        </p>
        </li>
        <li>
        <p>The widgets configuration includes
        <br>- Configurable, on screen, positioning
        <br>- Configurable colors and literals
        <br>- Configurable activation / deactivation periods
        </p>
        </li>
        </ul>
        </span>`,
        [
            ["images/rateparity/widget_price_full.png", "widget price full"],
            ["images/rateparity/widget_max_roomstream.png", "widget max roomstream"],
            ["images/rateparity/widget_offer_full.png", "widget offer full"],
            ["images/rateparity/config_price_position.png", "config price position"],
            ["images/rateparity/config_offer_colors.png", "config offer colors"],
        ],
    ];

}