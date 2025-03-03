export default async () => {


    if (!'serviceWorker' in navigator) return;
    let sw;

    try {

        // navigator.serviceWorker.register('/app2/sw-app2.js', { scope: '/app2/' })

        const APP_SCOPE = "/micv/";
        const reg = await navigator.serviceWorker.register(APP_SCOPE +"micv-sw.js", {scope: APP_SCOPE});
        console.log(' -- SW_REGISTRATION-INIT', reg);


        if (reg.installing) {
            console.log(" -- SW_REGISTRATION-STATUS:: --INSTALLING", reg)
            sw = reg.installing
        }
        if (reg.waiting) {
            console.log(" -- SW_REGISTRATION-STATUS:: --WAITING", reg)
            sw = reg.waiting
        }
        if (reg.active) {
            console.log(" -- SW_REGISTRATION-STATUS:: --ACTIVE", reg)
            sw = reg.active
        }


        sw.addEventListener('statechange', (evt) => {
            console.log(" -- SW_REGISTRATION-EVENT:: --STATE-CHANGE", evt.target.state)
        })


        sw.addEventListener('updatefound', () => {
            sw.installing.addEventListener("statechange", (evt) => {
                console.log(" -- SW_REGISTRATION-MULTI-EVENTS:: --2. STATE-CHANGE ", evt.target.state)
            })
            console.log(" -- SW_REGISTRATION-MULTI-EVENTS:: --1. UPDATE-FOUND ", sw)
        })


        navigator.serviceWorker.addEventListener('controllerchange', () => {
            console.log(" -- SW_REGISTRATION__NAVIGATOR__EVENT:: --CONTROLLER CHANGED | ** FIRED FROM 'SKIP-WAITING' ")
        })


        navigator.serviceWorker.addEventListener('message', (evt) => {
            let {clientId, message} = evt.data;
            console.log(" -- SW_REGISTRATION__NAVIGATOR__EVENT:: -- 4. ##SG_REG CAPTURED @SW MESSAGE  => ", {
                clientId,
                message
            })
        })


        if (navigator.serviceWorker.controller) {
            navigator.serviceWorker.controller.postMessage(" -- 1. #SW_REG POSTING INIT DATA")
        }


    } catch (error) {
        console.log(' -- XX => SW_REGISTRATION FAILED: ', {error})
        throw new Error(error);
    }

}