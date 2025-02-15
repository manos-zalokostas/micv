import {css} from 'lit';

export default () => css`

    nav {
        text-align: right;
        
        button {
            text-transform: uppercase;
            font-family: Tahoma, Geneva, sans-serif;
            border: none;
            outline: none;
            border-bottom: 1px solid #ccc;
            padding: 5px 10px;
            width: 100px;
            margin: 5px;
            text-align: right;
            background: white;

            &:hover,
            &.active {
                color: darkgoldenrod;
            }
        }

    }


`