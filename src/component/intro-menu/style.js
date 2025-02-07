import {css} from 'lit';

export default () => css`

    nav {
        display: flex;
        gap: 10px;

        button {
            text-transform: uppercase;
            font-family: Tahoma, Geneva, sans-serif;
            border: none;
            outline: none;
            background: none;

            &:hover,
            &.active {
                color: goldenrod;
            }
        }

    }


`