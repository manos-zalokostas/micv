import PageDescription from "../route/page-description.mjs";


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
function open(element) {
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
 * // CHECK THE DOMAIN THAT THE USER PICKED, AND DECIDE WHICH AUX-FIELD SHOULD OPEN
 // AT THE END OF THE ANIMATION (EXAMPLE: IF DOMAIN='WEB' => LINK-FIELD, IF STUDIES => FILES-FIELD)
 *
 * @param list
 * @returns {Element}
 */
function activate(list) {
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


function listen() {

    document.addEventListener(
        'click', (event) => {
            const target = event.target;


            // EXTRA BUTTONS 'CLICK'

            if (target.tagName === 'DIV' && target.parentElement.id === 'iextra') {
                open(target);
            }


            // MEDIA / FILES / IMAGES ELEMENTS 'CLICK'


            if (target.tagName === 'A' && (target.parentElement.id === 'imedia' || target.parentElement.id === 'ifiles' || target.parentElement.id === 'iscreenshots')) {
                let item_src = target.getAttribute('href');
                let app = "";

                if (target.parentElement.parentElement.id.includes('media')) {
                    app = 'avi';
                } else if (target.parentElement.parentElement.id.includes('files')) {
                    app = 'pdf';
                } else {
                    app = 'jpg';
                }

                target.classList.remove('item_previewed');
                PageDescription.openSlider(item_src, app);
                event.preventDefault();
            }

        }
    )

}

function html() {
    return `
                    <div id="iextra">
                        <div id="ilinks">
                            <strong>Link</strong>
                            <span></span>
                        </div>
                        <div id="icomplements">
                            <strong>Complements</strong>
                            <div id="itutor"><span></span></div>
                            <div id="iscore"><span></span></div>
                            <div id="icomment"><span></span></div>
                        </div>
                        <div id="imedia">
                            <strong>Media</strong>
                            <span></span>
                        </div>
                        <div id="ifiles">
                            <strong>Files</strong>
                            <span></span>
                        </div>
                    </div>
                    ${css()}
    `
}


function css() {

    return `
    <style>
    #iextra {
    float: right;
    font-size: 1em;
    font-family: arial;
    width: 25%;
    height: 75%;
    position: relative;
    right: 2%;
    top: 12%;
}

#iextra > div {
    float: left;
    background-color: #eee;
    margin-bottom: 1px;
    width: 100%;
    /*display: none;*/
}

#iextra > div > span {
    /*display: none;*/
    max-height: 53%;
    overflow: auto;
    padding: 2%;
    margin-left: 2%;
    width: 90%;
}

#iextra > div > strong {
    color: white;
    background-color: #555;
    height: 20px;
    border-radius: 2px;
    width: 98%;
    float: right;
    position: relative;
    bottom: 1%;
    left: 0;
    padding: 1%;
    border: solid 1px #9aa;
}

#iextra div strong:hover {
    color: white;
    background-color: slategray;
    cursor: pointer;
}

#iextra span {
    padding: 2px;
    margin: 2px;
    background-color: white;
    width: 96%;
}

#iextra a {
    float: left;
    text-align: left;
    color: #888;
    width: 100%;
    font-size: 0.8em;
    padding-top: 5%;
    border-bottom: 3px solid #eee;
}

#iextra a:hover {
    border-bottom: 3px solid lightblue;
}

#iextra #icomment {
    height: 54%;
}

#iextra #icomment span {
    max-height: 100%;
}

#itutor {
    text-align: left;
}

#itutor h4 {
    float: left;
    width: 100%;
    padding: 0;
    margin: 0;
}

#iscore > span {
    font-size: 3em;
    color: cornflowerblue;
    font-weight: bold;
}

#iscore > span:before {
    content: 'score: ';
    font-size: 0.5em;
    color: #bbb
}

#imedia img, #ifiles img {
    float: right;
    vertical-align: top;
    margin-right: 3%;
    width: 12%;
    border: 0;
}

#imedia p, #ifiles p {
    float: left;
    padding: 0;
    font-size: 0.8em;
    width: 65%;
    margin: 1%;
}

#icomplements > div {
    float: left;
    width: 98%;
    overflow: auto;
}

</style>
    `
}


function install(id){
    document.getElementById(id).innerHTML = html();
    listen();
}


export default {
    install,
    open,
    activate,
    listen,
    html,
}