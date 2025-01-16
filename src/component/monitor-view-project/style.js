import {css} from 'lit';

export default () => css`

    #project.mitem {

        img {
            position: absolute;
            opacity: 0.3;
            top: 0;
            right: 0;
            width: 50%;
            padding: 15px;
        }

        h2 {
            text-align: left;
            text-transform: uppercase;
            margin-left: 15px;
            color: tomato;
        }

         h4 {
            text-align: left;
            margin-left: 15px;
            color: goldenrod;
        }

        .mtext {
            float: left;
            text-align: left;
            overflow: hidden;
            max-height: 245px;
            margin-left: 50px;
            width: 75%;
            color: white;

            #project.mitem .mtext > * {
                display: inline;
                margin: 0;
                padding: 0;
            }
        }
    }


    #project_tools {
        position: absolute;
        bottom: 0;
        width: 100%;

        img {
            max-height: 48px;
        }
    }


`