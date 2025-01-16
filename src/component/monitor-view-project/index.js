import {groupProjects, itemById, itemByIndex} from "/src/_core/store";
import {LitElement} from 'lit';
import _style from "./style";
import _html from "./html"

const entries = groupProjects()

/**
 *
 */
class MonitorViewProject extends LitElement {

    static properties = {
        active: {type: Number},
        project: {type: Object, state: true},
        activeIndex: {type: Number, state: true},
        timer: {type: Object, state: true}
    };

    constructor() {
        super();
        this.active = 1
        this.activeIndex = 0;
        this.project = null;
        // this.loop();
        console.log(this.project)
    }

    loop() {
        this.timer = setInterval(
            () => {
                const pid = entries[this.activeIndex][0]
                this.project = itemById(pid)
                if (!this.project) this.activeIndex = 0;
                this.activeIndex++;
            }, 5000
        )
    }

    pause() {
        clearInterval(this.timer)
        this.activeIndex--;
    }

    next() {
        this.activeIndex++;
        if (this.activeIndex > entries.length - 1) this.activeIndex = 0;
        this.project = itemById(entries[this.activeIndex][0])
    }

    prev() {
        this.activeIndex--;
        if (this.activeIndex < 0) this.activeIndex = entries.length - 1;
        this.project = itemById(entries[this.activeIndex][0])
    }

    clear() {
        clearInterval(this.timer)
        this.project = null;
    }

    action(idx) {
        this.active = idx;
        console.log("--- ", idx);
    }


    connectedCallback() {
        super.connectedCallback();
        console.log('Element launced the DOM!');
        this.loop();
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        console.log('Element removed from the DOM!');
        this.clear()
    }

    static styles = _style();
    render = () => this.project ? _html(this) : ''
}

customElements.define('monitor-view-project', MonitorViewProject);
