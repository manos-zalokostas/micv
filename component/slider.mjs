/**
 *
 * @param itemSrc
 * @param app
 */
function open(itemSrc, app) {
    const src = itemSrc;


    if (!document.getElementById('media_control')) {
        const mediaControl = document.createElement('div');
        mediaControl.id = 'media_control';
        mediaControl.innerHTML = `
            <div id="cpanel">
            <span title="next"> > </span>
            <span title="previous"> < </span>
            <span title="exit"> x </span>
            </div>
            <div id="preview"></div>
            `;
        document.getElementById('description').appendChild(mediaControl);

        document.getElementById('iscreenshots').animate({bottom: '-100%'});
        document.getElementById('idescription').animate({left: '-100%'});

        mediaControl.animate({left: '51%'}, 'linear', () => {
            document.getElementById('cpanel').animate({left: 0});
        });
    }

    let item = _resolveElem(app, src);

    document.getElementById('preview').innerHTML = item;

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
function _resolveElem(app, src) {
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


export default {
    open,
}