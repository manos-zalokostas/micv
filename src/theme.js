import {css} from 'lit';

export const theme = css`

    :host {
        --font: sans-serif;

        --color-tool: orange;
        --color-work: tomato;
        --color-study: mediumseagreen;
        --color-generic: lightskyblue;
        --color-default: #888;
        --color-top: white;

        //color: steelblue;

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

    .generic {
        color: var(--color-generic);
        //background-color: rgba(90, 90, 100);
    }

    
    button,
    fieldset{
        position: relative;
        display: inline-flex;
        flex-direction: row-reverse;
        align-items: center;
        justify-content: center;
        gap: 10px;
        color: var(--color-default);
        font-size: 16px;
        font-weight: bold;
        outline: none;
        border-radius: 4px;
        border: none;
        background-color: transparent;
        cursor: pointer;
        padding: 4px 16px;

        span {
            display: block;
            width: 20px;
            border-radius: 30px;
            line-height: 0;
        }

        &:hover {
            //border-color: inherit;
        }
        
        &:active {
            background-color: #eee;
        }

        &.active {
            border: 1px solid var(--color-default);
        }

        &.work {
            //color: white;
            border-color: var(--color-work);

            &.active {
                color: var(--color-work);
                //background-color: var(--color-work);
            }
        }

        &.study {
            //color: white;
            border-color: var(--color-study);

            &.active {
                color: var(--color-study);
                //background-color: var(--color-study);
            }
        }

        &.tool {
            //color: white;
            border-color: var(--color-tool);

            &.active {
                color: var(--color-tool);
                //background-color: var(--color-tool);
            }
        }

        &.generic {
            //color: white;
            border-color: var(--color-generic);

            &.active {
                color: var(--color-generic);
                //background-color: var(--color-tool);
            }
        }

        &.top {
            //color: white;
            border-color: var(--color-top);

            &.active {
                color: var(--color-top);
                //background-color: var(--color-tool);
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
