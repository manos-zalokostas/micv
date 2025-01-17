import {css} from 'lit';

export default () => css`

    #menu_tabs {
        font-family: Tahoma, Geneva, sans-serif;
        text-align: left;
        background: black;

        a {
            color: white;
            text-decoration: none;
            //font-size: 2em;
            width: 100%;

            &:hover,
            &.active {
                color: goldenrod;
            }
        }
    }

`