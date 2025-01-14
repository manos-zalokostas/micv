import {LitElement} from 'lit';
import _html from "./html"
import _style from "./style";


/**
 *
 */
class JoiMonitor extends LitElement {


    static properties = {
        animation_running: { type: Boolean },
        animation: { type: Object },
        currIndex: { type: Number },
    };

    constructor() {
        super();
        this.animation_running = false;
        this.animation = null;
        this.currIndex = 0;
    }

    connectedCallback() {
        super.connectedCallback();
        this.listen();
    }

    intro() {
        let icounter = 0;

        MonitorViewWelcome.install();
        const introAnime = setInterval(() => {
            console.log('counter: ', icounter);
            const child1 = $('#welcome h3:first-child');
            const child2 = child1.nextElementSibling;
            const child3 = child2.nextElementSibling;
            const child4 = child3.nextElementSibling;

            if (icounter >= 1) {
                $('#skills_preview').style.left = '0';
            }

            if (icounter === 5) {
                $All('#skill_fields b').forEach((skill) => {
                    skill.style.top = '0';
                    skill.style.opacity = '1';
                });
            }

            if (icounter === 10) {
                child1.style.opacity = '1';
            }

            if (icounter === 18) {
                child1.style.opacity = '0';
            }
            if (icounter === 20) {
                child2.style.opacity = '1';
            }
            if (icounter === 28) {
                child2.style.opacity = '0';
            }
            if (icounter === 30) {
                child3.style.opacity = '1';
            }
            if (icounter === 38) {
                child3.style.opacity = '0';
            }
            if (icounter === 40) {
                child4.style.opacity = '1';
            }
            if (icounter === 48) {
                child4.style.opacity = '0';
            }
            if (icounter > 50) {
                icounter = null;
                clearInterval(introAnime);
                $('#skill_fields > em').style.right = '-24%';
                $('#welcome').remove();
            }
            icounter++;
        }, 120);
    }

    curr() {
        return Store.itemByIndex(this.currIndex);
    }

    next() {
        this.currIndex++;
        return Store.itemByIndex(this.currIndex);
    }

    prev() {
        this.currIndex--;
        return Store.itemByIndex(this.currIndex);
    }

    _nextTools(divs, skills, counter, field, pctl) {
        // Implement method
    }

    invoke(mode) {
        // Implement method
    }

    reset() {
        // Implement method
    }

    stop() {
        // Implement method
    }

    pause() {
        // Implement method
    }

    filter(filter) {
        // Implement method
    }

    select(caller, target) {
        // Implement method
    }

    listen() {
        this.shadowRoot.querySelector('#skills_preview').addEventListener('click', (event) => {
            // const $elem = event.target;
            //
            // if ($elem.title === 'project') return MonitorViewProject.install();
            //
            // if ($elem.title === 'reference') return MonitorViewReference.install();
            //
            // if ($elem.title === 'tool') return MonitorViewTool.install();
            //
            // if ($elem.title === 'next') return MonitorViewProject.update(this.next());
            //
            // if ($elem.title === 'prev') return MonitorViewProject.update(this.prev());
        });
    }

    static styles = _style();
    render = () => _html(this)
}

customElements.define('joi-monitor', JoiMonitor);
