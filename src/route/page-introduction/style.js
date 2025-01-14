import {css} from 'lit';

export default () => css`

    #mi-monitor {
        position: relative;
        margin: 25px 15px;
        height: 35%;
        width: 75%;
    }

    #interactive_intro {
        position: absolute;
        bottom: 0;
        left: 0;
        float: left;
        overflow: hidden;
        margin: 1%;
        border-radius: 30px;
        border: 4px solid #ddd;
        width: 97%;
        height: 50%;
    }

    #interactive_intro > div {
        position: absolute;
        top: 2%;
        float: left;
        overflow: hidden;
        text-align: left;
        font-size: 0.9em;
        font-family: calibri;
        color: #777;
        margin: 0 0 0 1%;
        border-radius: 17px;
        width: 98%;
        height: 97%;
    }

`