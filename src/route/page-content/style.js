import {css} from 'lit';

export default () => css`

    .page-nav {
        position: absolute;
        z-index: 100;
        top: 75px;
        right: 15px;
        display: flex;
        justify-content: flex-end;
        width: 300px;
        text-align: center;
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