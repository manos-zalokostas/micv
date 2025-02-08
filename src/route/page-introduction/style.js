import {css} from 'lit';

export default () => css`

    article {

        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 100vw;
        height: 100vh;

        header {
            flex-basis: 100px;
        }

        aside {
            flex-basis: 375px;
        }

        main {
            flex-basis: calc(100vh - 475px);
        }

        //#mi-monitor {
        //    //position: absolute;
        //    //top: 100px;
        //    margin: 0 5vw;
        //    height: 375px;
        //    width: 90vw;
        //}
        //
        //section {
        //    overflow: hidden;
        //}
        //
        //.page-nav {
        //    position: absolute;
        //    z-index: 100;
        //    top: 75px;
        //    right: 15px;
        //    display: flex;
        //    justify-content: flex-end;
        //    width: 300px;
        //    text-align: center;
        //}

    }

`