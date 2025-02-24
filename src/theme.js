import {css} from 'lit';

export const theme = css`

    :host {
        --font: sans-serif;

        --color-tool: orange;
        --color-work: tomato;
        --color-study: limegreen;
        --color-default: dodgerblue;
        //--color-tool: deepskyblue;


    }

    .pill {
        color:white;
        font-size: 14px;
        padding: 4px 8px;
        margin: 0 10px;
        border-radius: 10px;
        background-color: var(--color-default);

        &.work {
            background-color: var(--color-work);
        }

        &.study {
            background-color: var(--color-study);
        }
    }

    button {
        color: white;
        outline: none;
        font-weight: bold;
        //border: 2px solid #ddd;
        border: none;
        border-bottom: 2px solid;
        padding: 6px 12px;
        width: 150px;
        cursor: pointer;
        background-color: #555;

        &:hover {
            border-color: inherit;
        }

        &.active {
            background-color: var(--color-default);
        }

        &.work {
            border-color: var(--color-work);

            &.active {
                background-color: var(--color-work);
                //background-color: indianred;
            }
        }

        &.study {
            border-color: var(--color-study);

            &.active {
                background-color: var(--color-study);
            }
        }

        &.tool {
            border-color: var(--color-tool);

            &.active {
                background-color: var(--color-tool);
            }
        }

    }
`;
