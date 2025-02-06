import {groupProjects, itemById, itemByIndex} from "/src/_core/store";
import {LitElement} from 'lit';
import _style from "./style";
import _html from "./html"


/**
 *
 */
class ProjectTool extends LitElement {

    static properties = {
        active: {type: Number},
        entries: {type: Array}
    };

    constructor() {
        super();
        this.active = 1
        this.entries = itemByIndex(5).tools.tool

        console.log(this.project)
    }


    static styles = _style();
    render = () =>  _html(this)
}

customElements.define('project-tool', ProjectTool);
