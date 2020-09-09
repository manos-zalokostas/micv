const CSSID = '#page-introduction';

export default () => run();


const run = () => document.querySelector('#page-introduction').innerHTML = `

    <div id="introduction-navigation">NAVIGATION</div>

    <div id="introduction-projector">PROJECTOR</div>

    <div id="author-message">MESSAGE</div>

    <div id="resume-contents" >

        <div id="resume-timeline" class="hide">TIMELINE</div>

        <div id="resume-interactive" class="hide">INTERACTIVE</div>

        <div id="resume-introduction">
    
            <div></div>
    
            <div></div>
    
        </div>

    </div>

    <style>${style()}</style>
`

const style = () => `
div#page-introduction {
    display: flex;
    flex-flow: wrap;
    position: absolute;
    left: 0;
    top: 0;
    background: #555;
    width: 100%;
    height: 100%;
}

div#introduction-navigation {
    flex: 1 1 100%;
    height: 5%;
    box-sizing: border-box;
    // border: 2px solid white;
    display: flex;
    align-items: center;
}

div#introduction-projector {
    flex: 1 1 70%;
    height: 40%;
    box-sizing: border-box;
    // border: 2px solid white;
    display: flex;
    align-items: start;
    overflow:hidden;
}

div#author-message {
    flex: 1 1 30%;
    height: 40%;
    box-sizing: border-box;
    // border: 2px solid white;
    display: flex;
    align-items: center;
    padding: 20px;
}

div#resume-contents {
    flex: 1 1 100%;
    position:relative;
    overflow:hidden;
    height: 55%;
    box-sizing: border-box;
    // border: 2px solid white;
    display: flex;
    align-items: center;
}

div#resume-contents > div {
    width:100%;
    padding: 20px;
}

div#resume-contents #resume-timeline {
    height:100%;
}

div#resume-contents .resume {
    height:100%;
}

`;


run();