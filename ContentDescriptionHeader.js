export const ContentDescriptionHeader = () => {

    let [title, category, tools] = _getData();
    return (`
            <div id="ititle" style="display: block;">
            <h3><span>${title}</span></h3>
            </div>
            <p id="icategory" style="display: block;">
            Category: <a href="#" class="cat_key"><span>${category}</span></a>
            </p>
            <h4 id="itools" style="display: block;">
            Keywords:  <span>${getTools(tools)}</span>
        </h4>
    `);
}


const getTools = (tools) => {
    return (
        tools.map(tool => `<a class="keys" href="#">${tool} </a>`).join('')
    )
};


const _getData = () => {
    return [
        'Rateparity',
        'Design and Development',
        ["web_application ", "javascript ", "reactjs ", "es6 ", "css3 ", "scss ", "requirements ", "nodejs ", "webpack ", "git ", "rest_api ",]
    ];

}

