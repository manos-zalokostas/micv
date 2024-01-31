import TabletMenu from "./tablet-menu.mjs";

function html() {
    return `
        <p id="icategory">
        Category: 
        <a href="#" class="cat_key">
            <span>CAT A</span>
        </a>
        <a href="#" class="cat_key">
            <span>CAT B</span>
        </a>
        <a href="#" class="cat_key">
            <span>CAT C</span>
        </a>
        </p>
        ${css()}
    `
}

function css() {
    return `
    <style>
    #icategory {
    font-size: 0.8em;
    font-family: verdana;
    padding: 0;
    width: 60%;
    float: left;
    text-align: left;
    margin: 0;
    margin-top: 1%;
    margin-left: 2%;
}

#icategory .cat_key {
    background-color: #555;
    border-radius: 5px;
    padding: 5px;
    text-decoration: none;
    color: white;
}
</style>
    `
}


function listen() {

    document.addEventListener(
        'click', (event) => {
            const target = event.target;

            // if (target.tagName === 'A' && target.classList.contains('cat_key')) {
            //     TabletMenu.refresh(target.innerHTML, 'category');
            //     document.getElementById('context').style.left = '0';
            //     event.preventDefault();
            // }

        }
    )
}


function install(id) {
    document.getElementById(id).innerHTML = html();
    listen();
}


export default {
    install,
    html,
}