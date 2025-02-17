import {css, html, LitElement} from 'lit';
import * as Store from "../../_core/store";


const asset = {
    projects: Store.groupProjects(),
    tools: Store.groupTools(),
    list: [
        'project',
        'skill',
    ]
}


let targetListChange = "#search_radio input";
const _listChange = (evt, fn) => evt.target.matches(targetListChange) && fn();

let targetList = "#search_result input[list]";
const _selItem = (evt, fn) => evt.target.matches(targetList) && fn();


customElements.define('global-search',

    class GlobalSearch extends LitElement {


        static properties = {
            active: {type: String},
        };

        constructor() {
            super();
            this.active = 'project';
        }


        action(list) {
            console.log(">>>>>> VALUE", list)
            this.active = list;
        }

        actionItemSel(value) {
            console.log(">>>>>> VALUE", value)
            // Monitor.select('project', elem.value.split(' ').shift());
        }

        render = () => html`
            <div id="search">

                <div id="search_radio">
                    ${asset.list.map(
                            (v, i) => html`
                                <div>
                                    <label for="search_${v}">${v}</label>
                                    <input id="search_${v}" type="radio" name="search" value="${v}"
                                           @click="${(evt) => _listChange(evt, () => elem.action(v))}">
                                </div>
                            `)}
                </div>


                <div id="search_result">

                    <input
                            id="${elem.active}"
                            list="${elem.active}_list"
                            @change="${(evt) => _selItem(evt, () => elem.actionItemSel(evt.target.value))}">

                    <datalist id="${asset.list[0]}_list">
                        ${asset.projects.map(([id, name]) => html`
                            <option value="${id}">${name}</option>`)}
                    </datalist>
                    <datalist id="${asset.list[1]}_list">
                        ${asset.tools.map(name => html`
                            <option value="${name}">${name}</option>`)}
                    </datalist>

                </div>

            </div>
        `;


        static styles = css`

            #search {
                display: flex;
                flex-direction: column;
                margin: 10px;
            }

            #search_radio {
                display: flex;
                justify-content: space-between;
                margin-bottom: 10px;
            }

            #search_radio label {
                font-size: 16px;
            }

            #search_result {
                display: flex;
                flex-direction: column;
            }

            #search_result input {
                width: 200px;
                padding: 5px;
                margin-top: 5px;
            }

            #search_result datalist {
                max-height: 150px;
                overflow-y: auto;
            }

        `
    }
);
