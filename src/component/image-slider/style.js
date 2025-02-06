import {css} from 'lit';

export default () => css`
    #mi-content-slider {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;

        img {
            width: 400px;
            height: 250px;
            margin: 15px;
            background: white;
            padding: 15px;
            border: 1px solid #eee;
            transition: all .5s;

            &.active {
                position: fixed;
                top: 50px;
                right: 50px;
                width: calc(100vw - 200px);
                height: calc(100vh - 100px);
            }
        }
    }`