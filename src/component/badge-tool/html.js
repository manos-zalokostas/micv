import {html} from 'lit';


const _style = () => {
    const styles = [
        'mi-scale-min',
        'mi-scale-mid',
        'mi-scale-max',
    ];
    return styles[+((Math.random() * 10) % 3).toFixed()]
}

const mix = (a) => {
    // console.log(">>>>>> IN ", a)
    const num = +(Math.random() * 10).toFixed()
    a.forEach((v, i) => i % num && a.unshift(i % 2 ? a.shift() : a.pop()));
    // console.log(">>>>>> OUT ", a)
    return a;
}

export default (elem) => html`
    <aside >
        ${mix(elem.entries)
                .map(
                        val => html`
                            <img class="${_style()}"
                                 src="/images/tech_logos/${val}.jpg" alt="icon ${val}"/>
                        `
                )}
    </aside>
`;


const target = "#itools a";
const _fn = (evt, fn) => {
    evt.preventDefault();
    evt.target.matches(target) && fn();
}