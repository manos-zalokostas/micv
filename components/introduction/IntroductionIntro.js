class WCIntroductionIntro extends HTMLElement {

    shadow = '';
    hasMount = false;


    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'})
    }



    connectedCallback() {
        this.render();
    }


    render() {

        this.shadow.innerHTML = view();

        this.hasMount = true;

    }
}


const view = () => {
    return `
        <p class="intro-text">${DATA.text}</p>
    `;
}


const DATA = {
    text: `
        Creativity is the tool that while enjoy using and practicing is leading me a nice journey throughout diverse educational and occupational experiences. Unfolding my need for being creative and enthousiasm for technology I started my training on graphics design. Leveraging my skills on the area have let me acknowledge spare concepts around web technology. The need for obtaining fundamental understanding has gradually overwhelmed me, and drove me to migrate interest on the field.
        `,
}

customElements.define('wc-introduction-intro', WCIntroductionIntro);
