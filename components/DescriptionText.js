import {dq} from "./ally.js";

const CSSID = '#page-projects #project-description';
let DATA = '';

export default (pid) => run(pid);


const run = (pid) => {
    dq(CSSID).innerHTML = view(pid)
}


const view = (pid) => {

    DATA = makeData(pid);

    return `
        <section class="description-text">
            <p >${DATA.text}</p>
        </section>
    `;
}

const makeData = (pid = 'WB02') => {
    let {items} = JSON.parse(sessionStorage.MIDATA)
    let item = items.item.find(o => o.id === pid);


    return {
        text: item.description,
    }
};
//
// const DATA =
//     {
//         text: `
// Contracted as a Frontend Developer part of multinational, scrum maintained team of web developers.
// The objective was for the team to build a concurrent web solution for the German Commerzbank that would be used internally by company's employees, namely Infobroker. The intranet would assist bank's employees to monitor, evaluate and gain insight from data visualizations.
// My role was to adhere to design blueprints dictated by company's UI/UX experts and deliver interactive pages and widgets. Enabling daily web meetings with with foreign colleagues and data maintainers, we would need to resolve the required data and the paths to collect before delivering the solutions.
// Data would need to get collected with the use of a graphical interface that would ensure data security all the way through. By the time the project reached to a certain level of completeness, my job was moved to provide ticketing support services.
//
// Key Responsibilities:
// Front-end developer with OOP PHP Zend Framework & Javascript / Jquery (backend was a remote service)
// Follow explicit instructions to consume required data from remote web services and blueprint layouts to deliver UIs
// Provide ticketing solutions for acknowledged bugs
// `,
//     }

run();


