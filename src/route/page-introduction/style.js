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

    }
`