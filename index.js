import {ajax_retrieve_skill_data, EVAL_EXTERNAL_URL_COMMAND} from "./service";
import {start_projector_display} from "./monitor";
import {initializeListeners} from "./listener";


document.addEventListener('DOMContentLoaded', async () => {
    console.log('MCV1');

    let animation = '';
    let animation_running = false;
    let gmode = 'global';

    localStorage.clear();

    await ajax_retrieve_skill_data();

    EVAL_EXTERNAL_URL_COMMAND();

    start_projector_display();

    initializeListeners()
});