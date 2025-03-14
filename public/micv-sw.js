"use strict";

const CACHE_V = "1.9B";
const HOST_PATH = "/micv/"
const FILE_SW = 'micv-sw.js'
const FILE_MANIFEST = 'app.webmanifest'
const IMAGES_KEY = 'IMAGE_V' + CACHE_V
const FILES_STATIC_KEY = 'FILE_V1' + CACHE_V
const FILES_STATIC = [
    // "index.html",
    // "index.css",
    // "swRegister.mjs",
    // "component/route.mjs",
    // "route/content.mjs",
    // "component/content-menu.mjs",
    // "component/tablet-menu.mjs",
    // "route/content-detail.mjs",
    // "data/store.mjs",
    // "core/util.mjs",
    // "component/layout.mjs",
    // "component/badge-tools.mjs",
    // "data/index.mjs",
    // "core/visual.mjs",
];

const LATEST_VERSION_CACHE_KEYS = [
    FILES_STATIC_KEY,
    IMAGES_KEY,
]


/**
 *
 */
self.addEventListener("install", (evt) => {
    try {

        // console.log(" -- SW-EVENT-LISTENER:: INSTALL", evt);
        self.skipWaiting();
        const preCache = async () => {
            const cacheAsset = await caches.open(FILES_STATIC_KEY);
            return cacheAsset.addAll(FILES_STATIC);
        }

        evt.waitUntil(preCache());

    } catch (error) {
        console.log(' -- XXXXXXXXXXXXXXX', {error})
    }
})


/**
 *
 */
self.addEventListener("activate", (evt) => {
    try {

        // console.log(" -- SW-EVENT-LISTENER:: ACTIVATE", evt)
        self.clients.claim();
        const clearDeprecatedCaches = async () => {

            const cacheKeysCurr = await caches.keys();

            cacheKeysCurr.forEach(
                async key => (!LATEST_VERSION_CACHE_KEYS.includes(key) && await caches.delete(key))
            )
        }

        evt.waitUntil(clearDeprecatedCaches())

    } catch (error) {
        console.log(' -- XXXXXXXXXXXXXXX', {error})
    }
})


/**
 *
 */
self.addEventListener("fetch", (evt) => {
    try {

        if (!(evt.request.url.startsWith("http"))) return evt.respondWith(fetch(evt.request.url));

        /*
        LET 'SW' HANDLE ONLY REQUESTS THAT REFER TO THE APP SUBPATH
        ** THIS IS TEMPORARY AS THERE MIGHT OCCUR SCENARIOS THAT
        ** EXTERNAL RESOURCES NEED CACHED ALSO
         */

        if (!(evt.request.url.includes(HOST_PATH))) return evt.respondWith(fetch(evt.request.url));

        /*
        LET 'SW' HANDLE ONLY 'GET' REQUESTS
         */
        if (evt.request.method !== "GET") return evt.respondWith(fetch(evt.request.url));


        // console.log(" -- SW-EVENT:: --FETCH --REQUEST-CAPTURED", evt)

        const url = new URL(evt.request.url),
            pathCurr = url.pathname,
            fileCurr = pathCurr.split("/").pop();


        /*
        ALWAYS RETURN A FRESH COPY OF CERTAIN FILES ( i.e 'SW.JS' FILE)
         */
        if ([FILE_SW, FILE_MANIFEST].includes(fileCurr)) return evt.respondWith(fetch(url));


        /*
        @TODO:: ENABLE 'CACHE-FIRST' STRATEGO ON PUBLISH
         */
        // return evt.respondWith(SWStrategyCacheFirst(evt.request))
        return evt.respondWith(SWStrategyCacheFirst(evt.request))

        /*
        NETWORK-FIRST
        => USE IT FOR RESPONDING APIS REQUIRED TO DELIVER MORE 'UP-TO-TIME' DATA
         */
        // return evt.respondWith(SWStrategyNetworkFirst(evt.request))

    } catch (error) {
        console.log(' -- XXXXXXXXXXXXXXX', {error})
    }
})


self.addEventListener("message", (evt) => {
    console.log(" -- SW-EVENT:: --MESSAGE-CAPTURED | 2. @SW CAPTURED INIT DATA => ", evt.data)
    evt.source.postMessage({clientId: 'MOUTSOTRIGO', message: '-- 3. @SW REPLYING TO ##SG_REG:: PICATSU'})
})


/**
 *
 * @param req
 * @returns {Promise<Response|Response>}
 * @constructor
 */
const SWStrategyCacheFirst = async (req) => {
    try {

        // return await caches.match(req) || SWStrategyNetworkFirst(req)
        return await caches.match(req) || SWStrategyNetworkFirst(req)

    } catch (error) {
        console.log(' -- STRATEGO::CACHE-FIRST', {error})
    }
}


/**
 *
 * @param req
 * @returns {Promise<Response>}
 * @constructor
 */
const SWStrategyNetworkFirst = async (req) => {
    try {

        const resp = await fetch(req);
        if (!(resp && resp.type === "basic" && resp.ok)) return resp;

        const respClone = resp.clone();

        const cacheKeyCurr = resolveCacheKey(req);
        if (cacheKeyCurr) {
            const cacheCurr = await caches.open(cacheKeyCurr);
            cacheCurr.put(req, resp);
        }


        return respClone;

    } catch (error) {
        console.log(' -- STRATEGO::NETWORK-FIIRST', {error})
        /*
        IF THE NEWORK FAILS
        => WE TRY TO FIND THE REQUEST IN CACHE AND SERVE IT, DESPITE BEING OLD
         */
        return await caches.match(req)
    }
}


/**
 *
 * @param req
 * @returns {string}
 */
const resolveCacheKey = (req) => {
    try {

        const url = new URL(req.url);
        const PATH = {
            IMG: HOST_PATH + 'images/',
            ICON: HOST_PATH + 'icons/'
        }

        console.log(" --" + url.pathname)
        if (url.pathname.startsWith(PATH.IMG) || url.pathname.startsWith(PATH.ICON)) return IMAGES_KEY;

        return null;
    } catch (error) {
        console.log(' -- XXXXXXXXXXXXXXX', {error})
    }
}