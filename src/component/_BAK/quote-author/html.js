import {html} from 'lit';


const assets = [
];


export default (elem) => html`
    <div id="author_presentation">
<!--        <img src="micv/images/profile/manos2.jpg"/>-->
        <p>Creativity is the tool that while enjoy using and practicing is leading me a nice journey throughout
            diverse educational and occupational experiences.
            Unfolding my need for being creative and enthousiasm for technology I started my training on
            graphics design. Leveraging my skills on the
            area have let me acknowledge spare concepts around web technology. The need for obtaining
            fundamental understanding has gradually overwhelmed me, and drove me to migrate interest on the
            field. <br/>
        </p>
`;


const target = "#site_menu a";
const _fn = (evt, fn) => evt.target.matches(target) && fn();
