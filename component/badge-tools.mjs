function html(o) {
    return `
        <h4 id="itools">Keywords: 
        ${
            o.tools.tool.map(
                val => `<span><a href="#">${val}</a></span>`
            ).join("")
        }
        </h4>
        ${css()}
    `
}

function css() {
    return `
    <style>


#itools {
    float: right;
    display: inline;
    font-family: verdana;
    font-size: 0.8em;
    text-align: right;
    padding: 0;
    margin: 0;
    width: 25%;
    position: relative;
    bottom: 0;
    right: 2%;
}

#itools span {
    float: right;
    font-family: verdana;
    font-size: 0.8em;
    text-align: right;
    padding: 0;
    margin: 0;
    width: 100%;
}

    #itools span a {
    float: right;
    display: inline;
    font-family: verdana;
    font-size: 1.1em;
    text-align: right;
    background-color: #555;
    margin: 1px;
    padding: 0;
    padding: 1%;
    border-radius: 4px;
    text-decoration: none;
    color: white;
}

#itools span a:hover {
    background-color: orange;
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