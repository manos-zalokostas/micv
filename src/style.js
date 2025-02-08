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
            
            #mi-global-menu {
                position: absolute;
                right: 50px;
            }

            #mi-page-introduction {
                position: absolute;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
            }

            #mi-page-content {
                position: absolute;
                //top:100%;
                left: 0;
                width: 100vw;
                height: 100vh;
            }

            #mi-page-reference {
                position: absolute;
                //top:200%;
                left: 0;
                width: 100vw;
                height: 100vh;
            }

        }

    }

`
