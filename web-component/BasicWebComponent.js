const data = [
    ['Title 1', 'paragraph 1', 'page-footer 1'],
    ['Title 2', 'paragraph 2', 'page-footer 2'],
    ['Title 3', 'paragraph 3', 'page-footer 3'],
];

class WebComponent extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode: "open"})
    }


    static get observedAttributes() {
        return ['owner']
    }

    attributeChangedCallback(attribute, prev, next) {
        if (prev !== next) {
            this[attribute] = next;
        }
    }

    get owner() {
        return this.getAttribute('owner')
    }

    set owner(value) {
        this.setAttribute('owner', value);
    }

    connectedCallback() {
        this.render();
    }

    render() {
        let template = document.getElementById('html-template');
        let node, header, paragraph, pagefooter;

        data.forEach(group => {
            node = document.importNode(template.content, true);
            [header, paragraph, pagefooter] = group;

            node.querySelector('header').innerHTML = header;
            node.querySelector('page-footer').innerHTML = pagefooter;
            node.querySelector('p').innerHTML = paragraph;

            node.querySelector('aside').innerHTML = this['owner'];

            this.shadowRoot.appendChild(node);
        })
    }

}

customElements.define('web-component', WebComponent);


