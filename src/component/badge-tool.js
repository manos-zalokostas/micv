import {html, css, LitElement} from 'lit';

const _style = () => {
    const styles = [
        'mi-scale-min',
        'mi-scale-mid',
        'mi-scale-max',
    ];
    return styles[+((Math.random() * 10) % 3).toFixed()]
}

const mix = (a) => {
    const num = +(Math.random() * 10).toFixed()
    a.forEach((v, i) => i % num && a.unshift(i % 2 ? a.shift() : a.pop()));
    return a;
}


customElements.define('badge-tool',
    class BadgeTool extends LitElement {

        static properties = {
            active: {type: Number},
            entries: {type: Array}
        };

        constructor() {
            super();
            this.active = 1
        }


        action(idx) {
            this.active = idx;
            // console.log("--- ", idx);
        }

        render = () => html`
            <aside>
                ${mix(this.entries)
                        .map(
                                val => html`
                                    <img class="${_style()}"
                                         src="/images/tech_logos/${val}.jpg" alt="icon ${val}"/>
                                `
                        )}
            </aside>
        `;


        static styles = css`
            aside {
                position: fixed;
                z-index: 1;
                bottom: 10%;
                opacity: 0.1;
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
                width: 100vw;

                img {
                    width: 200px;

                    &.mi-scale-min {
                        transform: scale(1.1);
                    }

                    &.mi-scale-mid {
                        transform: scale(1);
                    }

                    &.mi-scale-max {
                        transform: scale(.9);
                    }

                }

            }


        `
    }
);
