import Monitor from "/component/monitor/monitor.mjs";
import Layout from "/core/layout.mjs";



function html(){

    return `

                    ${css()}
`

}


function css(){
    return `
    <style>

</style>
    `
}



function install(id){
    document.getElementById(id).innerHTML = html();
    // listen();
}




export default {
    install,
    html,
}