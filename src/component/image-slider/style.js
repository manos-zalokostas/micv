import {css} from 'lit';

export default () => css`
    #mi-content-slider {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;

        img {
            width: 325px;
            height: 200px;
            margin: 15px;
            background: white;
            padding: 15px;
            border: 1px solid #eee;
            transition: all .5s;

            &.placeholder {
                display: none;
                position: fixed;
                top: 25px;
                right: 50px;
                width: calc(100vw - 200px);
                height: calc(100vh - 100px);

                &.active {
                    display: initial;
                }
            }
        }
    }`