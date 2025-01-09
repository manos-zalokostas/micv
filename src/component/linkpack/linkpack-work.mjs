
function html() {
    return `
<ul id="work_links">
<li>Employers</li>
<li>
<a target="_blank" class='organization' href="https://www.sanofi.gr/l/gr/el/index.jsp">
<span>Sanofi Aventis</span>
<!--<img  src="images/organizations/sanofiaventis_thumb.jpg"/> Pharmaceutical Company-->
</a>
</li>

<!--<li>References</a></li>-->
<li>
<a target="_blank" class='person' href="https://fr.linkedin.com/pub/markos-gerassopoulos/42/b92/b07">M.Gerassopoulos | GM
Director</a></li>
<li>
<a target="_blank" class='person' href="https://gr.linkedin.com/pub/aspa-pispa/13/a3b/b67">A.Pispa |
HR Director</a>
</li>
<li>
<a target="_blank" class='person' href="https://gr.linkedin.com/pub/andreas-katsis/17/1b2/3ba">A.Katsis
| Finance Director</a>
</li>
</ul>
            ${css()}
    `
}


function css() {
    return `
    <style>
</style>
    `
}


function listen() {

}

function install(id) {
    document.getElementById(id).innerHTML = html();
    listen();
}


export default {
    install,
    listen,
    html,
}