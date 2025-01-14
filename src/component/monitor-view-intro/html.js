import {html} from 'lit';


const assets = [
];


export default (elem) => html`
    <div id="welcome">
        <h3>Web Development</h3>
        <h3>Web Design</h3>
        <h3>Graphics Design</h3>
        <h3 style="color:goldenrod">Welcome</h3>
    </div>
    
`;


const target = "#site_menu a";
const _fn = (evt, fn) => evt.target.matches(target) && fn();
