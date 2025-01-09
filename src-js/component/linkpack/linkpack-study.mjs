
function html(){
    return `
<ul id="study_links">
    <li>Education</li>
    <li>
        <a target="_blank" class='organization' href="https://www2.gre.ac.uk/">
            <span>University of Greenwich</span>
<!--            <img src="images/organizations/greenwich_thumb.jpg"/>-->
<!--        </a> in Association with <a target="_blank" class="organization" href="https://www.nyc.gr">-->
        <span>[New York College]</span>
<!--        <img src="images/organizations/newyorkcollege_thumb.jpg"/> -->
        </a>
    </li>
    <li>References</li>
    <li>
        <a target="_blank" class='person' href="https://gr.linkedin.com/pub/michael-hands/30/8ba/61b">M.Hands |
            University of Greenwich</a>
    </li>
    <li>
        <a target="_blank" class='person' href="https://gr.linkedin.com/pub/petros-bofakos/a/149/b90">P.Bofakos |
            University of Greenwich</a>
    </li>
    <li>
        <a target="_blank" class='person' href="https://www.linkedin.com/in/ioannischatzis">I.Chatzis | University of
            Greenwich</a>
    </li>
    <li>
        <a target="_blank" class='person' href="https://gr.linkedin.com/pub/ariadne-beatrice-kapetanaki/39/75b/50b">A.B.Kapetanaki
            | University of Greenwich</a>
    </li>
    <li>
        <a target="_blank" class='person' href="https://www.facebook.com/ioannis.pandithas?fref=ts">G.Pandidas |
            University of Greenwich</a>
    </li>
    <li>
        <a target="_blank" class='organization' href="https://www.intergraphics.gr/">
            <span>Intergraphics</span>
<!--            <img src="images/organizations/intergraphics_thumb.jpg"/>-->
             Vocational Institute</a>
    </li>
    <li>References</li>
    <li>
        <a target="_blank" class='person' href="https://gr.linkedin.com/pub/leonidas-tsaras/3/674/726">L.Tsaras |
            Intergraphics</a>
    </li>
    <li>
        <a target="_blank" class='organization' href="https://www.iek-akmi.gr/">
            <span>AKMI </span>
<!--            <img src="images/organizations/akmi_thumb.jpg"/>-->
             Vocational Institute</a>
    </li>
</ul>
            ${css()}
    `
}


function css() {
    return `
    <style>
</style>
    `
}


function listen() {

}

function install(id) {
    document.getElementById(id).innerHTML = html();
    listen();
}


export default {
    install,
    html,
}