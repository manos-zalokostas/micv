import {css} from 'lit';

export default () => css`
    #view-tool {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 15px;
        padding: 30px 15px 15px;

        > div {
            display: flex;
            justify-content: space-between;
            color: white;
            width: 20%;
            padding: 0 10px;
            background: #444;
            border-bottom: 2px solid #555;

            img {
                width: 100px;
                height: 100px;
            }
        }
    }

`