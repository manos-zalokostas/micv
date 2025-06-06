export const EVT = {
    PAGE_TRANSIT: 'page-transit',
    INTRO_TRANSIT: 'intro-transit',
    CONTENT_TRANSIT: 'content-transit',
    MONITOR_CONTENT: 'monitor-content',

    DOMAIN_CHANGE: 'domain-change',
    TOOL_CHANGE: 'tool-change',

    PROJECT_SELECT: 'project-select',
    TOOL_SELECT: 'tool-select',
}

export const PAGE = {
    LAND: 1,
    WORK: 2,
    CERT: 3,
    DOCU: 4
}

export const VIEW = {
    LAND: {
        INTRO: 1,
        RESU: 2,
        DOCU: 3,
    },
    WORK: {
        NAVI: 1,
        CONT: 2,
    },
    CERT: {},
}

export const DOMA = {
    WORK: 'WORK',
    STUD: 'STUDY',
    TOOL: 'TOOL',
}

export const MONIT = {
    WORK: DOMA.WORK,
    TOOL: DOMA.TOOL,
    PAUS: 3,
    PREV: 4,
    NEXT: 5,
}


export const _DEV = {
    PAGE: PAGE.PDF,
    VIEW: VIEW.LAND.RESU,
    // MONIT: MONIT.TOOL,
}
