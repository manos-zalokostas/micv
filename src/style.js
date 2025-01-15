import {css} from 'lit';

export default () => css`
    #wrapper {
        position: absolute;
        top: 0;
        left: 0;
        float: left;
        z-index: 1;
        text-align: center;
        font-size: 1em;
        width: 100%;
        height: 100%;
        background-color: white;
    }

    #wrapper ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }

    #view {
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    #mi-page-introduction {
        position: absolute;
        top:0;
        left:0;
        width: 100vw;
        height: 100vh;
    }

    #mi-page-content {
        position: absolute;
        //top:100%;
        left:0;
        width: 100vw;
        height: 100vh;
    }

    #mi-page-reference {
        position: absolute;
        //top:200%;
        left:0;
        width: 100vw;
        height: 100vh;
    }
`