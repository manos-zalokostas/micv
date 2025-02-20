import {css, html, LitElement} from 'lit';
import * as Store from "/src/_core/store";


const asset = {
    work: Store.groupProjects(),
    tools: Store.groupTools(),
    list: ['work', 'skill',]
}


// let targetListChange = "#search_radio input";
// const _listChange = (evt, fn) => evt.target.matches(targetListChange) && fn();
//
// let targetList = "#search_result input[list]";
// const _selItem = (evt, fn) => evt.target.matches(targetList) && fn();


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
            // console.log(">>>>>> VALUE", list)
            this.active = list;
        }

        actionItemSel(value) {
            // console.log(">>>>>> VALUE", value)
            // Monitor.select('project', this.value.split(' ').shift());
        }

        render = () => html`
            <section>

                <input id="${this.active}"
                       @change="${(evt) => this.actionItemSel(evt.target.value)}">

                <nav>
                    ${asset.work.map(([key, name, img]) => html`
                        <a data-key="${key}" data-type="work">
                            <em>${name}</em>
                            <img src="${img}" alt="logo ${name}"/>
                        </a>
                    `)}
                    ${asset.tools.map(name => html`
                        <a data-key="${name}" data-type="tool">
                            <em>${name.replaceAll("_", " ")}</em>
                            <img src="/images/tech_logos/${name}.jpg" alt="logo ${name}"/>
                        </a>
                    `)}
                </nav>

            </section>
        `;


        static styles = css`

            section {
                position: absolute;
                z-index: 50;
                right: 0;
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                gap: 20px;
                margin: 0 50px;
                //width: 500px;
                padding: 15px 25px;


                input {
                    display: block;
                    padding: 5px;
                    border: none;
                    outline: none;
                    border-bottom: 4px solid #ddd;
                    //&::before {
                    //    content: "search";
                    //}
                }


                nav {
                    display: none;
                    //display: flex;
                    //flex-direction: column;
                    //max-height: 85vh;
                    max-width: 97vw;
                    overflow: auto;
                    background: #eee;
                    padding: 10px 5px 0;


                    a {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        margin: 5px;
                        padding: 4px 10px;
                        border-bottom: 1px solid #ddd;
                        min-width: 225px;
                        background: white;


                        em {
                            font-style: normal;
                        }

                        img {
                            width: 75px;
                            height: 75px;
                        }
                    }
                }

                &:hover {
                    nav {
                        display: flex;
                    }
                }
            }
        `
    }
);
