export default {
    selector: '#showcase',
    content: `
        <div id="menu_tabs">
            <ul>
                <li><a href="#" title="web">WEB</a></li>
                <li><a href="#" title="studies">STUDIES</a></li>
                <li><a href="#" title="work">WORK</a></li>
            </ul>
        </div>
        <div id="context">
            <div id="list" class='monitor'></div>
            <div id="description">
                <div id="ititle"><h3><span></span></h3>
                </div>
                <p id="icategory">Category: <a href="#" class="cat_key"><span></span></a></p>
                <h4 id="itools">Keywords: <span></span></h4>
                <div id="ibody">
                    <div id="idescription"><span></span></div>
                    <div id="iscreenshots"><span></span></div>
                </div>
                <div id="iextra">
                    <div id="ilink">
                        <strong>Link</strong>
                        <span></span>
                    </div>
                    <div id="icomplements">
                        <strong>Complements</strong>
                        <div id="itutor"><span></span></div>
                        <div id="iscore"><span></span></div>
                        <div id="icomment"><span></span></div>
                    </div>
                    <div id="imedia">
                        <strong>Media</strong>
                        <span></span>
                    </div>
                    <div id="ifiles">
                        <strong>Files</strong>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
`
}