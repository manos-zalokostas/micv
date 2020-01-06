export const ContentDescriptionExtras = () => {
    let [links, files, media, complements] = _getData();
    return (`
    <div id="iextra">
        ${getComplements(complements)}
        ${getLinks(links)}
        ${getMedia(media)}
        ${getFiles(files)}
    </div>
    `);
};


/**
 *
 * @param group
 * @returns {string}
 */
const getComplements = (group) => {

    if (!group) return '';

    return `
        <div id="icomplements" style="display: none; height: 5%;" class="extra_preview">
            <strong>Complements
            </strong>
            <div id="itutor" style="display: none;">
            <span style="display: none;">
            </span>
            </div>
            <div id="iscore" style="display: none;">
            <span style="display: none;">
            </span>
            </div>
            <div id="icomment" style="display: none;">
            <span style="display: none;">
            </span>
            </div>
        </div>
`
};


/**
 *
 * @param group
 * @returns {string}
 */
const getLinks = (group) => {

    if (!group) return '';

    let links = group.map(entries =>
        `<a target="_blank" style="text-transform: uppercase" href=${entries[0]}>${entries[1]}
                <img src=${entries[2]} style="width:35px; float:right ">
         </a>`).join('');

    return (`
              <div id="ilinks" style="display: block; height: 5%;" class="extra_preview">
                <strong>Link</strong>
                <span style="display: none;">${links}<span>
            </div>
        `)
};


/**
 *
 * @param group
 * @returns {string}
 */
const getMedia = (group) => {

    if (!group) return '';

    return `
     <div id="imedia" style="display: none; height: 5%;" class="extra_preview">
            <strong>Media </strong>
            <span style="display: none;"></span>
        </div>
`
};


/**
 *
 * @param group
 * @returns {string}
 */
const getFiles = (group) => {

    if (!group) return '';

    let files = group.map(entries =>
        `<a href=${entries[0]}><img src="images/_buttons/png.png"><p>${entries[1]}</p></a>`).join('');

    return `
     <div id="ifiles" style="display: block; height: 80%;" class="extra_preview">
            <strong>Files</strong>
            <span style="display: block;">${files}</span>
        </div>
`
};


/*

 */
const _getData = () => {
    return [
        [
            [
                "https://code.rateparity.com/v4.versions/?debug=price.max",
                "price max",
                "images / _buttons / link.jpg"
            ],
            [
                "https://code.rateparity.com/v4.versions/?debug=price.full",
                "price full",
                "images / _buttons / link.jpg"
            ],
            [
                "https://code.rateparity.com/v4.versions/?debug=price.min",
                "price min",
                "images / _buttons / link.jpg"
            ],
            [
                "https://code.rateparity.com/v4.versions/?debug=price.plain",
                "price plain",
                "images / _buttons / link.jpg"
            ],
            [
                "https://code.rateparity.com/v4.versions/?debug=price.mob",
                "price mob",
                "images / _buttons / link.jpg"
            ],
            [
                "https://code.rateparity.com/v4.versions/?debug=offer.full",
                "offer full",
                "images / _buttons / link.jpg"
            ],
            [
                "https://code.rateparity.com/v4.versions/?debug=offer.plain",
                "offer plain",
                "images / _buttons / link.jpg"
            ],
            [
                "https://code.rateparity.com/v4.versions/?debug=offer.mob",
                "offer mob",
                "images / _buttons / link.jpg"
            ],
            [
                "https://code.rateparity.com/v4.versions/?debug=nudges",
                "nudges",
                "images / _buttons / link.jpg"
            ],
            [
                "https://code.rateparity.com/v4.versions/?debug=snippet",
                "snippet",
                "images / _buttons / link.jpg"
            ],
            [
                "https://code.rateparity.com/v4.versions/?debug=exit",
                "exit",
                "images / _buttons / link.jpg"
            ]
        ],
        [
            [
                "images/rateparity/config_snippet_content.png",
                "CONFIG SNIPPET CONTEN"
            ],
            [
                "images/rateparity/config_disparity_details.png",
                "CONFIG DISPARITY DETAIL"
            ],
            [
                "images/rateparity/config_welcome.png",
                "CONFIG WELCOM"
            ],
            [
                "images/rateparity/widget_price_mobile.png",
                "WIDGET PRICE MOBIL"
            ],
            [
                "images/rateparity/widget_max_teaser.png",
                "WIDGET MAX TEASE"
            ]
        ]

    ];

}