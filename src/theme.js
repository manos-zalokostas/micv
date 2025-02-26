import {css} from 'lit';

export const theme = css`

    :host {
        --font: sans-serif;

        //--color-tool: goldenrod;
        //--color-work: indianred;
        //--color-study: mediumseagreen;
        //--color-default: cornflowerblue;;

        --color-tool: orange;
        --color-work: tomato;
        --color-study: mediumseagreen;
        --color-default: dimgrey;

        //color: dimgrey;

    }

    .work {
        color: var(--color-work);
        //background-color: rgba(100, 90, 90);
    }

    .study {
        color: var(--color-study);
        //background-color: rgba(90, 100, 90);
    }

    .tool {
        color: var(--color-tool);
        //background-color: rgba(90, 90, 100);
    }


    button {
        color: #888;
        outline: none;
        font-weight: bold;
        border: none;
        border-bottom: 2px solid;
        padding: 6px 12px;
        width: 150px;
        cursor: pointer;
        background-color: transparent;

        &:hover {
            //border-color: inherit;
        }

        &.active {
            color: white;
            border-bottom-color: var(--color-default);
            background-color: var(--color-default);
        }

        &.work {
            //color: white;
            border-color: var(--color-work);

            &.active {
                background-color: var(--color-work);
            }
        }

        &.study {
            //color: white;
            border-color: var(--color-study);

            &.active {
                background-color: var(--color-study);
            }
        }

        &.tool {
            //color: white;
            border-color: var(--color-tool);

            &.active {
                background-color: var(--color-tool);
            }
        }

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

        &.tool {
            background-color: var(--color-tool);
        }
    }
`;
