class WCIntroductionWelcome extends HTMLElement {

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
        <section class="welcome-text">
            <header>${DATA.title}</header>
            <p class="intro">${DATA.text}</p>
            ${style()}
        </section>
    `;
}


const style = () => `
<style>
.welcome-text {
    display: flex;
    place-content: space-evenly;
    place-items: center;
}
.welcome-text header {
    flex: 0.3;
    text-align: center;
    font-size: xxx-large;
    font-weight:bold;
    color: slategrey;
}
.welcome-text p {
    flex: 0.7   
}
</style>
`;



const DATA =
    {
        title: 'Welcome',
        text: `Creativity is the tool that while enjoy using and practicing is leading me a nice journey throughout diverse educational and occupational experiences. Unfolding my need for being creative and enthousiasm for technology I started my training on graphics design. Leveraging my skills on the area have let me acknowledge spare concepts around web technology. The need for obtaining fundamental understanding has gradually overwhelmed me, and drove me to migrate interest on the field.`,
    }

customElements.define('wc-introduction-welcome', WCIntroductionWelcome);
