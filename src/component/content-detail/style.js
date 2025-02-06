import {css} from 'lit';

export default () => css`

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        top: 50px;

        #ititle {
            h3 {
                font-size: 2.5em;
                color: orange;
                display: inline;
            }

        }
    }

    #ibody {
        position: relative;
        z-index: 10;
        display: flex;
        justify-content: space-between;
        gap: 50px;
        font-family: Verdana, Geneva, sans-serif;
        text-align: left;
        margin: 50px;


        > div {
            flex-basis: 50%;
        }
    }

`