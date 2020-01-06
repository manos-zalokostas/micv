export const test = () => {
    let data = getData();
    return (
        `<div id="tool" >
            <div class="mitem">
                <h2>Skills</h2>
                    ${_makeSkills(data)}
            </div>
        </div>`
    );
}

const _makeSkills = (a) => {
    a.map(str => `div class="mgroupi"><h4>${str}</h4><img src="images/tech_logos/${str}.jpg" /></div>`
    )
}

const getData = () => {
    return [
        'apache',
        'seo',
        'analysis',
        'mvc',
        'xml',
        'accounting',
        'teamwork',
        'ajax'
    ]
}