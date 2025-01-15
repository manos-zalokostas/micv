import {html} from 'lit';
import "/src/component/badge-category"
import "/src/component/badge-tool"
import {unsafeHTML} from 'lit/directives/unsafe-html.js';

const asset = {
    title: 'TITLE 1',
    description: 'DESCRIPTION 1',
}
const sam = {
    "domain": "STUDY",
    "id": "ST08",
    "section": "Operating Systems",
    "category": "Design and Development",
    "title": "C Development in Unix-like Operating Systems",
    "tools": {
        "tool": [
            "desktop_application",
            "c_language",
            "linux_terminal"
        ]
    },
    "description": " <p>The report describes <span>the development of a short application on a Unix-Like Operating System that is called by name from the command line window (terminal), followed by two integers. The script should contain capacity to generate a corresponding added result from the integers provided and alert the user with a message.</p> <p>The procedure is requesting to implement facilities traditionally used in a Unix-Like environment such as “gedit” and “emacs”, while for the latter additional utilities like “Makefile” and “Version Control” procedures should be regarded and invoked additionally.</p> <p>In the last section of the assignment a complementary routine joins the system and enforces the user to decide the calculation method that system should use, by providing extra input declaring exactly this method with a character sign. Acknowledged methods are restrained to addition, subtraction, multiplication and division</p> <p>Erroneous inputs will generate informative display messages to the user’s terminal.</p> </span> ",
    "screenshots": {
        "shot": [
            "images/os_a1/compile_file_with_emacs.jpg",
            "images/os_a1/compile_file_from_linux_terminal.jpg",
            "images/os_a1/emacs_version_control_facility.jpg",
            "images/os_a1/make_file_graph.jpg",
            "images/os_a1/calculator_running_terminal.jpg"
        ]
    },
    "score": "80",
    "tutor": " <h4><a target=\"_blank\"  href=\"https://www.facebook.com/ioannis.pandithas?fref=ts\">Pandidas, John Phd</a></h4> <p>PhD, University of Liverpool, UK; </p> ",
    "comment": " <span>Excellent work that was written in a very professional manner </span> ",
    "files": {
        "file": "images/os_a1/unix_a1_contents.pdf"
    },
    "media": {}
}


export default (elem) => html`

    <div id="ititle">
        <h3>
            <button
                    @click="${() => elem.dispatchEvent(
                            new CustomEvent('page-transit', {
                                detail: {
                                    transit: false,
                                },
                                bubbles: true,        // Event travels up the DOM tree
                                composed: true        // Event crosses shadow DOM boundaries
                            }))
                    }">
                back
            </button>
            <span>${elem.asset.title}</span>
        </h3>
    </div>

    <div id="mi-badge-category">
        <badge-category entry="${elem.asset.category}"></badge-category>
    </div>

    <div id="mi-badge-tools">
        <badge-tool .entries="${elem.asset.tools.tool}"></badge-tool>
    </div>

    <div id="ibody">

        <div id="idescription">${unsafeHTML(elem.asset.description)}</div>

        <div id="mi-content-slider"></div>

    </div>

    <div id="mi-content-extra"></div>
`;


const target = "#site_menu a";
const _fn = (evt, fn) => evt.target.matches(target) && fn();
