import {LitElement} from 'lit';
import _html from "./html"
import _style from "./style";


/**
 *
 */
class GlobalMenu extends LitElement {

    static properties = {
        active: {type: Number}
    };

    constructor() {
        super();
        this.active = 1
    }


    action(idx) {
        //     if (target.closest('#timeline_btns a')) {
        //         const domain = target.id;
        //
        //         let color;
        //         if (domain === 'mlt') {
        //             color = 'gainsboro';
        //         } else if (domain === 'std') {
        //             color = 'teal';
        //         } else {
        //             color = 'goldenrod';
        //         }
        //
        //         const selectedTimelineA = document.querySelector('#timeline a.selected');
        //         const timelineObjectives = document.querySelector('#objectives');
        //         const timelineBtnsAWithStyle = document.querySelector('#timeline_btns a[style]');
        //
        //         if (selectedTimelineA) {
        //             selectedTimelineA.classList.remove('selected');
        //             selectedTimelineA.style.paddingBottom = '0';
        //             // timelineObjectives.style.opacity = '0';
        //         }
        //
        //         if (timelineBtnsAWithStyle) {
        //             timelineBtnsAWithStyle.removeAttribute('style');
        //         }
        //
        //         target.style.backgroundColor = color;
        //         document.querySelector('#label').style.color = color;
        //
        //         document.querySelectorAll('#timeline li').forEach((li) => {
        //             if (li.classList.contains(domain)) {
        //                 li.classList.remove('_off');
        //                 // li.style.opacity = '0';
        //                 li.style.paddingLeft = '6px';
        //                 li.style.opacity = '1';
        //             } else {
        //                 if (!li.classList.contains('_off') && li.classList !== 'default') {
        //                     li.classList.add('_off');
        //                     li.style.paddingLeft = '0';
        //                 }
        //             }
        //         });
        //     }
        //
        //     /*
        //     // LISTENERS FOR THE TIMELINE DATES (2001, 2005 etc) TO DELIVER (ONCLICKED) THEIR CONTENT ONSCREEN
        //      */
        //
        //
        //     if (target.closest('#timeline > li a')) {
        //         const selectedTimelineA = document.querySelector('#timeline > li a.selected');
        //         const timelineObjectives = document.querySelector('#objectives');
        //
        //         if (selectedTimelineA) {
        //             selectedTimelineA.classList.remove('selected');
        //             selectedTimelineA.removeAttribute('style');
        //         }
        //
        //         target.classList.add('selected');
        //         target.animate([{paddingBottom: '0'}, {paddingBottom: '100px'}], {
        //             duration: 500,
        //             easing: 'ease-in-out',
        //             fill: 'both'
        //         });
        //
        //         // timelineObjectives.style.opacity = '0';
        //
        //         const label = target.parentNode.querySelector('p[title="item_label"]').innerHTML;
        //         const skill = target.parentNode.querySelector('p[title="item_skills"]').innerHTML;
        //         document.querySelector('#label').innerHTML = label;
        //         document.querySelector('#skills').innerHTML = skill;
        //
        //         timelineObjectives.animate({opacity: '1'});
        //     }
        //
    }

    static styles = _style();
    render = () => _html(this)
}

customElements.define('global-menu', GlobalMenu);
