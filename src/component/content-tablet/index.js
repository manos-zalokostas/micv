import {LitElement} from 'lit';
import _html from "./html"
import _style from "./style";
import {groupByDomain} from "/src/_core/store";


/**
 *
 */
class ContentTablet extends LitElement {

    static properties = {
        domain: {type: String},
        assets: {type: Array}
    };

    constructor() {
        super();
        this.domain = 'WORK';
        this.assets = groupByDomain(this.domain);
    }

    // Lifecycle method triggered when properties are updated
    updated(changedProperties) {
        super.updated(changedProperties);

        if (changedProperties.has('domain')) {
            this.assets = groupByDomain(this.domain);
        }
    }


    action(idx) {
        console.log(idx, {domain: this.domain})
        // [...$All(".mi-tablet .tgroupi .sublist a")]
        //     .forEach($o => $o.addEventListener(
        //             'click', (event) => {
        //                 const entry = Store.itemById($o.id)
        //                 Content.load("mi-page-content", {tablet: null, detail: entry});
        //                 Layout.open('projects-content');
        //             }
        //         )
        //     )
    }

    static styles = _style();
    render = () => _html(this)
}

customElements.define('content-tablet', ContentTablet);
