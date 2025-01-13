import {css} from 'lit';

export default () => css`
    .main_txt {
        position: absolute;
        left:10%;
        /*top: 0;*/
        float: right;
        font-size: 1.2em;
        font-family: sans-serif;
        width: 90%;
        padding: 0;
        margin: 0;
        text-align: left;
        color: #555;
        border-radius: 10px;
    }


    .aux_txt {
        position: absolute;
        bottom:10%;
        text-align: right;
        font-size: 1.2em;
        overflow: auto;
    }

`