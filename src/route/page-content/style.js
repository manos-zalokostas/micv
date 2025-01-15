import {css} from 'lit';

export default () => css`

    #mi-page-content-menu {
        position: absolute;
        z-index: 10;
        left: 0;
        top: 0;
        width: 100%;
        height: 75px
    }


    #mi-content-wrapper {
        position: absolute;
        z-index: 5;
        top: 0;
        left: 0;
        height: 100%;
        width: 200%;
        transition: all;
        /*background: silver;*/

        &.mi-transit-detail {
            left: -100%;
        }
    }

    #mi-content-wrapper > div {
        position: relative;
        float: left;
        width: 50%;
        height: 100%;
    }
`