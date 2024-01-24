// import {ajax_retrieve_skill_data, EVAL_EXTERNAL_URL_COMMAND} from "./service";
// import {start_projector_display} from "./monitor";
// import {initializeListeners} from "./listener";

import {init} from "./core/service.mjs";

document.addEventListener('DOMContentLoaded', async () => {
    console.log('MCV1');

    localStorage.clear();

    await init();
    //
    // EVAL_EXTERNAL_URL_COMMAND();
    //
    // start_projector_display();
    //
    // initializeListeners()
});