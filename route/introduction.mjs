import PageMenuIntro from "../component/page-menu-intro.mjs";
import QuoteAuthor from "../component/quote-author.mjs";
import QuotesIntro from "../component/quotes-intro.mjs";
import Monitor from "../component/monitor.mjs";
import Timeline from "../component/timeline.mjs";
import TimelineInteractive from "../component/timeline-interactive.mjs";
import QuoteWelcome from "../component/quote-welcome.mjs";
import QuoteSiteinfo from "../component/quote-siteinfo.mjs";

function html() {

    return `
              <div id="mi-page-introduction-menu"></div>
            
            <br /><br /><br />
            <div id="mi-monitor"></div>

            <div id="mi-quote-author"></div>

            <div id="interactive_intro" ></div>

<!--                <div id="mi-timeline"></div>-->

<!--                <div id="mi-timeline-interactive"></div>-->

<!--                <div id="mi-quotes"></div>-->
            
            ${css()}
    `

}

function css() {

    return `
    <style>
    
            
        #mi-monitor {
            position: relative;
            margin: 25px 15px;
            height: 35%;
            width: 75%;
        }
    
         #interactive_intro {
            position: absolute;
            bottom: 0;
            left: 0;
            float: left;
            overflow: hidden;
            margin: 1%;
            border-radius: 30px;
            border: 4px solid #ddd;
            width: 97%;
            height: 50%;
        }

        #interactive_intro > div {
            position: absolute;
            top: 2%;
            float: left;
            overflow: hidden;
            text-align: left;
            font-size: 0.9em;
            font-family: calibri;
            color: #777;
            margin: 0 0 0 1%;
            border-radius: 17px;
            width: 98%;
            height: 97%;
        }
</style>
    `

}


function load(id="mi-page-introduction") {

    document.getElementById(id).innerHTML = html();

    PageMenuIntro.install("mi-page-introduction-menu")
    QuoteAuthor.install("mi-quote-author")
    QuotesIntro.install('interactive_intro')
    Monitor.install("mi-monitor")

    // listen();
}

export default {
    load
}