export default () => run();

const run = () => document.querySelector('#page-projects').innerHTML = `

<div id="projects-navigation"></div>

<div id="projects-syndication"></div>

<div id="project-showcase" style="display: none">

    <div id="project-title"></div>

    <div id="project-body">

        <div id="project-media"></div>

        <div id="project-description"></div>

    </div>

    <div id="project-extras"></div>

</div>

<style>${style()}</style>
`


const style = () => `
div#page-projects {
    display: flex;
    flex-flow: wrap;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

div#projects-navigation {
    position: absolute;
    top: 0;
    left: 0;
    z-index:10;
    flex: 1 1 100%;
    height: 10%;
    width: 100%
;}

div#projects-syndication {
    flex: 1 1 100%;
    height: 90%;
    position: absolute;
    left: 0;
    top: 10%;
    overflow: auto;
    margin-left:10%;
}

div#project-showcase {
    display: flex;
    flex: 1 1 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    overflow: auto;
    width:100%;
}
`


run();