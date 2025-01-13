let str = `badge-category
badge-tool
content-menu
extra
global-menu
global-search
intro-menu
linkpack-cert
linkpack-social
linkpack-study
linkpack-work
monitor
monitor-view-intro
monitor-view-project
monitor-view-reference
monitor-view-tool
quote-author
quote-intro
quote-siteinfo
quote-welcome
tablet-badge-category
tablet-badge-menu
tablet-badge-tool
timeline
timeline-interactive`
;

let x = str.split(/\n/).map(
    v =>`<${v}></${v}>`
).join(";")


console.log(x)