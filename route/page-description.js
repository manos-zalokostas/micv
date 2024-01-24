import AsideContent from "../component/aside-content.mjs";
import Layout from "../component/layout.mjs";
import Slider from "../component/slider.mjs";
import Storage from "../core/storage.mjs";


function openSlider(src) {

    // SINCE THE 'PREVIEW' AREA WORKS ALL FOR IMAGES/VIDEOS/PPT/PDF
    // I HAVE INTENTIONALLY DESIGNED THE HTML PAGE AS TO WRAP THE SRC OF THE ABOVE
    // IN 'ANCHOR' TAGS THAT LINK TO THE SOURCE ITSELF.
    // THIS WAY I CAN COMMUNICATE WITH ALL ELEMENTS, EMPOWERED BY A SIMPLER UNIFIED CODE
    const imageParent = document.querySelector(`a[href="${src}"]`);

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


    Slider.open();

}


/**
 * Resolves and displays the item's full description.
 * @param {Object} currentListItem - The current list item.
 * @param {Object} currList - The current list.
 * @param {Object} data - The data to process.
 */
function refresh(currentListItem, currList) {

    Layout.reset();

    const xml = Storage.get('sXML', true);

    const lItem = Array.from(xml.querySelectorAll('item>title')).find(item => item.textContent.includes(currentListItem));

    let num = -250;

    Array.from(lItem.parentElement.children)
        .forEach(child => {
            const tag = child.tagName;
            let data = '';

            if (child.children[0] && child.children[0].nodeType === 1) {
                data = child.children[0].textContent;
                if (data !== '' && data !== '-') {
                    _updateContent(tag, Array.from(child.children));
                }
            } else {
                data = child.textContent;
                if (data !== '' && data !== '-') {
                    _updateContent(tag, [child]);
                }
            }
        });


    if (currList) {
        const field = AsideContent.activate(currList);
        const context = document.getElementById('context');
        if (context) {
            context.style.left = '-100%';
            AsideContent.open(field);
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
export function _updateContent(tag, data) {
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


export default {
    refresh,
    openSlider
}