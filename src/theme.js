import {css} from 'lit';

export const theme = css`
    button {
        color: #777;
        outline: none;
        font-weight: bold;
        border: 2px solid #ddd;
        padding: 6px 12px;
        width: 150px;
        //background: #555;
        cursor: pointer;

        &:hover {
            color: tomato;
            border-color: inherit;
            //background-color: limegreen;
        }

        &.active {
            color: white;
            background-color: indianred;
        }

    }
`;
