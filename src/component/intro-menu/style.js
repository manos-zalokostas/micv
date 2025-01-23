import {css} from 'lit';

export default () => css`

    #introduction_menu {
        display: flex;
        gap: 10px;
        //float: left;
        //list-style-type: none;
        //padding: 0;
        //margin-left: 2%;
        //height: 100%;
        //width: 75%;


        button {
            border: none;
            outline: none;
            font-family: Tahoma, Geneva, sans-serif;
            background: none;
            //text-transform: lowercase;
            //text-decoration: none;
            //font-size: 2em;
            //color: #aaa;
            //width: 100%;

            &:hover,
            &.active {
                color: goldenrod;
            }
        }

    }


`