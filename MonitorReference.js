export const MonitorReference = () => {
    let [id, url, person, title, quote, image] = getData();
    return (`
        <li id="reference">
          <div class="mitem">
            <h2>References</h2>
            <h3 title=${id}">
                <h4><a target="_blank" href=${url}>${person}</a></h4></h3>
            <h4><p> ${title}</p></h4>
            <p> ${quote}</p>
            <img src=${image} />
        </div>
        <div style="background: url(${image}) 50% center / 100% no-repeat;">&nbsp;</div>
        </li>
        `)
}


const getData = () => {
    return [
        'ST15',
        'https://facebook.com/ioannis.pandithas?fref=ts',
        'Pandidas, John Phd',
        'PhD, University of Liverpool, UK',
        'Excellent effort. The subject was covered in well placed examples in a prefessional style with a very good report. The examples are concise and to the point.',
        'images/tech_logos/linkedin_user.jpg',
    ]
}



