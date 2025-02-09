import {css} from 'lit';

export default () => css`

    article {

        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 100vw;
        height: 100vh;

        header {
            height: 100px;
            margin: 0;
        }

        aside {
            height: 375px;
            margin: 10px 0 50px 0;
        }

        main {
            height: calc(100vh - 475px);
            overflow: auto;
        }

    }
`