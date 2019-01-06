let page = 1;
let _html = (monitor = null, chronicles = '', timeline = '', welcome = '') => {
    let html = `<div id="showcase">
<div id="introduction_menu">
<ul>
<li><a id="introduction_cv" class='selected' href="#">Welcome</a></li>
<li><a id="resume_cv" href="#">Timeline</a></li>
<li><a id="interactive_cv" href="#">Interactive</a></li>
<li><a id="document_cv" href="#">Document</a></li>
</ul>
</div>
<h1>Resume</h1>
${monitor}
<div id="author_presentation">
<p>Creativity is the tool that while enjoy using and practicing is leading me a nice journey throughout diverse educational and occupational experiences.
Unfolding my need for being creative and enthousiasm for technology I started my training on graphics design. Leveraging my skills on the
area have let me acknowledge spare concepts around web technology. The need for obtaining fundamental understanding has gradually overwhelmed me, and drove me to migrate interest on the field. <br/>
</p>
<img src="images/profile/manos2.jpg"/>
</div>
<div id="interactive_intro" class='citation'>
${chronicles}
${timeline}
${welcome}
</div>
</div>`;
    return html;
};


const SKILLS_PATH = './parts/skillspreview.mjs';
const RESUME_PATH = './parts/resumecvfields.mjs';
const INTERACTIVE_PATH = './parts/interactivecvfields.mjs';
const WELCOME_PATH = './parts/welcome.mjs';

const fn = async () => {
    let monitor = await import(SKILLS_PATH);
    let welcome = page === 1 ? await import(WELCOME_PATH) : '';
    let timeline = page === 2 ? await import(INTERACTIVE_PATH) : '';
    let chronicles = page === 3 ? await import(RESUME_PATH) : '';

    return _html(
        monitor.default().content,
        chronicles && chronicles.default().content,
        timeline && timeline.default().content,
        welcome && welcome.default().content,
    );
}

export default async () => ({
    selector: '#introduction',
    content: await fn()
})