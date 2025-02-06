import {LitElement} from 'lit';
import _html from "./html"
import _style from "./style";
import "/src/component/monitor-view-project"
import "/src/component/monitor-view-tool"
import {itemById} from "../../_core/store";

/**
 *
 */
class JoiMonitor extends LitElement {


    static properties = {
        activeContent: {type: String},
    };

    constructor() {
        super();
        // this.activeContent = 'INTRO'
        this.activeContent = 'TOOL'
    }

    loopContent(val) {
        console.log("-- ", val)
        this.activeContent = val
    }

    controContent(val) {
        const View = this.activeContent === "PROJ"
            ? this.shadowRoot.querySelector("monitor-view-project")
            : this.shadowRoot.querySelector("monitor-view-tool")

        if ('pause' === val) return View.pause()

        if ('prev' === val) return View.prev()

        View.next();
    }

    forceConent(code) {
        
        this.activeContent = 'PROJ'
        const ViewProject = this.shadowRoot.querySelector("monitor-view-project")
        ViewProject.pause();
        
        ViewProject.project = itemById(code)
    }


    static styles = _style();
    render = () => _html(this)
}

customElements.define('joi-monitor', JoiMonitor);
