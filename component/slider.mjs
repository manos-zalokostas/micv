/**
 *
 * @param itemSrc
 * @param app
 */


/**
 *
 * @param app
 * @param src
 * @returns {string}
 */
function _resolveElemType(app, src) {
    let item = "";

    switch (app) {
        case 'jpg':
            item += `<img src="${src}" /></div>`;
            break;

        case 'pdf':
            item += `<embed src="${src}" />`;
            break;

        case 'avi':
        case 'swf':
            item += `<iframe src="${src}"></iframe>`;
            break;

        case 'pptx':
            item += `<iframe src="${src}"></iframe>`;
            break;

        default:
            // Handle other cases if needed
            break;
    }

    return item;
}


function html(o) {

    return `
        <div id="media_control">
          
          
            <div id="preview">
                <div id="cpanel">
                    <span title="next"> &gt; </span>
                    <span title="previous"> &lt; </span>
                    <span title="exit"> &times; </span>
                </div>
                <img src=${o.screenshots.shot[0]}>
            </div>
        
            <div id="iscreenshots" >
              ${
                    o.screenshots.shot.map(
                        val => `
                         <a class="item_previewed">
                            <img src=${val} title="ttitle">
                        </a>
                        `
                    ).join("")    
                    
                }
            </div>
        </div>
    ${css()}
    `

}


function css() {
    return `
    <style>
    #media_control {
    width: 100%;
    height:100%;
    /*position: absolute;*/
}

#media_control span {
    float: left;
    width: 74%;
    height: 5%;
    border-top: 3px solid #eee;
    border-bottom: 3px solid;
    position: relative;
    background-color: #ddd;
    font-family: monospace;
}

#media_control span.nochild {
    color: #bbb;
    background-color: #aaa;
    border-top: solid 3px #888;
    text-align: center;
}

#media_control span.nochild:hover {
    background-color: #aaa;
    border-top: solid 3px #888;
}

#media_control span.haschild {
    color: #aaa;
}

#media_control #cpanel span[title='exit']:hover {
    background-color: white;
    color: #aaa;
}

#media_control span.nochilds:hover {
    background-color: white;
}

#media_control span:hover {
    border-bottom: 3px solid #999;
    cursor: pointer;
    background-color: white;
}


#cpanel {
    float: left;
    width: 12%;
    height: 100%;
    overflow: hidden;
    position: relative;
    z-index: 20;
    background-color: #555;
    font-family: tahoma;
    border: solid 2px white;
    margin-top: 0;
    padding-top: 4%;
    font-weight: bold;
    font-size: 1.5em;
}

#preview {
    display: none;
    float: left;
    position: absolute;
    margin: 3% 2%;
    width: 200%;
    height: 100%;
    overflow: hidden;
    right: -100%;
}

#preview img {
    float: left;
    width: 40%;
    height: 87%;
    position: relative;
    margin-left: 8%;
    border: solid #ddd 20px;
    border-radius: 12px;
}

#preview embed {
    float: left;
    width: 38%;
    height: 87%;
    margin-left: 10%;
    border-radius: 12px;
}

#preview iframe {
    float: left;
    width: 40%;
    height: 87%;
    position: relative;
    margin-left: 8%;
    border: solid #ddd 20px;
    border-radius: 12px;
}


#iscreenshots {
    height: 16%;
    padding-top: 1%;
    position: relative;
}


#iscreenshots a {
    float: left;
    width: 15%;
    margin-right: 2%;
    overflow: hidden;
}

#iscreenshots img {
}

#iscreenshots img:hover {
    border: solid 2px #CC0;
    cursor: pointer;
}

</style>
    `
}

function listen() {

}

function install(id, data) {
    document.getElementById(id).innerHTML = html(data);
    listen();
}


export default {
    install,
}



const SAM = {
    "domain": "STUDIES",
    "id": "ST14",
    "section": "Management and Communication",
    "category": "Management",
    "title": "Business Plan Proposal",
    "tools": {
        "tool": [
            "business",
            "research",
            "marketing",
            "requirements",
            "teamwork",
            "risk_management"
        ]
    },
    "description": " <p>The report is a <span>part of a group project activity on a request to constitute a corporation and deliver a business plan for future growth. </p> <p>The domain that we have decided to do business was to provide inland e-learning solutions for the middle-state education of the country. </p></span> ",
    "screenshots": {
        "shot": [
            "images/mc_a2/balance_sheet.jpg",
            "images/mc_a2/break_even_analysis.jpg",
            "images/mc_a2/business_structure.jpg",
            "images/mc_a2/performance_grooup_expectations.jpg",
            "images/mc_a2/products_for_group_target.jpg"
        ]
    },
    "score": "75",
    "tutor": " <h4><a target=\"_blank\" href=\"https://linkedin.com/pub/ariadne-beatrice-kapetanaki/39/75b/50b\">Ariadne-Beatrice, Kapetenaki PhD </h4> <p>Candidate at Centre for Food Policy</p> ",
    "comment": " <ul> <li>Introduction and Conclusion of the report:Very good their initiative to include their notes in order to show evidence about their work and effort. </li> <li>Evidence and validity of business strategy:They have a well-designed strategic plan along with specific objectives for the future of the company</li> <li><span>Analysis of Business Environment and SWOT analysis:Very thorough analysis of the business micro and macro environment including SLEPT analysis and Porter's 5 forces. All these were very good interpreted into the SWOT analysis of the company.</li><li>Use of marketing concepts Fantastic analysis of the target audiences (consumers’ audit) and a very thorough marketing mix to support the suggested strategy and business objectives. Also, very good use of pull and push strategies.</span> </ul> <li>Application and validity of accounting and finance analysis:Very precise and quite valid financial plan and a four-year sales forecast create a clear picture of the financial aspects of the company. They have not used best and worst case scenarios. Very well formed profit and loss statement, while for the break-even point analysis there was a debate during the presentation about the existence of variable costs. Nevertheless, the use of two methods of capital investment (payback method and net present value) is a plus. </li> <li>Overall quality of report:The overall structure is very good, but the disadvantage is the lack of an introduction and a conclusion. Also, it is written in good and relatively concise English. </li> </ul> <ul><p> <b>Report’s marks</b></p> <li>5% Introduction and Conclusion 20</li> <li>15% Business Strategy 80</li> <li>15% Analysis of Business Environment 85</li> <li>10% SWOT analysis 85</li> <li>20% Marketing 90</li> <li>15% Accounting 75</li> <li>15% Finance 70</li> <li>5% Quality of report (professional) 75</li> </ul> <ul><p> <b>Presentation’s marks</b></p> <li>5% Introduction 80</li> <li>10% Evidence of strategic planning 75</li> <li>15% Application of business environment analysis 80</li> <li>15% Application of SWOT and marketing 85</li> <li>15% Application of Accounting and Finance Concepts 80</li> <li>15% Reflection on working as a team, team performance and suggestions for improvement 40</li> <li>10% Quality of presentation delivery 50</li> <li>10% Quality of slides 85</li> <li>5% Conclusion and recommendation 60</li> </ul> ",
    "files": {
        "file": [
            "images/mc_a2/cproject_contents.pdf",
            "images/mc_a2/mc_presentation.pdf"
        ]
    },
    "media": {}
}