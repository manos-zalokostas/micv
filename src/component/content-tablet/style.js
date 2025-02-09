import {css} from 'lit';

export default () => css`

    nav {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        gap: 10px;
        position: relative;
        z-index: 5;
        font-family: Tahoma, Geneva, sans-serif;
        height: 90vh;
        overflow: auto;


        a {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            position: relative;
            color: white;
            text-decoration: none;
            padding: 10px;
            min-height: 300px;
            width: 575px;
            overflow: hidden;
            background: #444;

            //button {
            //    position: absolute;
            //    z-index: 10;
            //    right: 5px;
            //    top: 5px;
            //}

            strong {
                font-size: 32px;
                color: tomato;
                width: 50%;
            }

            small {
                color: goldenrod;
                width: 50%;
            }

            aside {
                position: absolute;
                z-index: 6;
                right: 15px;
                top: 15px;
                flex-wrap: wrap;
                justify-content: flex-end;
                gap: 5px;
                width: 46%;

                img {
                    position: initial;
                    opacity: 0;
                    width: 32px;
                    height: 32px;
                }
            }

            img {
                position: absolute;
                z-index: 5;
                left: 50%;
                opacity: .2;
                border: 4px solid gainsboro;
                width: 100%;

            }

            &:hover {
                img {
                    left: 40%;
                }

                aside {
                    img {
                        opacity: 1;
                    }
                }
            }

        }
    }
}


`