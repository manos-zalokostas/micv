import {css} from 'lit';

export default () => css`

    #menu_tabs {
        position: absolute;
        height: 100%;
        width: 75%;

        ul {
            height: 100%;
        }

        ul li {
            position: relative;
            bottom: 5%;
            float: left;
            padding: 4px;
            padding-top: 0;
            font-family: Tahoma, Geneva, sans-serif;
            height: 99%;
            width: 20%;

            a {
                position: absolute;
                bottom: 0;
                left: 0;
                text-decoration: none;
                color: #aaa;
                font-size: 2em;
                text-transform: lowercase;
                font-family: Tahoma, Geneva, sans-serif;
                width: 100%;
                text-align: center;

                &:hover,
                &.active {
                    color: goldenrod;
                }
            }
        }

        #search {
            float: left;
            width: 30%;
            margin: 10px 0;
        }

        #search_radio {
            float: left;
            width: 40%;

            > div {
                float: left;
                width: 50%;
            }

            label {
                &:hover {
                    cursor: pointer;
                }

                input {
                    float: right;
                    width: 50%;
                    margin: 4px 0 0;
                }
            }
        }

        #search_result {
            height: 100%;

            input {
                float: right;
                width: 50%;
                height: 100%;
                background: none;
                border: none;
                border-bottom: 1px solid #888;
            }
        }
    }
`