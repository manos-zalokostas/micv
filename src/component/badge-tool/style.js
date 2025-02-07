import {css} from 'lit';

export default () => css`
    aside {
        position: fixed;
        z-index: 1;
        bottom: 10%;
        opacity: 0.1;
        /* width: 100%; */
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;

        img {
            width: 200px;

            &.mi-scale-min {
                transform: scale(1.1);
            }

            &.mi-scale-mid {
                transform: scale(1);
            }

            &.mi-scale-max {
                transform: scale(.9);
            }

        }

    }


`