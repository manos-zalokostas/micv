import {html, css, LitElement} from 'lit';
import {theme} from "../service/theme";

customElements.define('view-doc-statement',

    class ViewDocStatement extends LitElement {

        static properties = {};

        constructor() {
            super();
        }

        render = () => html`

            <h3>Senior Full Stack Engineer with 10+ years of experience designing and
                delivering end-to-end software systems, spanning greenfield application development and
                large-scale legacy modernization. My work focuses on architecting scalable, secure, and portable
                web infrastructures that connect frontend systems, backend services, and distributed data
                processing layers into cohesive platforms.
            </h3>

        `;

        static styles = [
            theme,
            css`
                section {
                    position: relative;
                    left: -45px;
                    width: 100%;

                    header {
                        border-bottom: 2px solid #999;
                        margin: 15px 0 5px 0;

                        h3 {
                            margin: 0;
                            background: linear-gradient(90deg, #ccc, transparent);
                            padding: 5px;
                            max-width: 700px;
                        }
                    }

                    nav {
                        display: flex;
                        flex-direction: column;
                        margin-left: 50px;
                        width: 98%;

                        a {
                            margin: 0 0 5px 10px;
                            padding: 5px;

                            

                            p {
                                color: #444;

                                
                            }

                            > * {
                                padding: 0;
                                margin: 0;
                            }


                        }


                    }
                }
            `]

    }
);