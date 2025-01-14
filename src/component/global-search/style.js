import {css} from 'lit';

export default () => css`

    #search {
        display: flex;
        flex-direction: column;
        margin: 10px;
    }

    #search_radio {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
    }

    #search_radio label {
        font-size: 16px;
    }

    #search_result {
        display: flex;
        flex-direction: column;
    }

    #search_result input {
        width: 200px;
        padding: 5px;
        margin-top: 5px;
    }

    #search_result datalist {
        max-height: 150px;
        overflow-y: auto;
    }
    
`