export const $ = (sel, node = document) => node.querySelector(sel),
    $All = (sel, node = document) => node.querySelectorAll(sel);

export const basepath = x => ["/micv", x].join("/")