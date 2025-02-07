import {html} from 'lit';
import "/src/component/monitor-view-intro"
import "/src/component/monitor-view-project"
import "/src/component/monitor-view-reference"
import "/src/component/monitor-view-tool"

const assets = {
    auto: [
        ['tool', 'tools', 'TOOL',],
        ['project', 'projects', 'PROJ'],
    ],
    manual: [
        'pause', 'prev', 'next'
    ],
}


export default (elem) => html`
    <div class="monitor">

        <header>
            <div class="mbuttons">
                ${assets.auto.map(
                        ([title, label, code]) => html`
                            <button title="${title}"
                                    @click="${() => elem.loopContent(code)}">
                                ${label}
                            </button>
                        `)}
            </div>

            <div class="mcontrols">
                ${assets.manual.map(
                        val => html`
                            <button title="${val}"
                                    @click="${() => elem.controContent(val)}">
                                ${val}
                            </button>
                        `)}
            </div>
        </header>

        <section>
            <nav>
                <a id="mi-monitor-view">
                    ${
                            ('PROJ' === elem.activeContent && html`
                                <monitor-view-project></monitor-view-project>
                            `)
                            || ('TOOL' === elem.activeContent && html`
                                <monitor-view-tool></monitor-view-tool>
                            `)
                            || ('REFF' === elem.activeContent && html`
                                <monitor-view-reference></monitor-view-reference>
                            `)
                            || ""
                    }
                </a>
            </nav>
        </section>

    </div>
`;


const target = "#site_menu a";
const _fn = (evt, fn) => evt.target.matches(target) && fn();
