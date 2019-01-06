const PAGES = ['certificates', 'projects', 'about'];


const _html = () => (
    `<ul id="site_menu">${
        PAGES.map(
            page =>
                `<li><a title=${page}>${page}</a></li>`
        ).join()
        }
</ul>`
);


const _css = () => `<style>    
#site_menu li {
    float: right;
    margin-left: 1px;
    border: solid 1px #ccc;
    background-color: slategrey;
    position: relative;
    width: 30%;
    height: 84%;
    padding-top: 2%;
    padding-bottom: 1%;
    text-align: center;
}

#site_menu li a {
    color: white;
    border-radius: 6px;
    font-size: 1em;
    padding: 2% 22%;
}

#site_menu li a:hover {cursor: pointer;}

#site_menu li a.selected {
    cursor: pointer;
    color: orange;
    font-weight: bold;
}
</style>
`;


export default {
    selector: '#navigation',
    content: _html().concat(_css())
}

