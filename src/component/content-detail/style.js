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
            //padding: 0;
            //width: 70%;
            //float: left;
            //margin: 0;
            //margin-bottom: 1%;
            //margin-left: 2%;
        }

    }

    #ibody {
        display: flex;
        justify-content: space-between;
        gap: 50px;
        position: relative;
        z-index: 10;
        //float: left;
        font-family: Verdana, Geneva, sans-serif;
        text-align: left;
        //font-size: 0.9em;
        //width: 70%;
        //height: 70%;
        overflow: hidden;
        margin: 50px;
        
        
        > div {
            flex-basis: 50%;
        }
        //margin-top: 4%;
    }

    
    #mi-content-slider {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
        
        img {
            width: 400px;
            max-height: 300px;
            margin: 15px;
            background: white;
            padding: 15px;
            border: 1px solid #eee;
        }
    }
    //#idescription {
    //    color: rgb(50, 71, 90);
    //    font-family: calibri;
    //    height: 65%;
    //    padding: 2%;
    //}
    //
    //#idescription span {
    //    padding: 0;
    //    margin: 0;
    //}


`