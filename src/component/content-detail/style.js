import {css} from 'lit';

export default () => css`

    header {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        max-height: 175px;
        
        //background: red;

        h3 {
            font-size: 2em;
            color: orange;
        }

        button {
            color: white;
            text-transform: uppercase;
            font-family: verdana;
            //width: 125px;
            border: none;
            outline: none;
            padding: 10px;
            background-color: #444;
        }
        
    }

    main {
        
        position: relative;
        z-index: 5;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 50px;
        font-family: Verdana, Geneva, sans-serif;
        text-align: left;
        //margin: 100px 50px;
        line-height: 2;
        padding: 25px;
        height: calc(100vh - 300px);
        overflow: auto;
        }
        //background: yellowgreen;
    }

    footer {

        background: dodgerblue;
    }

`