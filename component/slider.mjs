/**
 *
 * @param itemSrc
 * @param app
 */
function open(itemSrc, app) {
    const src = itemSrc;


    // if (!document.getElementById('media_control')) {
    // const mediaControl = document.createElement('div');
    // mediaControl.id = 'media_control';
    // mediaControl.innerHTML = `
    //     <div id="cpanel">
    //     <span title="next"> > </span>
    //     <span title="previous"> < </span>
    //     <span title="exit"> x </span>
    //     </div>
    //     <div id="preview"></div>
    //     `;

    // document.getElementById('description').appendChild(mediaControl);

    const mediaControl = document.getElementById('media_control')

    document.getElementById('iscreenshots').animate({bottom: '-100%'});
    document.getElementById('idescription').animate({left: '-100%'});

    mediaControl.animate({left: '51%'}, 'linear', () => {
        document.getElementById('cpanel').animate({left: 0});
    });
    // }

    let item = _resolveElemType(app, src);

    document.getElementById('preview').innerHTML = item;

    const preview = document.getElementById('preview');
    // preview.style.right = '-100%';
    // preview.children[0].style.opacity = 0;
    // preview.children[0].style.right = '-100%';
    // preview.children[0].style.opacity = 1;
}


/**
 *
 * @param direction
 * @param buttonClicked
 */
function refresh(direction, buttonClicked) {
    const handler = direction;
    const button = buttonClicked;
    let src = document.getElementById('preview').children[0].getAttribute('src');
    const mediaBox = document.getElementById('media_control');
    const selectedItem = document.querySelector('.item_previewed');
    const btnNext = document.querySelector('#cpanel span[title="next"]');
    const btnPrev = document.querySelector('#cpanel span[title="previous"]');

    if (handler === "next") {
        if (selectedItem.nextElementSibling && selectedItem.nextElementSibling.getAttribute('href')) {
            src = selectedItem.nextElementSibling.getAttribute('href');
            selectedItem.nextElementSibling.classList.add('item_previewed');
            selectedItem.classList.remove('item_previewed');
            btnNext.classList.add('haschild');
            btnPrev.classList.add('haschild');

            // The above handles whether the button will be enabled or not
            // To do that, I take the src of the item that will be displayed during this
            // code execution (--not the one that was already displayed on screen--)
            document.getElementById('preview').children[0]
                .animate(
                    {opacity: 0, right: '100%'},
                    {duration: 1000, fill: 'forwards'}
                ).onfinish = function () {
                // This code will run when the first animation finishes
                document.getElementById('preview').children[0].setAttribute('src', src);
                document.getElementById('preview').children[0].style.right = '-100%';

                // Start the second animation
                document.getElementById('preview').children[0].animate({opacity: 1, right: 0}, {
                    duration: 1000,
                    fill: 'forwards'
                });
            };
        } else {
            btnNext.classList.add('nochild');
        }
    } else if (handler === "previous") {
        if (selectedItem.previousElementSibling && selectedItem.previousElementSibling.getAttribute('href')) {
            src = selectedItem.previousElementSibling.getAttribute('href');
            selectedItem.previousElementSibling.classList.add('item_previewed');
            selectedItem.classList.remove('item_previewed');
            btnPrev.classList.add('haschild');
            btnNext.classList.add('haschild');

            // The above handles whether the button will be enabled or not
            // To do that, I take the src of the item that will be displayed during this
            // code execution (--not the one that was already displayed on screen--)
            const previewElement = document.getElementById('preview').children[0];

            previewElement
                .animate(
                    {opacity: 0, right: '-100%'},
                    {duration: 1000, fill: 'forwards'}
                ).onfinish = function () {
                // This code will run when the first animation finishes
                previewElement.setAttribute('src', src);
                previewElement.style.right = '100%';

                // Start the second animation
                previewElement.animate(
                    {opacity: 1, right: 0},
                    {duration: 1000, fill: 'forwards'}
                );
            };

        } else {
            btnPrev.classList.add('nochild');
        }
    } else {
        mediaBox.animate(
            {height: 0},
            'fast',
            () => {
                document.getElementById('iscreenshots').animate({bottom: 0});
                document.getElementById('idescription').animate({left: 0});
                mediaBox.remove();
            }
        );

        document.getElementById('ibody').firstElementChild.children.forEach(element => {
            element.style.display = 'block';
        });
        document.getElementById('ibody').firstElementChild.children.animate({opacity: 1}, 'slow');
    }
}


/**
 *
 * @param app
 * @param src
 * @returns {string}
 */
function _resolveElemType(app, src) {
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


function html() {

    return `
        <div id="media_control">
            <div id="cpanel">
            <span title="next"> &gt; </span>
            <span title="previous"> &lt; </span>
            <span title="exit"> &times; </span>
            </div>
            <div id="preview">
            <img src="images/webdes_a1/welcome_page.jpg" style="opacity: 1; right: 0px;">
</div>
        </div>
    ${css()}
    `

}


function css() {
    return `
    <style>
    #media_control {
    width: 100%;
    height:100%;
    position: absolute;
    background-color: #eee;
}

#media_control span {
    float: left;
    /*margin-top: 2%;*/
    width: 74%;
    height: 5%;
    border-top: 3px solid #eee;
    border-bottom: 3px solid;
    position: relative;
    /*left: 4%;*/
    background-color: #ddd;
    /*border-radius: 6px;*/
    font-family: monospace;
}

#media_control span.nochild {
    color: #bbb;
    background-color: #aaa;
    border-top: solid 3px #888;
    text-align: center;
}

#media_control span.nochild:hover {
    background-color: #aaa;
    border-top: solid 3px #888;
}

#media_control span.haschild {
    color: #aaa;
}

#media_control #cpanel span[title='exit']:hover {
    background-color: white;
    color: #aaa;
}

#media_control span.nochilds:hover {
    background-color: white;
}

#media_control span:hover {
    border-bottom: 3px solid #999;
    cursor: pointer;
    background-color: white;
}

#preview {
    float: left;
    position: absolute;
    margin: 3% 2%;
    width: 200%;
    height: 100%;
    overflow: hidden;
    right: -100%;
}

#preview img {
    float: left;
    width: 40%;
    height: 87%;
    position: relative;
    margin-left: 8%;
    border: solid #ddd 20px;
    border-radius: 12px;
}

#preview embed {
    float: left;
    width: 38%;
    height: 87%;
    margin-left: 10%;
    border-radius: 12px;
}

#preview iframe {
    float: left;
    width: 40%;
    height: 87%;
    position: relative;
    margin-left: 8%;
    border: solid #ddd 20px;
    border-radius: 12px;
}

#cpanel {
    float: left;
    width: 12%;
    height: 100%;
    overflow: hidden;
    position: relative;
    z-index: 20;
    background-color: #555;
    font-family: tahoma;
    border: solid 2px white;
    /*top: -3%;*/
    margin-top: 0;
    padding-top: 4%;
    font-weight: bold;
    /*border-radius: 30px;*/
    /*left: -100%;*/
    font-size: 1.5em;
}

</style>
    `
}

function listen() {

}

function install(id) {
    document.getElementById(id).innerHTML = html();
    listen();
}


export default {
    install,
    open,
    refresh,
}