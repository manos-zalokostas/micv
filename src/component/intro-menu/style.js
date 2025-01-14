import {css} from 'lit';

export default () => css`

    #introduction_menu {
        position: absolute;
        top: 0;
        width: 100%;
        height: 4%;
        z-index: 5;
    }

    #introduction_menu ul {
        float: left;
        list-style-type: none;
        padding: 0;
        margin-left: 2%;
        height: 100%;
        width: 75%;
    }

    #introduction_menu ul li {
        position: relative;
        bottom: 5%;
        float: left;
        padding: 4px;
        padding-top: 0;
        font-family: Tahoma, Geneva, sans-serif;
        height: 99%;
        width: 20%;
    }

    #introduction_menu ul li a {
        position: absolute;
        bottom: 0;
        left: 0;
        text-decoration: none;
        color: #aaa;
        font-size: 2em;
        text-transform: lowercase;
        font-family: Tahoma, Geneva, sans-serif;
        width: 100%;
        text-align: center;
    }

    #introduction_menu #search {
        float: left;
        width: 30%;
        margin: 10px 0;
    }

    #introduction_menu #search_radio {
        float: left;
        width: 40%;
    }

    #introduction_menu #search_radio > div {
        float: left;
        width: 50%;
    }

    #introduction_menu #search_radio label:hover {
        cursor: pointer;
    }

    #introduction_menu #search_radio input {
        float: right;
        width: 50%;
        margin: 4px 0 0;
    }

    #introduction_menu #search_radio label {
        color: white;
        text-transform: uppercase;
        font-size: small;
    }

    #introduction_menu #search_result {
        height: 100%;
    }

    #introduction_menu #search_result input {
        float: right;
        width: 50%;
        height: 100%;
        background: none;
        border: none;
        border-bottom: 1px solid #888;
    }

    #introduction_menu ul li a:hover,
    #introduction_menu ul li a.active {
        color: goldenrod;
    }
    
`