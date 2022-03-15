import {SimpleComponent} from "./SimpleComponent.js";
import {WBCAnchor} from "./WBCAnchor.js";


customElements.define('simple-component', SimpleComponent);
customElements.define('wbc-anchor', WBCAnchor, {extends: 'a'});
