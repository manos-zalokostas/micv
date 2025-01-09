import Monitor from "/component/monitor/monitor.mjs";
import Layout from "/core/layout.mjs";



function html(){

    return `
             <div id="introduction_cv_field">
                    <div class="main_txt">
                        <h2>Welcome</h2>
                        <p>
                            <span>Hi! My name is Manos.</span>
                            For near the last and a half decade I have been studying and practicing my skills on diverse
                            domains of educational interest,
                            attending a bachelor degree from an English University while also taking multiple full-year
                            trainings on Athenian private vocational institutes.
                            The aspects of my study and research could be, in an abstruct manner, summarized to 'Web and
                            Desktop Applications Development','Business Management and Marketing' and 'Graphics Design'.
                            At the same time, speaking of my occupational experience, for more than a decade I have been
                            occupied and have been evolving my competences and communication in a
                            top-competent,world-wide extending
                            pharmaceutical company, complying and assimilating to my profile highly strict and demanding
                            business procedures.
                        </p>
                    </div>
                    ${css()}
`

}


function css(){

    return `
    <style>
    

 .main_txt {
    position: absolute;
    left:10%;
    /*top: 0;*/
    float: right;
    font-size: 1.2em;
    font-family: sans-serif;
    width: 90%;
    padding: 0;
    margin: 0;
    text-align: left;
    color: #555;
    border-radius: 10px;
}

.main_txt p {
}

.main_txt > p {
}

 .main_txt > h2 {
}

 .main_txt > p {
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