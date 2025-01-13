import {html} from 'lit';


const assets = [
];


export default (elem) => html`
    <ul id="cert_links">
        <li>Certificates</li>
        <li><a target="_blank" href="#"></a>Desktop Publishing and 3D Animation</li>
        <li><a target="_blank" href="#"></a>Graphics Design for Web and Printable Mediums</li>
        <li><a target="_blank" href="#"></a>Web Design and Development</li>
        <li><a target="_blank" href="#"></a>Internet Engineering and Web Management</li>
    </ul>
`;


const target = "#site_menu a";
const _fn = (evt, fn) => evt.target.matches(target) && fn();
