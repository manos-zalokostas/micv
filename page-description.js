import {__GET_CACHED_DATA} from "./storage";


/**
 * @param currentListItem
 * @param currList
 */
export function build_selected_item_content(currentListItem, currList) {
    const oXML = __GET_CACHED_DATA('sXML', true);

    if (oXML) {
        __RESOLVE_AND_DISPLAY_ITEM_FULL_DESCRIPTION(currentListItem, currList, oXML);
        return;
    }

    // CALL THE FETCH API TO RETRIEVE RELATED DATA AND DISPLAY THE ITEM FULL DESCRIPTION
    fetch('index.xml')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            return response.text();
        })
        .then(data => {
            const parser = new DOMParser();
            const xmlData = parser.parseFromString(data, 'application/xml');
            __RESOLVE_AND_DISPLAY_ITEM_FULL_DESCRIPTION(currentListItem, currList, xmlData);
        })
        .catch(error => {
            console.error('Failed to open:', error.message);
        });
}


/**
 * Resolves and displays the item's full description.
 * @param {Object} currentListItem - The current list item.
 * @param {Object} currList - The current list.
 * @param {Object} data - The data to process.
 */
export function __RESOLVE_AND_DISPLAY_ITEM_FULL_DESCRIPTION(currentListItem, currList, data) {
    clean_page_data();

    const lItem = Array.from(data.querySelectorAll('item>title')).find(item => item.textContent.includes(currentListItem));

    let num = -250;

    Array.from(lItem.parentElement.children).forEach(child => {
        const tag = child.tagName;
        let data = '';

        if (child.children[0] && child.children[0].nodeType === 1) {
            data = child.children[0].textContent;
            if (data !== '' && data !== '-') {
                handleTagWithData(tag, Array.from(child.children));
            }
        } else {
            data = child.textContent;
            if (data !== '' && data !== '-') {
                handleTagWithData(tag, [child]);
            }
        }
    });

    if (currList) {
        const field = open_field_on_anime_end(currList);
        const context = document.getElementById('context');
        if (context) {
            context.style.left = '-100%';
            preview_extras(field);
        }
        return;
    }

    const context = document.getElementById('context');
    if (context) {
        context.style.left = '-100%';
    }
}


/**
 * Handles the given tag with the corresponding data.
 * @param {string} tag - The HTML tag.
 * @param {Array} data - The data associated with the tag.
 */
export function handleTagWithData(tag, data) {
    let mdata = '';

    switch (tag) {
        case 'tools':
            data.forEach(tool => {
                mdata += `<a class="keys" href="#">${tool.textContent}</a>`;
            });
            break;
        case 'screenshots':
            data.forEach(screenshot => {
                const src = screenshot.textContent;
                mdata += `<a href="${src}"><img src="${src}" title="${src.substring(src.lastIndexOf('/') + 1, src.lastIndexOf('.'))}" /></a>`;
                const imgLoader = new Image();
                imgLoader.src = src;
                num += 10;
            });
            break;
        case 'files':
            data.forEach(file => {
                const addr = file;
                const app = addr.textContent.substring(addr.textContent.lastIndexOf(".") + 1);
                const label = addr.textContent.substring(addr.textContent.lastIndexOf("/") + 1, addr.textContent.lastIndexOf("."));
                mdata += `<a href="${addr.textContent}"><img src="images/_buttons/${app}.png" /><p>${label.replace(/_/g, " ").toUpperCase()}</p></a>`;
            });
            break;
        case 'media':
            data.forEach(media => {
                const addr = media;
                const app = addr.textContent.substring(addr.textContent.lastIndexOf(".") + 1);
                const label = addr.textContent.substring(addr.textContent.lastIndexOf(",") + 1, addr.textContent.lastIndexOf("."));
                const src = addr.textContent.substring(0, addr.textContent.lastIndexOf(","));
                mdata += `<a href="${src}"><img src="images/_buttons/${app}.png" /><p>${label.replace(/_/g, " ").toUpperCase()}</p></a>`;
            });
            break;
        case 'links':
            data.forEach(link => {
                const addr = link;
                const app = 'link';
                const label = addr.textContent.substring(link.textContent.lastIndexOf("=") + 1).split('.');
                mdata += `<a target="_blank" style="text-transform: uppercase" href="${link.textContent}">${label.join(' ')}<img src="images/_buttons/link.jpg" style="width:35px; float:right " /></a>`;
            });
            break;
        default:
            /* I LEFT IT PURPOSELY BECAUSE I NEED TO SEE THE 'VALUES' INDEXED BY THE SCRIPT */
            break;
    }

    const descriptionTag = document.getElementById(`i${tag}`);
    if (descriptionTag) {
        descriptionTag.style.display = 'block';
        const spanTag = descriptionTag.querySelector('span');
        if (spanTag) {
            spanTag.innerHTML += mdata;
        }
    }
}


/**
 * // CHECK THE DOMAIN THAT THE USER PICKED, AND DECIDE WHICH AUX-FIELD SHOULD OPEN
 // AT THE END OF THE ANIMATION (EXAMPLE: IF DOMAIN='WEB' => LINK-FIELD, IF STUDIES => FILES-FIELD)
 *
 * @param list
 * @returns {Element}
 */
export function open_field_on_anime_end(list) {
    let field = {};

    switch (list.toLowerCase()) {
        case 'web':
            field = document.getElementById('ilink');
            break;
        case 'studies':
            field = document.getElementById('icomplements');
            break;
        case 'work':
            field = document.getElementById('imedia');
            break;
        default:
            field = document.getElementById('ifiles');
            break;
    }

    return field;
}


/**
 * // THE SCRIPT HANDLES THE DISPLAY FOR THE 'EXTRAS' FIELD ('MEDIA', 'FILES', ...)
 * - CLICKING ON EACH OF THE FIELDS, THE SCRIPT ANIMATESAND REVEALS IT
 * WHILE AT THE SAME TIME ANIMATES TO HIDE ITS SIBLINGS
 * @param {HTMLElement} element
 */
/**
 * Preview extra information.
 * @param {HTMLElement} element - The HTML element to preview.
 */
export function preview_extras(element) {
    let elem = element;

    // Hide the previewed sibling
    let iextra = document.querySelector('#iextra');
    let extraPreview = iextra.querySelector('.extra_preview');
    extraPreview.animate({'height': '5%'});

    // Animate-in the selected field
    elem.setAttribute('class', 'extra_preview');
    elem.animate(
        {'height': '80%'},
        'medium',
        'linear',
        function () {
            elem.querySelector('span').style.display = 'block';
        }
    );
}


/**
 *
 * @param itemSrc
 * @param app
 */
export function content_handler(itemSrc, app) {
    const src = itemSrc;

    // SINCE THE 'PREVIEW' AREA WORKS ALL FOR IMAGES/VIDEOS/PPT/PDF
    // I HAVE INTENTIONALLY DESIGNED THE HTML PAGE AS TO WRAP THE SRC OF THE ABOVE
    // IN 'ANCHOR' TAGS THAT LINK TO THE SOURCE ITSELF.
    // THIS WAY I CAN COMMUNICATE WITH ALL ELEMENTS, EMPOWERED BY A SIMPLER UNIFIED CODE
    const imageParent = document.querySelector(`a[href="${src}"]`);
    let item;

    if (src === 'images/cv_document/micv.pdf') {
        document.querySelectorAll('#iextra > div').forEach(div => {
            div.style.display = 'none';
        });
    }

    // ANIMATES THE OPACITY OF THE 'TEXT and IMAGES' BACKGROUND RESOURCES
    // BEFORE THE SLIDESHOW AREA IS EXPANDED
    const firstChildElements = Array.from(document.querySelector('#ibody > div:first-child').children);
    firstChildElements.forEach(child => {
        child.animate({opacity: 0}, 'normal', () => {
            child.style.display = 'none';
        });
    });

    if (!document.getElementById('media_control')) {
        const mediaControl = document.createElement('div');
        mediaControl.id = 'media_control';
        mediaControl.innerHTML = '<div id="cpanel"><span title="next"> > </span><span title="previous"> < </span><span title="exit"> x </span></div><div id="preview"></div>';
        document.getElementById('description').appendChild(mediaControl);

        document.getElementById('iscreenshots').animate({bottom: '-100%'});
        document.getElementById('idescription').animate({left: '-100%'});

        mediaControl.animate({left: '51%'}, 'linear', () => {
            document.getElementById('cpanel').animate({left: 0});
        });
    }

    item = handle_preview_content(app, src);
    document.getElementById('preview').innerHTML = item.outerHTML;

    const preview = document.getElementById('preview');
    preview.style.right = '-100%';
    preview.children[0].style.opacity = 0;
    preview.children[0].style.right = '-100%';
    preview.children[0].style.opacity = 1;
}


/**
 *
 * @param app
 * @param src
 * @returns {string}
 */
export function handle_preview_content(app, src) {
    let item = "";

    switch (app) {
        case 'jpg':
            item += `<img src="${src}" /></div>`;
            break;

        case 'pdf':
            item += `<embed src="${src}" />`;
            break;

        case 'avi':
        case 'swf':
            item += `<iframe src="${src}"></iframe>`;
            break;

        case 'pptx':
            item += `<iframe src="${src}"></iframe>`;
            break;

        default:
            // Handle other cases if needed
            break;
    }

    return item;
}
