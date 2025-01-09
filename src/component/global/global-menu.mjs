import { LitElement, html, css } from 'lit';

/**
 * SiteMenu component
 */
class GlobalMenu extends LitElement {

    static styles = css`
    $primary-color: slategrey;
    $highlight-color: orange;
    $hover-color: lightblue;
    $font-family: arial;

        #site_menu {
            position: fixed;
            z-index: 15;
            top: 0;
            right: 0;
            list-style-type: none;
            width: 30%;
            height: 3%;
            padding: 4px;
            margin: 0;
            font-family: $font-family;

            li {
                float: right;
                margin-left: 1px;
                border: solid 1px #ccc;
                background-color: $primary-color;
                position: relative;
                width: 30%;
                height: 84%;
                padding-top: 2%;
                padding-bottom: 1%;
                text-align: center;

                a {
                    color: white;
                    border-radius: 6px;
                    font-size: 1em;
                    padding: 2% 22%;

                    &:hover {
                        cursor: pointer;
                    }

                    &.selected {
                        cursor: pointer;
                        color: $highlight-color;
                        font-weight: bold;
                    }
                }
            }
        }


    `;

    constructor() {
        super();
        this.menuItems = [
            { title: 'certificates' },
            { title: 'projects' },
            { title: 'about', selected: true },
        ];
    }

    handleClick(event) {
        const target = event.target;

        if (target.matches("#site_menu a")) {
            const current_page = target.innerHTML;
            // Call Layout.open with the current_page (Ensure Layout is imported)
            Layout.open(current_page);
        }
    }

    render() {
        return html`
      <ul id="site_menu" @click="${this.handleClick}">
        ${this.menuItems.map(
            (item) => html`
            <li>
              <a 
                title="${item.title}" 
                class="${item.selected ? 'selected' : ''}">
                ${item.title}
              </a>
            </li>
          `
        )}
      </ul>
    `;
    }
}

customElements.define('global-menu', GlobalMenu);
