import {LitElement} from 'lit';
import _html from "./html"
import _style from "./style";

const assets = [
    {title: 'projects'},
    {title: 'certificates'},
    {title: 'about', selected: true},
];


/**
 *
 */
class Index extends LitElement {

    static styles = _style();

    constructor() {
        super();

    }

    action(event) {
        const target = event.target;

        if (target.matches("#site_menu a")) {
            console.log('DO SOMETHING ! ')
        }
    }

    render() {
        return _html(assets, this.action)
    }
}

customElements.define('global-menu', Index);
