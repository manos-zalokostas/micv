import {css} from 'lit';

export default () => css`

    #resume-wrap {
        display: flex;
        margin: auto;
    }


    #cv_description-control {
        text-align: right;
    }

    #cv_description {
        overflow: auto;
        height: 500px;
    }


    #resume_cv_field {
        section {
            display: flex;
            justify-content: space-between;
            //padding: 10px 6px;
            border-bottom: 1px solid #bbb;

            header {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                text-align: left;
                //text-align: left;
                //min-height: 25px;
                padding: 10px;


                small {
                    opacity: 0;
                    display: none;

                    &.active {
                        display: initial;
                        opacity: 1;
                    }
                }
            }
        }
    }


`