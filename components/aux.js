export const strHtml = (str) => str.trim();

export const strJoin = (a) => a.join("");

export const js = (...args) => JSON.stringify(args);

export const jsf = (...args) => JSON.stringify(args, null, 4);

export const jp = (...args) => JSON.parse(args);

export const cl = (...args) => console.log(' --> DEBUG:: ', args);

export const dq = (str) => document.querySelector(str);

export const dqa = (str) => document.querySelectorAll(str);


export const cladd = (elem, style) => {
    elem.classList.add(style)
};

export const clrem = (elem, style) => {
    elem.classList.remove(style);
}

export const setattr = (elem, attr, value) => {
    elem.setAttribute(attr, value);
}

export const remattr = (elem, attr) => {
    elem.removeAttribute(attr);
}

export const setstyle = (elem, prop, val) => {
    elem.style[prop] = val;
}

export const remstyle = (elem, prop) => {
    delete elem.style[prop]
}
