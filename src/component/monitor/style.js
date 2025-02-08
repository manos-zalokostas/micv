import {css} from 'lit';

export default () => css`

    article {
        position: relative;
        width: 96vw;
        margin: 0 2vw;
        height: 400px;
        cursor: pointer;
        overflow: hidden;
        border-bottom: 4px solid black;
        padding: 15px 5px 5px;
        background-color: #444;

        header {
            position: relative;
            z-index: 10;
            display: flex;
            justify-content: space-between;
            background: linear-gradient(0,#555, #444);
            width: 100%;

            button {
                color: white;
                font-family: verdana;
                padding: 4px 10px;
                margin: 2px;
                border: none;
                outline: none;
                width: 75px;
                background: #555
            }

        }

    }
`