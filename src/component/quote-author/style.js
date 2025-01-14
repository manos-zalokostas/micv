import {css} from 'lit';

export default () => css`

    #author_presentation {
        width: 19%;
        height: 38%;
        position: absolute;
        top: 7%;
        right: 1%;
        font-family: tahoma;
        font-style: italic;
        border-radius: 10px;
    }

    #author_presentation p {
        width: 98%;
        font-size: 1em;
        position: absolute;
        left: -6%;
        top: 0;
        height: 60%;
        padding: 2% 6%;
        text-align: right;
        z-index: 10;
        border-radius: 13px;
        font-family: calibri;
        color: #555;
    }

    #author_presentation img {
        width: 8%;
        position: fixed;
        left: 0.5%;
        top: 45%;
        border: solid #ccc;
        border-radius: 125px;
        z-index: 100;
    }

`