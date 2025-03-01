import {html} from 'lit';


const assets = [
];


export default (elem) => html`
    <ul id="study_links">
        <li>Education</li>
        <li>
            <a target="_blank" class='organization' href="https://www2.gre.ac.uk/">
                <span>University of Greenwich</span>
                <!--            <img src="/micv/images/organizations/greenwich_thumb.jpg"/>-->
                <!--        </a> in Association with <a target="_blank" class="organization" href="https://www.nyc.gr">-->
                <span>[New York College]</span>
                <!--        <img src="/micv/images/organizations/newyorkcollege_thumb.jpg"/> -->
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
                <!--            <img src="/micv/images/organizations/intergraphics_thumb.jpg"/>-->
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
                <!--            <img src="/micv/images/organizations/akmi_thumb.jpg"/>-->
                Vocational Institute</a>
        </li>
    </ul>
`;


const target = "#site_menu a";
const _fn = (evt, fn) => evt.target.matches(target) && fn();
