import {css} from 'lit';

export default () => css`

    #ititle {
        text-align: left;
        color: orange;
        font-size: 2.5em;
        font-family: verdana;
        width: 100%;
        margin-top: 5%;

        h3 {
            display: inline;
        }

    }

    #ibody {
        display: flex;
        justify-content: space-between;
        gap: 50px;
        position: relative;
        z-index: 10;
        font-family: Verdana, Geneva, sans-serif;
        text-align: left;
        //overflow: hidden;
        margin: 50px;


        > div {
            flex-basis: 50%;
        }
    }


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
            transition: all 1s;

            &.showcase {
                position: absolute;
                width: 94vw;
                height: 50vw;
            }
        }
    }


`