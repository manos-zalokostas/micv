import {css} from 'lit';

export default () => css`
    #project.mitem img {
        padding: 15px;
    }

    #project.mitem img {
        position: absolute;
        opacity: 0.3;
        top: 0;
        right: 0;
        padding: 0;
        width: 50%;
    }

    #project.mitem h2 {
        text-align: left;
        margin-left: 15px;
    }

    #project.mitem .mtext {
        float: left;
        text-align: left;
        overflow: hidden;
        max-height: 245px;
        margin-left: 50px;
        width: 75%;
    }

    #project.mitem .mtext > * {
        display: inline;
        margin: 0;
        padding: 0;
    }

    #project_tools {
        position: absolute;
        bottom: 0;
        width: 100%;
    }

    #project_tools img {
        max-height: 48px;
    }

`