export default async (params) => ({
    content: await _page(params)
})

const SKILLS_PATH = '../PARTS/skillspreview.mjs';
const RESUME_PATH = '../PARTS/resumecvfields.mjs';
const INTERACTIVE_PATH = '../PARTS/interactivecvfields.mjs';
const WELCOME_PATH = '../PARTS/welcome.mjs';


const _getMonitor = async () => {
    let mod = await import(SKILLS_PATH);
    return mod.default().content
}

/**
 *
 * @param o
 * @returns {Promise<void>}
 */
const _viewgroupResume = async (o) => {

    let mod;

    switch (o.view) {
        case 'list':
            mod = await import(WELCOME_PATH);
            break;
        case 'gist':
            mod = await import(INTERACTIVE_PATH);
            break;
        default :
            mod = await import(RESUME_PATH);
    }

    return mod.default().content;

};


/**
 *
 * @param o
 * @returns {Promise<string>}
 * @private
 */
let _page = async (o) => {
//     return `
//     <div id="interactive_intro" class='citation'>
//         ${ await _viewgroupResume(o)}
//     </div>
// `;

    return `
    <div id="showcase">
    <div id="introduction_menu">
        <ul>
            <li><a id="introduction_cv" class='selected' href="#">Welcome</a></li>
            <li><a id="resume_cv" href="#">Timeline</a></li>
            <li><a id="interactive_cv" href="#">Interactive</a></li>
            <li><a id="document_cv" href="#">Document</a></li>
        </ul>
    </div>
    <h1>Resume</h1>
    ${ await _getMonitor()}
    <div id="author_presentation">
        <p>Creativity is the tool that while enjoy using and practicing is leading me a nice journey throughout diverse educational and occupational experiences.
            Unfolding my need for being creative and enthousiasm for technology I started my training on graphics design. Leveraging my skills on the
            area have let me acknowledge spare concepts around web technology. The need for obtaining fundamental understanding has gradually overwhelmed me, and drove me to migrate interest on the field. <br/>
        </p>
    </div>
    <div id="interactive_intro" class='citation'>
        ${ await _viewgroupResume(o)}
    </div>
</div>
`;
};


