export default () => run();


const run = () => document.querySelector('#page-introduction').innerHTML = `

    <div id="introduction-navigation"></div>

    <div id="global-search"></div>

    <div id="introduction-projector" class="monitor"></div>

    <div id="author-message"></div>

    <div id="resume-contents" >

        <div id="resume-text"></div>

        <div id="resume-interactive"></div>

        <div id="resume-introduction"></div>

    </div>

`

run();