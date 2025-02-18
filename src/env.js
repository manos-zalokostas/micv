export const EVT = {
    PAGE_TRANSIT: 'page-transit',
    INTRO_TRANSIT: 'intro-transit',
    CONTENT_TRANSIT: 'content-transit',
    MONITOR_CONTENT: 'monitor-content',

    DOMAIN_CHANGE: 'domain-change',
    TOOL_CHANGE: 'tool-change',
}

export const PAGE = {
    LAND: 1,
    WORK: 2,
    CERT: 3,
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


export const _DEV = {
    PAGE: PAGE.WORK,
    VIEW: VIEW.WORK.NAVI
}
