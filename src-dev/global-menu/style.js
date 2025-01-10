import {css} from 'lit';

export default () => css`

    #site_menu {
        position: fixed;
        z-index: 15;
        top: 0;
        right: 0;
        list-style-type: none;
        width: 30%;
        height: 3%;
        padding: 4px;
        margin: 0;
        font-family: $font-family;
        background: red;

        li {
            float: right;
            margin-left: 1px;
            border: solid 1px #ccc;
            background-color: $primary-color;
            position: relative;
            width: 30%;
            height: 84%;
            padding-top: 2%;
            padding-bottom: 1%;
            text-align: center;

            a {
                color: white;
                border-radius: 6px;
                font-size: 1em;
                padding: 2% 22%;

                &:hover {
                    cursor: pointer;
                }

                &.selected {
                    cursor: pointer;
                    color: $highlight-color;
                    font-weight: bold;
                }
            }
        }
    }
`