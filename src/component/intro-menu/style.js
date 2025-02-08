import {css} from 'lit';

export default () => css`

    nav {

        button {
            text-transform: uppercase;
            font-family: Tahoma, Geneva, sans-serif;
            border: none;
            outline: none;
            border-bottom: 2px solid;
            padding: 5px 10px;
            width: 150px;
            margin: 15px;
            background: none;

            &:hover,
            &.active {
                color: goldenrod;
            }
        }

    }


`