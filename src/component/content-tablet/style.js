import {css} from 'lit';

export default () => css`
    .mi-tablet {
        position: absolute;
        font-family: Tahoma, Geneva, sans-serif;

        //header {
        //    position: fixed;
        //    z-index: 1;
        //    //opacity: 0.3;
        //    text-align: center;
        //    font-size: 200em;
        //    //color: black;
        //    color:gainsboro;
        //    line-height: 0.34;
        //    width: 100%;
        //}

        nav {
            display: flex;
            z-index: 5;
            flex-wrap: wrap;
            justify-content: space-evenly;
            gap: 10px;
            position: relative;
            height: 90vh;
            overflow: auto;
            margin-top: 75px;

            .tgroupi {
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                position: relative;
                overflow: hidden;

                color: white;
                padding: 10px;
                min-height: 300px;
                width: 675px;
                background: #555;

                strong {
                    font-size: 32px;
                    color: tomato;
                    width: 50%;
                }

                small {
                    color: goldenrod;
                    width: 50%;
                }

                aside {
                    display: flex;
                    display: none;
                    position: absolute;
                    z-index: 6;
                    right: 15px;
                    top: 15px;
                    flex-wrap: wrap;
                    justify-content: flex-end;
                    gap: 5px;
                    width: 46%;

                    img {
                        position: initial;
                        opacity: 0;
                        width: 32px;
                        height: 32px;
                    }
                }

                img {
                    position: absolute;
                    z-index: 5;
                    left: 50%;
                    opacity: .2;
                    border: 4px solid gainsboro;
                    width: 100%;

                }

                &:hover {
                    img {
                        left: 40%;
                    }

                    aside {
                        img {
                            opacity: 1;
                        }
                    }
                }

            }
        }
    }


`