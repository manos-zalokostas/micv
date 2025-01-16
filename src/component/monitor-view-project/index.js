import {groupProjects, itemById, itemByIndex} from "/src/_core/store";
import {LitElement} from 'lit';
import _style from "./style";
import _html from "./html"


/**
 *
 */
class MonitorViewProject extends LitElement {

    static properties = {
        active: {type: Number},
        project: { type: Object },

    };

    constructor() {
        super();
        this.active = 1
        // this.project = Monitor.curr(); // Default project is the current one
        this.project = itemById("WB12")
        console.log(this.project)
    }


   action(idx) {
        this.active = idx;
        console.log("--- ", idx);;
        // if (changedProperties.has('project')) {
            // Handle project updates here if necessary
        // }
    }

    static styles = _style();
    render = () => _html(this)
}

customElements.define('monitor-view-project', MonitorViewProject);
