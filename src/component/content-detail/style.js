import {css} from 'lit';

export default () => css`

    #ititle {
        float: left;
        text-align: left;
        color: orange;
        font-size: 2.5em;
        font-family: verdana;
        width: 100%;
        padding: 0;
        margin: 0;
        margin-top: 5%;
    }

    #ititle h3 {
        display: inline;
        font-family: verdana;
        padding: 0;
        width: 70%;
        float: left;
        margin: 0;
        margin-bottom: 1%;
        margin-left: 2%;
    }

    #ititle hr {
        padding-bottom: 0;
        margin-bottom: 0;
    }


    #ibody {
        float: left;
        font-family: Verdana, Geneva, sans-serif;
        font-size: 0.9em;
        text-align: left;
        width: 70%;
        height: 70%;
        overflow: hidden;
        margin-top: 4%;
    }

    #idescription {
        color: rgb(50, 71, 90);
        font-family: calibri;
        height: 65%;
        padding: 2%;
    }

    #idescription span {
        padding: 0;
        margin: 0;
    }
`