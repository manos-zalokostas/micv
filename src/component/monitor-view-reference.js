import {itemByIndex} from "/src/service/store";
import {html, css, LitElement} from 'lit';


customElements.define('monitor-view-reference',

    class MonitorViewReference extends LitElement {

        static properties = {
            active: {type: Number},
            reference: {type: Object},
        };

        constructor() {
            super();
            this.active = 1;
            // this.reference = Monitor.curr(); // Default reference is the current one
            this.reference = itemByIndex(10);
            // console.log(this.reference)
        }


        action(changedProperties) {
        }

        render = () => {
            const {tutor, commentContent} = this.reference;
            return html`
                <div id="reference" class="mitem">
                    <h2>References</h2>
                    <h3>${tutor}</h3>
                    <p>${commentContent}</p>
                    <img/>
                </div>
            `;
        }

        // static styles = _style();
    }
);
