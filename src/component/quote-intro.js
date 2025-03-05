import {html, css, LitElement} from 'lit';
import {theme} from "../theme";

customElements.define('quote-intro',

    class QuoteIntro extends LitElement {

        static properties = {
            active: {type: Number}
        };

        constructor() {
            super();
            this.active = 1
        }


        action(idx) {
            this.active = idx;
            // console.log("--- ", idx);
        }


        render = () => html`
            <article>

                <section>
                    <h2>Welcome</h2>
                    <p class="mi-txt-mid">
                        <span>My name is Manos.</span>
                        For the last two and a half decades I have been occupied by several organizations in diverse
                        business perspectives that each played their parts in shaping my profile.
                        The last and a half decade I have been explicitly working on my competencies building web
                        applications and environments. Major business models that I have delved and acquired experience
                        include Energy, Hospitality, Warehouse, eShopping, Conferences, Banking.
                        The other half of my occupational experience comes by working for a top-competent, world-wide
                        extended pharmaceutical company, SanofiAventis, that saturated my profile with highly strict and
                        demanding business procedures that helped me transform my overall occupational qualities.
                        Educational research offered me "first class Honours" Bachelor Degree from Greenwich university
                        in 'Internet Engineering and Web Management.
                        Additionally I maintain insights and diplomas / certificates in fields like 'Web and Desktop
                        Applications Development','Business Management and Marketing', 'Graphics Design' after attending
                        and training for several annual classes in the fields.
                    </p>
                </section>

                <section>
                    <h3>What is the site about</h3>
                    <p class="mi-txt-mid">
                        On site you may resume both of my occupational and educational timelines, how the two were drawn
                        and evolve in parellel during previous years. Context may be indexed in detail, either as
                        bulleted descriptions or guided by an interactive timeline. Along with the descriptive context
                        you may also have an overview on some of the most critical projects that I have encountered.
                        Therefore you may find available work-samples while working as a freelance developer on the Web,
                        as officer occupied by pharmaceutical company, and last but not least as student at university.
                        For the latter you may additionally index the scores attained, instructors’ comments, while also
                        documentation and video reference whenever appropriate. Finally on the last page there are
                        available links to the officials sites for each cited organization. You are suggested to request
                        for reference where available. If you wish you may contact me using any of my personal accounts
                        provided for some of the most popular social networks. Please suggest the context if you feel
                        like.
                    </p>
                </section>

            </article>
        `;


        static styles = [
            theme,
            css`
                article {
                    padding: 10px 25px;
                    // font-size: 1.2em;
                    font-family: var(--font);

                    section {
                        text-align: left;
                        //margin: 50px 0;
                    }
                }
            `]
    }
);
