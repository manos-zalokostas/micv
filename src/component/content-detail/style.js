import {css} from 'lit';

export default () => css`

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        top: 50px;

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
        gap: 50px;
        font-family: Verdana, Geneva, sans-serif;
        text-align: left;
        margin: 100px 50px;
        line-height: 3;
    }

    footer {

    }

`