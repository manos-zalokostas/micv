function nav_bar_designer(item_requested, function_caller) {
    const oXML = __GET_CACHED_DATA('sXML', true);

    if (oXML) {
        __RESOLVE_AND_POPULATE_MAIN_BOARD(item_requested, function_caller, oXML);
        return;
    }

    // CALL THE FETCH API TO RETRIEVE RELATED DATA AND POPULATE THE NAVIGATION LIST MENU
    fetch('items.xml')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            return response.text();
        })
        .then(data => {
            const parser = new DOMParser();
            const xmlData = parser.parseFromString(data, 'application/xml');
            __RESOLVE_AND_POPULATE_MAIN_BOARD(item_requested, function_caller, xmlData);
        })
        .catch(error => {
            console.error('Could not fetch the Main Menu Buttons File:', error.message);
        });
}