import {css} from 'lit';

export default () => css`

    article {
        padding: 25px;

        fieldset {
            text-align: right;
            border: none;
            margin: 10px 0;
        }

        nav {
            display: flex;
            margin: auto;


            p {
                overflow: auto;
                margin: auto;
                width: 100%;
            }

            section {
                display: flex;
                justify-content: space-between;
                border-bottom: 1px solid #bbb;

                header {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    text-align: left;
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

    }


`