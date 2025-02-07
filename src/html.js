import {html} from 'lit';
import "/src/route/page-introduction"
import "/src/route/page-content"
import "/src/route/page-reference"

import "/src/component/global-menu"
import {PAGE} from "./env";
// import "/src/component/global-search"

const assets = [];


export default (elem) => html`

    <div id="view"
         @page-transit=${elem.evtPageTransit}>

        <div id="wrapper">

            <div id="mi-global-menu">
                <global-menu>
            </div>

            ${
                    (PAGE.LAND === elem.display && html`
                        <div id="mi-page-introduction">
                            <page-introduction></page-introduction>
                        </div>
                    `)

                    || (PAGE.WORK === elem.display && html`
                        <div id="mi-page-content">
                            <page-content></page-content>
                        </div>
                    `)

                    || (PAGE.CERT === elem.display && html`
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
