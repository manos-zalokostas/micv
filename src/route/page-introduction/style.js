import {css} from 'lit';

export default () => css`

    article {
        
        #mi-monitor {
            position: relative;
            height: 375px;
            width: 75%;
        }

        #interactive_intro {
            overflow: hidden;
        }

        .page-nav {
            position: absolute;
            z-index: 100;
            top: 75px;
            right: 15px;
            display: flex;
            justify-content: flex-end;
            width: 300px;
            text-align: center;
        }

    }

`