import {html} from 'lit';
import * as Store from "/_service/store"

const asset = {
    projects: Store.groupProjects(),
    tools: Store.groupTools(),
    list: [
        'project',
        'skill',
    ]
}

export default (elem) => html`
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


let targetListChange = "#search_radio input";
const _listChange = (evt, fn) => evt.target.matches(targetListChange) && fn();

let targetList = "#search_result input[list]";
const _selItem = (evt, fn) => evt.target.matches(targetList) && fn();
