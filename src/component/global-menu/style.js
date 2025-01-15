import {css} from 'lit';

export default () => css`

    #site_menu {
        position: fixed;
        z-index: 100;
        right: 0;
        //margin: 15px;

        a {
            display: inline-block;
            text-transform: uppercase;
            font-size: 1em;
            padding: 10px 15px;
            border: 1px solid #ccc;
            width: 100px;

            &:hover {
                color: indianred;
            }

            &.active {
                background: indianred;
                color: white;
            }
        }
    }

`