export const ContentOptions = () => {

    let data = getData(),
        type = 'WEB';

    return (`
         <h5>${type}</h5>
         <ul id="WEB" class="list">
            ${data.map((pack, i) => `
                <li class="mgroupi" style="left: 0px;">${pack[0]}
                    <ul class="sublist">
                    ${makeExtra((pack[1]))}
                    </ul>
                </li>
            `).join('')}
        </ul>
    `);
}


const makeExtra = (data) => {
    return (
        data && data.map(value => `<li style="position: relative; padding-left: 5%;">${value}</li>`).join('') || ''
    )
};


const getData = () => {
    return [
        ["Application Development",
            [
                "Schedule Handler",
                "Commerzbank Infobroker",
                "Noblelinx CRM",
                "Ecep Technologies Inventory",
                "Cosmores Booking Engine",
                "Rateparity",
            ]
        ],
        ["Site Development"],
        ["Javascript Made E-learning"],
        ["Employee Management System"],
        ["Mobile Applications"]
    ]
};