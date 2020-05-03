export const strHtml = (str) => str.trim();

export const strJoin = (a) => a.join("");

export const js = (...args) => JSON.stringify(args);

export const jsf = (...args) => JSON.stringify(args, null, 4);

export const jp = (...args) => JSON.parse(args);

export const cl = (...args) => console.log(' --> DEBUG:: ', args);

export const dq = (str) => document.querySelector(str);

export const dqa = (str) => document.querySelectorAll(str);
