import {html} from 'lit';
import "/src/route/page-introduction"
import "/src/route/page-content"
import "/src/route/page-reference"

import "/src/component/global-menu"

const assets = [];


export default (elem) => html`

    <div id="view"
         @page-transit=${elem.evtPageTransit}>

        <div id="wrapper">

            <div id="mi-global-menu">
                <global-menu>
            </div>

            ${
                    ('INTRO' === elem.display && html`
                        <div id="mi-page-introduction">
                            <page-introduction></page-introduction>
                        </div>
                    `)

                    || ('CONT' === elem.display && html`
                        <div id="mi-page-content">
                            <page-content></page-content>
                        </div>
                    `)

                    || ('CERT' === elem.display && html`
                        <div id="mi-page-reference">
                            <page-reference></page-reference>
                        </div>
                    `)
                    || ''

            }
        </div>

    </div>
`;


const target = "#site_menu a";
const _fn = (evt, fn) => evt.target.matches(target) && fn();
