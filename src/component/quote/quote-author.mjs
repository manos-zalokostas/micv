import Monitor from "/component/monitor/monitor.mjs";
import Layout from "/core/layout.mjs";



function html(){

    return `
            <div id="author_presentation">
                <p>Creativity is the tool that while enjoy using and practicing is leading me a nice journey throughout
                    diverse educational and occupational experiences.
                    Unfolding my need for being creative and enthousiasm for technology I started my training on
                    graphics design. Leveraging my skills on the
                    area have let me acknowledge spare concepts around web technology. The need for obtaining
                    fundamental understanding has gradually overwhelmed me, and drove me to migrate interest on the
                    field. <br/>
                </p>
                <img src="images/profile/manos2.jpg"/>
            </div>
            ${css()}
`

}


function css(){
    return `
    <style>
    
#author_presentation {
    width: 19%;
    height: 38%;
    position: absolute;
    top: 7%;
    right: 1%;
    font-family: tahoma;
    font-style: italic;
    border-radius: 10px;
}

#author_presentation p {
    width: 98%;
    font-size: 1em;
    position: absolute;
    left: -6%;
    top: 0;
    height: 60%;
    padding: 2% 6%;
    text-align: right;
    z-index: 10;
    border-radius: 13px;
    font-family: calibri;
    color: #555;
}

#author_presentation img {
    width: 8%;
    position: fixed;
    left: 0.5%;
    top: 45%;
    border: solid #ccc;
    border-radius: 125px;
    z-index: 100;
}

</style>
    `
}


function install(id){
    document.getElementById(id).innerHTML = html();
    // listen();
}


export default {
    install,
    html,
}