import {css} from 'lit';

export default () => css`
    #itools {
        position: absolute;
        z-index: 1;
        bottom: 0;
        opacity: .1;
        width: 100%;


        .mi-scale-min {
            transform: scale(1.1);
        }

        .mi-scale-mid {
            transform: scale(1);
        }

        .mi-scale-max {
            transform: scale(.9);
        }


    }


`