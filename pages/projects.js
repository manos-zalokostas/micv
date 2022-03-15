export default (projectid) => run(projectid);

const run = (projectid) => document.querySelector('#page-projects').innerHTML = `

<div id="projects-navigation"></div>

<div id="projects-syndication"></div>

<div id="project-showcase"  data-project=${projectid} style="display: none">

    <div id="project-title">HEADER</div>

    <div id="project-description">DESCRIPTION</div>

    <div id="project-media">IMAGES</div>

    <div id="project-extras">EXTRA FILES</div>

    <div id="project-slideshow">SLIDESHOW</div>
    
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
    background:#555;
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
    position: absolute;
    left: 0;
    top: 10%;
    overflow: auto;
    height: 90%;
    width:100%;
    // background: #444;
}

div#project-showcase {
    display: flex;
    flex-flow: wrap;
    width: 100%;
    height: 100%;
}

div#project-showcase > div {
    box-sizing:border-box;
    // border:2px solid;
    padding: 20px;
}

div#project-title {
    flex: 0 0 100%;
    height:15%;
}

div#project-description {
    flex: 0 0 60%;
    height:55%;
}

div#project-media {
    flex: 0 0 60%;
    height:30%;
}

div#project-extras {
    flex: 0 0 40%;
}

div#project-slideshow {
    position: absolute;
    top: 15%;
    height: 85%;
    width: 60%;
}
`


run();
