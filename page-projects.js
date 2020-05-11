export default () => run();

const run = () => document.querySelector('#page-projects').innerHTML = `

<div id="projects-navigation">
    <ul>
        <li><a href="#" title="web">WEB</a></li>
        <li><a href="#" title="studies">STUDIES</a></li>
        <li><a href="#" title="work">WORK</a></li>
    </ul>
</div>

<div id="projects-syndication"></div>

<div id="project-showcase">

    <div id="project-title"></div>

    <div id="project-body">

        <div id="project-description"></div>

        <div id="project-media"></div>

    </div>

    <div id="project-extras"></div>

</div>

`

run();