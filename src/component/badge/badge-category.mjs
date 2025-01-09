import { LitElement, html, css } from 'lit';

export class BadgeCategory extends LitElement {
    static styles = css`
        #icategory {
            float: left;
            text-align: left;
            font-size: 0.8em;
            font-family: verdana;
            padding: 0;
            width: 60%;
        }

        #icategory .cat_key {
            color: white;
            text-decoration: none;
            border-radius: 5px;
            padding: 5px;
            background-color: #555;
        }
    `;

    static properties = {
        category: { type: String }
    };

    constructor() {
        super();
        this.category = '';
    }

    render() {
        return html`
            <p id="icategory">Category:
                <a href="#" class="cat_key" @click="${this._handleClick}">
                    <span>${this.category}</span>
                </a>
            </p>
        `;
    }

    _handleClick(event) {
        event.preventDefault();
        if (window.TabletMenu?.refresh) {
            window.TabletMenu.refresh(this.category, 'category');
            document.getElementById('context').style.left = '0';
        } else {
            console.warn('TabletMenu not available.');
        }
    }
}

customElements.define('badge-category', BadgeCategory);
