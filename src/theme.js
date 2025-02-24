import {css} from 'lit';

export const theme = css`

    :host {
        --font: sans-serif;

        //--color-tool: goldenrod;
        //--color-work: indianred;
        //--color-study: mediumseagreen;
        //--color-default: cornflowerblue;;
        --color-tool: skyblue;
        --color-work: tomato;
        --color-study: limegreen;
        --color-default: orange;


    }

    .work {
        color: var(--color-work);
        background-color: rgba(100, 90, 90);
    }

    .study {
        color: var(--color-study);
        background-color: rgba(90, 100, 90);
    }

    .tool {
        color: var(--color-tool);
        background-color: rgba(90, 90, 100);
    }

    .pill {
        color: white;
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
        border-bottom: 4px solid var(--color-default);
        padding: 6px 12px;
        width: 150px;
        cursor: pointer;
        background-color: #555;

        &:hover {
            //border-color: inherit;
        }

        &.active {
            background-color: var(--color-default);
        }

        &.work {
            color: white;
            border-color: var(--color-work);

            &.active {
                background-color: var(--color-work);
                //background-color: indianred;
            }
        }

        &.study {
            color: white;
            border-color: var(--color-study);

            &.active {
                background-color: var(--color-study);
            }
        }

        &.tool {
            color: white;
            border-color: var(--color-tool);

            &.active {
                background-color: var(--color-tool);
            }
        }

    }
`;
