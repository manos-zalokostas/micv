import Monitor from "../component/monitor.mjs";
import PageContentMenu from "../component/page-content-menu.mjs";
import BadgeCategory from "../component/badge-category.mjs";
import BadgeTools from "../component/badge-tools.mjs";
import Extra from "../component/extra.mjs";
import TabletMenu from "../component/tablet-menu.mjs";
import Slider from "../component/slider.mjs";



function html() {

    return `

            <div id="mi-page-content-menu"></div>

            <div id="mi-description-wrapper">

                <div id="mi-description-tablet" > TABLET</div>

                <div id="mi-description-content">

                <div id="ititle" style="display: block;">
                    <h3>
                        <span>Pearson E-learning</span>
                    </h3>
                </div>

                    <div id="mi-badge-category"></div>

                    <div id="mi-badge-tools"></div>

                    <div id="ibody">

                        <div id="idescription" style="display: block; left: 0px;">
                        
                            <p>
                                E-learning system delivered for Pearson USA, totally consisting by Javascript-Jquery and JSON folded data.
                                During a short-time period that I have been occupied for CSSEducation company I have delivered a demo of the
                                Javascript engine. Its operation is described below:
                            </p>
                        
                            <ul>
                                <li>Design a Json string-patterned API that plain users would need to issue for giving instructions to
                                    Javascript engine.
                                </li>
                                <li>Following the pattern-instructions, Javascript engine distincts and allocates page content as:</li>
                                <li> • Interactive Page Title and Page Description on top of the page,</li>
                                <li> • Interactive Page Content Description on the left of the page,</li>
                                <li> • Main Interactive Content on the right,</li>
                                <li> Main Content issues most of interactivity addressed as:</li>
                                <li> • Aligns multiple interactive paragraph examples along with their functionality-initializing handlers</li>
                                <li> • Paragraph content-parts come preformated with styles, according to user instructions issued by the API
                                </li>
                                <li> • Paragraph parts deliver text animating effects</li>
                                <li> • Paragraph handlers mostly issue video/audio emerging events</li>
                                <li> • Audio/Video events are synchronized with prioritized text animating effects</li>
                                <li> • Handler events bring paragraphs to the original preformated state and immediately address the anime</li>
                                <li> • A variety of text animating effects are addressed, regarded to API issued instructions</li>
                            </ul>
                        
                        </div>

                        <div id="mi-content-slider"></div>

                    </div>

                    <div id="mi-content-extra"></div>

                    

            ${css()}
    `

}


function css() {

    return `
    <style>
    
        #mi-page-content-menu {
            position: absolute;
            z-index: 10;
            left:0;
            top:0;
            width: 25%;
            height: 75px
        }
    
    
        #mi-description-wrapper {
            position: absolute;
            z-index: 5;
            top:0;
            left: 0;
            height: 100%;
            width: 200%;
            /*background: silver;*/
        }
        
        #mi-description-wrapper > div {
             position: relative;
             float: left;
             width: 50%;
             height: 100%;
        }
            
         #ititle {
            float: left;
            text-align: left;
            color: orange;
            font-size: 2.5em;
            font-family: verdana;
            width: 100%;
            padding: 0;
            margin: 0;
            margin-top: 5%;
        }

        #ititle h3 {
            display: inline;
            font-family: verdana;
            padding: 0;
            width: 70%;
            float: left;
            margin: 0;
            margin-bottom: 1%;
            margin-left: 2%;
        }

        #ititle hr {
            padding-bottom: 0;
            margin-bottom: 0;
        }
        
        
        #ibody {
            float: left;
            font-family: Verdana, Geneva, sans-serif;
            font-size: 0.9em;
            text-align: left;
            width: 70%;
            height: 70%;
            overflow: hidden;
            margin-top: 4%;
        }

        #idescription {
            color: rgb(50, 71, 90);
            font-family: calibri; 
            height: 65%;
            padding: 2%;
        }

        #idescription span {
            padding: 0;
            margin: 0;
        }
        
</style>
    `

}


function load(id="mi-page-content", entry) {

    entry = SAM;

    document.getElementById(id).innerHTML = html();

    TabletMenu.install('mi-description-tablet')
    PageContentMenu.install('mi-page-content-menu')

    BadgeCategory.install('mi-badge-category', entry)
    BadgeTools.install('mi-badge-tools', entry)

    Slider.install('mi-content-slider', entry)

    Extra.install('mi-content-extra')
    // listen();
}


export default {
    load
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