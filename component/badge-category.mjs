
let data;


function html(o) {
    return `
        <p id="icategory">Category:
        <a href="#" class="cat_key" data-key=${o.category}>
            <span>${o.category}</span>
        </p>
        ${css()}
    `
}

function css() {
    return `
    <style>
    #icategory {
    float: left;
    text-align: left;
    font-size: 0.8em;
    font-family: verdana;
    padding: 0;
    width: 60%;
}

#icategory .cat_key {
    color: white;
    text-decoration: none;
    border-radius: 5px;
    padding: 5px;
    background-color: #555;
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


function install(id, data) {
    document.getElementById(id).innerHTML = html(data);
    listen();
}


export default {
    install,
    html,
}