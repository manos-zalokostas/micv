import {css} from 'lit';

export default () => css`
    #resume_cv_field {
        /*background: red;*/
    }

    #resume-wrap {
        width: 80%;
        margin: auto;
    }


    #cv_description {
        overflow: auto;
        height: 500px;
    }

    #resume_cv_field h2 {
        font-size: 4em;
    }

    #resume_cv_field h3 {

    }

    #resume_cv_field section {
        padding: 10px 6px;
        border-bottom: 1px solid #aaa
    }

    #resume_cv_field header {
        margin-left: 1%;
        margin-right: 1%;
        font-size: 1.2em;
    }

    #resume_cv_field header:before {
        content: ' -';
    }

    #resume_cv_field small {
        font-style: normal;
        font-weight: normal;
        display: none;
        opacity: 0;
        font-size: .8em;

        &.active {
            display: block;
            opacity: 1;
        }
    }
`