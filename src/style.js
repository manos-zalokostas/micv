import {css} from 'lit';

export default () => css`

    #view {
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;

        #wrapper {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 1;
            text-align: center;
            font-size: 1em;
            width: 100%;
            height: 100%;
            padding: 15px;
            background-color: white;

            nav {
                position: absolute;
                z-index: 20;
                right: 50px;
                background: red;
            }

            article {
                position: absolute;
                left: 0;
                width: 100vw;
                height: 100vh;

                #introduction {
                    top: 0;
                }

                #content {
                    top: 100%;
                }

                #credentials {
                    top: 200%;
                }

            }


        }

    }

`
