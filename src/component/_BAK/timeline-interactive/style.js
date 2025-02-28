import {css} from 'lit';

export default () => css`
    #interactive_cv_field h2 {
        color: #aaa;
        float: right;
        width: 10%;
        font-size: 2.5em;
        padding: 0;
        margin: 1%;
        position: absolute;
        right: 0;
        text-align: right;
    }


    #interactive_cv_field #timeline_btns {
        list-style-type: none;
        position: absolute;
        left: 0;
        top: 19%;
        padding: 0;
        width: 10%;
        height: 60%;
        float: left;
        margin: 0;
        margin-right: 1%;
        margin-top: 3%;
    }

    #interactive_cv_field #timeline_btns li {
        float: left;
        width: 100%;
        margin: 4%;
        overflow: hidden;
    }

    #timeline_btns a {
        float: left;
        text-decoration: none;
        background-color: #555;
        width: 78%;
        height: 90%;
        text-align: center;
        padding: 5%;
        color: white;
        font-weight: bold;
        font-family: calibri;
        border-top: #ccc 2px solid;
        border-bottom: #aaa 2px solid;
        /*border-radius: 10px;*/
    }

    #interactive_cv_field #timeline_btns li a:hover {
        border-bottom: 2px solid #ddd;
    }

    #document_cv_field {
        overflow: auto;
    }

    #document_cv_field img {
        width: 100%;
        border: solid #ddd;
    }

    #interactive_cv_field #objectives {
        list-style-type: none;
        position: absolute;
        left: 15%;
        top: 30%;
        padding: 0;
        margin: 0;
        width: 74%;
        height: 58%;
        /*opacity: 0;*/
    }

    #interactive_cv_field #objectives #label {
        list-style-type: none;
        padding-left: 2%;
        padding-bottom: 1%;
        margin: 1%;
        margin-top: 5%;
        width: 35%;
        font-family: calibri;
        color: darkcyan;
        font-weight: bold;
        font-size: 2em;
        border-bottom: solid 2px #aaa;
    }

    #interactive_cv_field #objectives #skills {
        padding-left: 4%;
        padding-top: 2%;
        margin: 1%;
        width: 92%;
        height: 70%;
        color: #888;
        font-family: calibri;
        text-align: left;
        font-size: 1.5em;
    }

    #interactive_cv_field #timeline {
        position: absolute;
        background-color: #bbb;
        width: 70%;
        height: 2px;
        padding: 0 1%;
        font-size: 0.8em;
        font-weight: bold;
        font-family: calibri;
        float: left;
        list-style-type: none;
        top: 12%;
        left: 15%;
    }

    //
    //#interactive_cv_field #timeline li {
    //    position: relative;
    //    margin: 0 2%;
    //    float: left;
    //    background-color: #ccc;
    //    width: 1px;
    //    font-family: arial;
    //    /*border-radius: 20px;*/
    //}
    //
    //#interactive_cv_field #timeline li p {
    //    visibility: hidden;
    //    height: 1px;
    //}
    //
    //#interactive_cv_field #timeline li.default {
    //    color: #bbb;
    //    font-size: inherit;
    //    text-decoration: none;
    //    position: relative;
    //    bottom: 0;
    //    left: -6px;
    //    float: left;
    //}
    //
    //#interactive_cv_field #timeline li.job_start {
    //    color: #ca8;
    //    font-size: 1.5em;
    //    bottom: 20px;
    //    background-color: #ca8;
    //}
    //
    //#interactive_cv_field #timeline li.job_end {
    //    color: darkkhaki;
    //    margin-left: 19px;
    //    font-size: 0.8em;
    //}
    //
    //#interactive_cv_field #timeline li.std_start {
    //    color: teal;
    //    font-size: 1.5em;
    //    position: relative;
    //    margin-left: 22px;
    //    bottom: 20px;
    //    background-color: teal;
    //}
    //
    //#interactive_cv_field #timeline li.std_start a {
    //    left: -16px;
    //    bottom: 20px;
    //}
    //
    //#interactive_cv_field #timeline li.job_start a {
    //    left: -15px;
    //    bottom: 21px;
    //    padding-bottom: 42px;
    //}
    //
    //#interactive_cv_field #timeline li.std_end {
    //    color: teal;
    //    font-size: 0.8em;
    //}
    //
    //#interactive_cv_field #timeline li.job_start_off,  #interactive_cv_field #timeline li.job_end_off,  #interactive_cv_field #timeline li.std_start_off,  #interactive_cv_field #timeline li.std_end_off {
    //    color: #aaa;
    //    font-size: 0.8em;
    //}
    //
    //#interactive_cv_field #timeline li a {
    //    color: inherit;
    //    font-size: inherit;
    //    text-decoration: none;
    //    position: relative;
    //    bottom: 10px;
    //    left: -8px;
    //    float: left;
    //}
    //
    //#interactive_cv_field #timeline li a.default {
    //    color: #888;
    //    font-size: 0.8em;
    //    text-decoration: none;
    //    position: relative;
    //    bottom: 10px;
    //    left: -8px;
    //    float: left;
    //}
    //
    //#interactive_cv_field #timeline li a:hover {
    //    font-size: 1.5em;
    //    bottom: 1.5em;
    //    padding: 0 0.5em;
    //    padding-bottom: 2em;
    //    left: -1.5em;
    //}
    //
    //#interactive_cv_field #timeline li a.selected {
    //    font-size: 1.5em;
    //    bottom: 1.5em;
    //    left: -1em;
    //    font-weight: bold;
    //}

    #timeline {
        section {
            display: flex;
            justify-content: space-evenly;
            padding: 10px;

            span {
                display: block;
                width: 100px;   
                position: relative;

                small {
                    position: absolute;
                    display: none;
                }

                &:hover {
                    small {
                        display: block;
                    }
                }

            }

        }
    }

`