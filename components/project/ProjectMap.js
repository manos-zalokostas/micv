import {groupByDomain} from "/micv/service/DataStore.js";
import ProjectViewItemlist from "/micv/components/project/ProjectViewItemlist.js";


class WCProjectMap extends HTMLElement {

    shadow = '';
    hasMount = false;

    category = 'Design and Development';
    filter = 'web';


    static get observedAttributes() {
        return [
            "category",
            "filter"
        ];
    }


    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});

        const shadow = this.shadow;
        shadow.addEventListener('maximizeProjectGroup', (evt) => {
            const elems = shadow.querySelectorAll('wc-project-view-itemlist')
            const wcs = Array.from(elems);

            wcs.forEach(wc => wc.shadow.querySelector('.group-project').classList.add('hide'))
            const elem = wcs.find(wc => wc.shadow.querySelector('.group-project').dataset.gid === evt.detail.groupId);

            elem.shadow.firstElementChild.classList.remove('hide')
            elem.shadow.firstElementChild.classList.add('max')

        })
        shadow.addEventListener('exitProjectGroup', (evt) => {
            const elems = shadow.querySelectorAll('wc-project-view-itemlist')
            const wcs = Array.from(elems);

            wcs.forEach(wc => wc.shadow.querySelector('.group-project').classList.remove('hide'))
            const elem = wcs.find(wc => wc.shadow.querySelector('.group-project').dataset.gid === evt.detail.groupId);

            elem.shadow.firstElementChild.classList.remove('max')
            wcs.forEach(wc => wc.shadow.querySelector('.group-project').classList.add('init'))

        })
    }


    attributeChangedCallback(name, prev, next) {

        if (prev !== next) {
            this[name] = next;
        }

        this.render();
    }


    connectedCallback() {

        this.filter = this.getAttribute('filter') ?? this.filter;
        this.category = this.getAttribute('category') ?? this.category;

        this.render();

        this.hasMount = true;
        setTimeout(
            () => {
                let elems = document.querySelectorAll(".group-project");
                //
                elems.forEach(elem => elem.classList.add("reset"))
            }, 4000
        )
    }


    render() {
        let shadow = this.shadow;
        shadow.innerHTML = view();

        makeUiBoxes(this.category, this.filter)
            .forEach(
                wc => shadow.firstChild.appendChild(wc)
            )

    }

}


/*

 */
const view = () => `<article class="pool-project">
<link href="/components/project/ProjectMap.css" rel="stylesheet" />
</article>`;


/**
 *
 * @returns {WCProjectViewItemlist[]|WCProjectViewItem[]|*[]}
 */
const makeUiBoxes = (category, filter) => {

    let boxes;

    boxes = groupByDomain(filter)
        .map((group, i) => new ProjectViewItemlist(group, i));

    return boxes;

}


customElements.define('wc-project-map', WCProjectMap);
