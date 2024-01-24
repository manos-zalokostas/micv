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


export default {
    open,
    activate,
}