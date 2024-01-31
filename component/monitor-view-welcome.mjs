
function html() {

    return `
            <div id="welcome">
                <h3>Web Development</h3>
                <h3>Web Design</h3>
                <h3>Graphics Design</h3>
                <h3 style="color:goldenrod">Welcome</h3>
            </div>
            ${css()}
    `
}



function css() {
    return `
    <style>
    

#welcome h2 {
    float: left;
    width: 40%;
    text-align: left;
    font-size: 2em;
}

#welcome h3 {
    float: left;
    width: 100%;
    margin: 0;
    position: absolute;
    top: 30%;
    opacity: 0;
    color: white;
}
    
    
#welcome {
    position: absolute;
    left: 4%;
    font-family: arial;
    font-size: 2em;
    text-align: center;
    height: 100%;
    width: 95%;
}

</style>
    `
}



function install(id = "mi-monitor-view-welcome") {
    document.getElementById(id).innerHTML = html();
    // listen();
}


export default {
    install,
    html,
}