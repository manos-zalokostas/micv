import {LitElement} from 'lit';
import _html from "./html"
import _style from "./style";


/**
 *
 */
class JoiTimeline extends LitElement {

    static properties = {
        active: {type: Number}
    };

    constructor() {
        super();
        this.active = 0
    }


    action(idx) {
        this.active = !this.active
        // document.addEventListener(
        //     'click', (event) => {
        //         const target = event.target;

        // if (!target.matches('#cv_comments')) return;
        //
        // const comments = document.querySelectorAll('#cv_description i');
        //
        // [...comments].forEach(
        //     o => {
        //         if (o.style.display === 'none' || !o.hasAttribute('style')) {
        //             o.style.display = 'block';
        //             return Visual.opacity(o, 1);
        //         }
        //         Visual.opacity(o, 0);
        //     }
        // )
        // }
        // )
    }

    static styles = _style();
    render = () => _html(this)
}

customElements.define('joi-timeline', JoiTimeline);
