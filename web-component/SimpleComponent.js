export class SimpleComponent extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode: "open"})
        this.shadowRoot.innerHTML = `
        <style>
            ::slotted(*) {background: green; color:white}
         </style>
        `;
    }


    connectedCallback() {

        let shadowDiv = document.createElement('div'),
            x = this.getAttribute('type');

        shadowDiv.innerHTML = refine(shadowContent(x));
        this.shadowRoot.appendChild(shadowDiv);
    }

}


const shadowContent = (x) => {
    if (!x) x = 'serano';
    return `
     <slot></slot>    
    
    <p>create by: <b>${x}</b></p>
    
    <style>
    p{background: blue; color:white}
    </style>
    
    `;
};


const refine = (str) => {
    return str.trim();
};
