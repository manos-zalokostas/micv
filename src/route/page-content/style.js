import {css} from 'lit';

export default () => css`

    article {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 100vw;
        height: 100vh;
        //padding: 25px;

        header {
            flex-basis: 100px;
        }

        main {
            flex-basis: calc(100vh - 100px);
            position: relative;
            //z-index: 5;
            top: 0;
            left: 0;
            height: 100%;
            width: 200%;
            transition: all;
            //padding: 25px;

            &.mi-transit-detail {
                left: -100%;
            }

            > div {
                position: relative;
                float: left;
                width: 50%;
                height: 100%;
            }

        }
    }
`