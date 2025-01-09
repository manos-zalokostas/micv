import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('extra-preview')
class ExtraPreview extends LitElement {

    // Static styles from SCSS (compiled to CSS)
    static styles = css`
    #iextra {
      float: right;
      font-size: 1em;
      font-family: arial;
      width: 25%;
      height: 75%;
      position: relative;
      right: 2%;
      top: 12%;
    }

    #iextra > div {
      float: left;
      background-color: #eee;
      margin-bottom: 1px;
      width: 100%;
    }

    #iextra > div > span {
      max-height: 53%;
      overflow: auto;
      padding: 2%;
      margin-left: 2%;
      width: 90%;
    }

    #iextra > div > strong {
      color: white;
      background-color: #555;
      height: 20px;
      border-radius: 2px;
      width: 98%;
      float: right;
      position: relative;
      bottom: 1%;
      left: 0;
      padding: 1%;
      border: solid 1px #9aa;
    }

    #iextra div strong:hover {
      color: white;
      background-color: slategray;
      cursor: pointer;
    }

    #iextra span {
      padding: 2px;
      margin: 2px;
      background-color: white;
      width: 96%;
    }

    #iextra a {
      float: left;
      text-align: left;
      color: #888;
      width: 100%;
      font-size: 0.8em;
      padding-top: 5%;
      border-bottom: 3px solid #eee;
    }

    #iextra a:hover {
      border-bottom: 3px solid lightblue;
    }

    #iextra #icomment {
      height: 54%;
    }

    #iextra #icomment span {
      max-height: 100%;
    }

    #itutor {
      text-align: left;
    }

    #itutor h4 {
      float: left;
      width: 100%;
      padding: 0;
      margin: 0;
    }

    #iscore > span {
      font-size: 3em;
      color: cornflowerblue;
      font-weight: bold;
    }

    #iscore > span:before {
      content: 'score: ';
      font-size: 0.5em;
      color: #bbb
    }

    #imedia img, #ifiles img {
      float: right;
      vertical-align: top;
      margin-right: 3%;
      width: 12%;
      border: 0;
    }

    #imedia p, #ifiles p {
      float: left;
      padding: 0;
      font-size: 0.8em;
      width: 65%;
      margin: 1%;
    }

    #icomplements > div {
      float: left;
      width: 98%;
      overflow: auto;
    }
  `;

    // Method to open a field and animate it
    open(element) {
        const iextra = this.shadowRoot.querySelector('#iextra');
        const extraPreview = iextra.querySelector('.extra_preview');

        // Hide the previewed sibling
        extraPreview.animate({'height': '5%'});

        // Animate-in the selected field
        element.setAttribute('class', 'extra_preview');
        element.animate(
            {'height': '80%'},
            'medium',
            'linear',
            () => {
                element.querySelector('span').style.display = 'block';
            }
        );
    }

    // Method to activate the relevant field based on domain
    activate(list) {
        let field = {};

        switch (list.toLowerCase()) {
            case 'web':
                field = this.shadowRoot.querySelector('#ilink');
                break;
            case 'studies':
                field = this.shadowRoot.querySelector('#icomplements');
                break;
            case 'work':
                field = this.shadowRoot.querySelector('#imedia');
                break;
            default:
                field = this.shadowRoot.querySelector('#ifiles');
                break;
        }

        return field;
    }

    // Lit template for the HTML structure
    render() {
        return html`
      <div id="iextra">
        <div id="ilinks">
          <strong>Link</strong>
          <span></span>
        </div>
        <div id="icomplements">
          <strong>Complements</strong>
          <div id="itutor"><span></span></div>
          <div id="iscore"><span></span></div>
          <div id="icomment"><span></span></div>
        </div>
        <div id="imedia">
          <strong>Media</strong>
          <span></span>
        </div>
        <div id="ifiles">
          <strong>Files</strong>
          <span></span>
        </div>
      </div>
    `;
    }

    // First time when element is rendered, you can do initial setup here
    firstUpdated() {
        this.listen();
    }

    // Event listener to manage click events (similar to your original implementation)
    listen() {
        this.addEventListener('click', (event) => {
            const target = event.target;
        });
    }
}
