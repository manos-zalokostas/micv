import {css} from 'lit';

export default () => css`

    article {

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

        p {
            color: white;
            text-align: left;
            max-height: 200px;
            max-width: 1000px;
            overflow: hidden;
            padding: 0 10px 10px 25px;
            margin: 0;
        }

    }


    aside {
        position: absolute;
        bottom: 0;
        display: flex;
        justify-content: center;
        gap: 2px;
        width: 100%;

        
        img {
            max-height: 48px;
        }
    }


`