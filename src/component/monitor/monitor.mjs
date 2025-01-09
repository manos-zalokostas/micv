import { html, css, LitElement } from 'lit';
import MonitorViewWelcome from '/component/monitor/monitor-view-welcome.mjs';
import MonitorViewReference from '/component/monitor/monitor-view-reference.mjs';
import MonitorViewProject from '/component/monitor/monitor-view-project.mjs';
import MonitorViewTool from '/component/monitor/monitor-view-tool.mjs';
import * as Store from '/data/store.mjs';
import { $ } from '/core/util.mjs';

class Monitor extends LitElement {
    static styles = css`
        .mcontrols {
            position: absolute;
            top: 75px;
            right: 0;
            z-index: 15;
            color: #eee;
            padding: 0;
        }

        .mcontrols b {
            display: inline-block;
            vertical-align: top;
            font-size: xx-large;
            width: 100px;
        }

        .mcontrols b:nth-child(2) {
            font-size: x-large;
        }

        .mbuttons {
            position: relative;
            z-index: 15;
            float: right;
            color: #eee;
            padding: 0;
            width: 100%;

        }

        .mbuttons > b {
            float: right;
            border: solid 4px #555;
            text-transform: uppercase;
            margin: 5px;
            text-align: center;
            width: 125px;
        }

        .mbuttons > em {
            float: left;
            text-align: center;
            background-color: slategrey;
            font-style: normal;
        }

        .mbuttons > em.paused,
        .mbuttons > em:hover {
            display: block;
            color: white;
            background-color: tomato;
            border: 2px solid #555;
        }


        .monitor {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #555;
            cursor: pointer;
            overflow: hidden;
        }

        .monitor > ul {
            list-style: none;
        }

        .monitor > ul > li > div:last-child {
            position: absolute;
            right: 0;
            top: 0;
            height: 100%;
            opacity: 0.1;
            width: 70%;
        }


        .mitem {
            font-family: verdana;
            color: white;
        }

        .mitem > h4 {
            position: absolute;
            top: 15px;
            left: 10px;
            color: #aaa;
            text-transform: uppercase;
            padding: 0;
            margin: 0;
        }

        .mitem > h2 {
            /*width: 10%;*/
            /*text-align: left;*/
            /*border-top-right-radius: 15px;*/
            /*border-bottom-right-radius: 15px;*/
            /*background-color: tomato;*/
            /*padding: 1%;*/
            /*font-size: 1em;*/
        }

        .mitem > h2 {
            font-family: arial;
            text-transform: uppercase;
            color: goldenrod;
            font-size: 2.8em;


            .mgroupi > h4 {
                float: left;
                font-size: 1.5em;
                font-family: calibri;
                width: 44%;
                margin-top: 6%;
            }

            .mgroupi > img {
                position: relative;
                bottom: -5%;
                right: -100%;
                border-radius: 6px;
                width: 28%;
                border: 4px solid gainsboro;
            }

            .mgroupi > img:hover {
                cursor: pointer;
                border: 4px solid gold;
            }

            .mgroupi div > div {
                height: 24%;
                width: 30%;
                float: left;
                margin: 2px;
                position: relative;
                overflow: hidden;
                cursor: pointer;
                border-radius: 4px;
                border: 2px solid #ddd;
                list-style-type: none;
            }

            .mgroupi {
                float: left;
                list-style-type: none;
                text-align: right;
                color: white;
                width: 30%;
                height: 26%;
                padding-right: 1%;
                margin: 2px;
                background-color: rgba(255, 255, 255, 0.2);
                position: relative;
            }

            .mgroupi .sublist ul {
                margin: 0;
                padding: 0;
                border: none;
            }

            .mgroupi > ul > li:hover {
                color: white;
                background-color: tan;
            }
    `;

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
            const $elem = event.target;

            if ($elem.title === 'project') return MonitorViewProject.install();

            if ($elem.title === 'reference') return MonitorViewReference.install();

            if ($elem.title === 'tool') return MonitorViewTool.install();

            if ($elem.title === 'next') return MonitorViewProject.update(this.next());

            if ($elem.title === 'prev') return MonitorViewProject.update(this.prev());
        });
    }

    render() {
        return html`
      <div id="skills_preview" class="monitor">
        <div id="skill_fields" class="mbuttons">
          <b title="tool">skills</b>
          <b title="project">projects</b>
        </div>

        <div id="skill_controls" class="mcontrols">
          <b title="prev">&lt;</b>
          <b title="pause">||</b>
          <b title="next">&gt;</b>
        </div>

        <ul>
          <li id="mi-monitor-view"></li>
        </ul>
      </div>
    `;
    }
}

customElements.define('monitor-view', Monitor);
