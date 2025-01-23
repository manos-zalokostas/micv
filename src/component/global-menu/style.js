import {css} from 'lit';

export default () => css`

    #site_menu {
        position: fixed;
        z-index: 100;
        right: 0;

        button {
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