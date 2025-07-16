import {BASEPATH} from "/src/service/env";
import DATA, {T} from "/src/indexdb/_data";

const IDS = Object.values(DATA).map(o => o.id),
    TOOLS = Object.values(T);

const PATH = {
    DOCU: 'document',
    PROJ: 'project',
    TOOL: 'tool',
}

export default function () {
    const {pathname} = window.location;

    // DOCUMENT
    if (pathname === ["", BASEPATH, PATH.DOCU].join("/")) return true

    const parts = pathname.split("/");
    if (parts.length !== 4) return false;

    let [, , type, id] = parts;

    // TOOL
    if (PATH.TOOL === type && TOOLS.includes(id)) return !this.evtToolSelect({detail: {tool: id}})

    // WORK | STUDY
    id = id.toUpperCase();
    if (PATH.PROJ === type && IDS.includes(id)) return !this.evtProjectSelect({detail: {id}})


    return false;
}