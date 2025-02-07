import {css} from 'lit';

export default () => css`

    .monitor {

        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        cursor: pointer;
        overflow: hidden;
        border-bottom: 4px solid black;
        padding: 15px 5px 5px;
        background-color: #444;

        header {
            position: absolute;
            z-index: 5;
            top: -4px;
            display: flex;
            justify-content: center;
            background: radial-gradient(black, transparent);
            width: 100%;

            button {
                color: white;
                font-family: verdana;
                padding: 4px 10px;
                margin: 2px;
                border: none;
                outline: none;
                width: 75px;
                background: black;
            }

        }

    }
`