// JavaScript Document

$(document).ready(
    function () {
        animation = '';
        animation_running = false;
        gmode = 'global';

        localStorage.clear();

        ajax_retrieve_skill_data();

        start_projector_display();


        // LISTENER FOR THE 'PAUSE' BUTTON
        var pause_btn = $('#skills_preview > div > em');
        $(pause_btn).click(handle_pause_action);


        // LISTENER FOR THE SKILLS - BANNER
        $('#skills_preview').mouseenter(
            function () {
                var pause_btn = $('#skills_preview > div > em');
                if ($(pause_btn).hasClass('paused')) {
                    return;
                }
                $(pause_btn).css('display', 'block');
            }
        )

        $('#skills_preview').mouseleave(
            function () {
                var pause_btn = $('#skills_preview > div > em');
                if ($(pause_btn).hasClass('paused')) {
                    return;
                }
                $(pause_btn).css('display', 'none');
            }
        )

        // LISTENERS FOR THE BANNER - SHOWCASE - ITEMS
        $('#skills_preview').delegate(
            'ul>li>div', 'click', function () {
                $(this).click(handle_banner_input(this.parentNode.id));
            }
        )
    }
);


/**
 *
 */
function start_projector_display() {
    var icounter = 0;
    var intro_anime = self.setInterval(
        function () {
            var child1 = $('#welcome h3:nth-child(1)')
            var child2 = $(child1).next();
            var child3 = $(child2).next();
            var child4 = $(child3).next();

            if (icounter > 50) {
                window.clearTimeout(intro_anime)
                intro_anime = null;
                icounter = null;
                $('#skill_fields > em').css('right', '-24%');

            }

            if (icounter >= 1) {
                $('#skills_preview').animate({'left': 0});
            }
            if (icounter == 5) {
                $('#skill_fields b').animate({'top': 0, 'opacity': 1});
            }
            if (icounter == 10) {
                $(child1).animate({'opacity': 1})
                // navigate_resume_page('introduction_cv');
            }
            if (icounter == 18) {
                $(child1).animate({'opacity': 0})
            }
            if (icounter == 20) {
                $(child2).animate({'opacity': 1})
            }
            if (icounter == 28) {
                $(child2).animate({'opacity': 0})
            }
            if (icounter == 30) {
                $(child3).animate({'opacity': 1})
            }
            if (icounter == 38) {
                $(child3).animate({'opacity': 0})
            }
            if (icounter == 40) {
                $(child4).animate({'opacity': 1})
            }
            if (icounter == 48) {
                $(child4).animate({'opacity': 0})
            }
            if (icounter == 50) {
                $('#welcome').remove();
            }
            icounter++;
        }, 120
    )
}


/**
 *
 */
function handle_pause_action() {
    var pause_btn = $('#skills_preview > div > em');
    if (pause_btn.attr('class')) {
        $(pause_btn).removeClass();
        animation_running = true;
        animate_skills(gmode);
    } else {
        $(pause_btn).addClass('paused');
        animation_running = false;
        animate_skills('off')
    }
}


/**
 *
 */
function ajax_retrieve_skill_data() {
    var oXML = __GET_CACHED_DATA('sXML', true);

    if (oXML) {
        __INITIALIZE_PAGE_DATA(oXML);
        proccess_ajax_data(gmode);
        return;
    }

    $.ajax(
        {
            url: 'items.xml',
            dataType: 'xml',
            success: function (data) {

                __SET_CACHE_DATA('sXML', data, true);

                __INITIALIZE_PAGE_DATA(data);
                proccess_ajax_data(gmode);
            },
            error: function () {
                console.log('Failed 2 Tech-Logos file ...');
            }
        }
    );
}


/**
 *
 * @param field
 */
function proccess_ajax_data(field) {

    var p = {}, c = {};
    var t = [];


    var prun = false, crun = false, trun = false;
    var procstr = '';

    if (field == 'global') {
        prun = true, crun = true, trun = true
    }

    if (field == 'project' || prun) {
        procstr = "p";
        p = __GET_PROJECT();
    }
    if (field == 'reference' || crun) {
        procstr += "c";
        c = __GET_REFERENCE();
    }
    if (field == 'tool' || trun) {
        procstr += "t";
        t = __GET_TOOLS()
    }

    convert_data_to_html(p, c, t, field, procstr);

}


/**
 *
 * @param project
 * @param comment
 * @param tools
 * @param field
 * @param proccess_string
 */
function convert_data_to_html(project, comment, tools, field, proccess_string) {

    var p = project;
    var c = comment;
    var t = tools;

    var pdiv = $('#project >div:first-child ');
    var pdivl = $('#project >div:last-child');
    var cdiv = $('#reference > div');
    var cdivl = $('#reference >div:last-child');
    var tdiv = $('#tool > div > div');
    var counter = 0;
    var data_loaded = false;
    // THE 'PCT' STRING IS A CONCATENATED STRING COMMING FROM THE PARENT FUNCTION
    // AND IS BULT TO SUMMARIZE WHAT THE FUNCTIONS THAT WILL BE EXECUTED IN THE CURRENT SCRIPT
    // EXAMPLE: 'PCT' -> PROJECT, COMMENT, TOOLS :: THIS SHOW THAT ALL FOLLOWING FUNCTIONS WILL BE RUNNING FORTH
    var pct = proccess_string;
    var pctl = pct.length;

    if (pct.indexOf('p') > -1) {
        // FIRST THING TO DO WITH THE 'PCT' (PROCCESS STRING)
        // IS TO THE REMOVE THE 'FLAG' SO THAT THE CURRENT 'IF' WILL NO WHETHER TO RUNN THE NEXT FUNCTION
        // WITHOUT MOVING TO FOLLOWING 'IF' STATEMENTS

        pdiv.children('h3').html(p.name);
        pdiv.children('h4').html(p.label);
        pdiv.children('p').html(p.data);
        pdiv.children('img').attr('src', (p.img));
        pdivl.css({'background': 'url(' + p.img + ') no-repeat', 'backgroundSize': '100%', 'backgroundPosition': '50%'})

        pct = pct.replace('p', '');
        if (pct == '' && !animation_running) {
            gmode = 'project';
            animate_skills(gmode);
            return;
        }
    }

    if (pct.indexOf('c') > -1) {
        cdiv.children('h3').html(c.name);
        cdiv.children('h3').attr('title', c.item);
        cdiv.children('h4').html(c.label);
        cdiv.children('p').html(c.data);
        cdiv.children('img').attr('src', (c.img));
        cdivl.css({'background': 'url(' + c.img + ') no-repeat', 'backgroundSize': '100%', 'backgroundPosition': '50%'})

        pct = pct.replace('c', '');
        if (pct == '' && !animation_running) {
            gmode = 'reference';
            animate_skills(gmode);
            return;
        }
    }

    if (pct.indexOf('t') > -1) {
        place_skill_images(tdiv, t, counter, field, pctl);
    }
}


/**
 * //   THE FUNCTION WILL CHECK IF THE CURRENT DIVS THAT ARE EXAMINED
 // CREATE VALID IMAGES (BY-IMAGE-NAME), AND WILL OUTPUT - IF TRUE

 * @param divs
 * @param skills
 * @param counter
 * @param field
 * @param pctl
 */
function place_skill_images(divs, skills, counter, field, pctl) {
    var node = {};
    var name = '';
    var img_loaded = false;

    node = $(divs[counter]);
    name = $(skills[counter]).selector;

    $(node).html('<h4>' + name.replace(/_/g, ' ') + '</h4><img src="images/tech_logos/' + name + '.jpg" />');

    counter++;
    if (counter < divs.length) {
        place_skill_images(divs, skills, counter, field, pctl)
    } else {
        if (animation_running) {
            return;
        }
        if (pctl > 1) {
            gmode = 'global';
            animate_skills(gmode)
        } else {
            gmode = "tool";
            animate_skills(gmode);
        }
    }
}


/**
 *
 * @param mode
 */
function animate_skills(mode) {

    if (mode == 'off') {
        window.clearTimeout(animation);
        animation = null;
        animation_running = false;
        return;
    } else {
        var frames = 10000;
        var counter = 0, max = 0, index = 0, sindex = 0;

        if (mode == 'global') {
            max = $('#skills_preview> ul> li').length;
        } else {
            if (mode == 'reference') {
                sindex += 1
            } else {
                if (mode == 'tool') {
                    sindex += 2
                } else {
                    sindex = sindex
                }
            }
            max = 1;
        }
    }
    index = sindex;

    animation = self.setInterval
    (
        function () {
            animation_running = true;
            if (mode == 'off') {
                window.clearTimeout(animation);
                animation_running = false;
                animation = null;
                return;
            } else {
                if (counter >= max) {
                    proccess_ajax_data(mode);
                    index = sindex;
                    counter = 0
                }

                var anime_child = $('#skills_preview> ul> li:nth-child(' + (index + 1) + ')');

                if ($('.slide_animated')) {

                    $('.slide_animated').find('img').css({'right': '-100%'})
                    $('.slide_animated').children('div:last-child').css({'bottom': '-100%'})
                    $('.slide_animated').removeAttr('class').css({'left': '-150%'})
                }
                $(anime_child).attr('class', 'slide_animated').animate(
                    {'left': 0}, function () {
                        $(anime_child).find('img').animate({'right': 0});
                        $(anime_child).children('div:last-child').animate({'bottom': 0});
                    }
                );
                counter++;
                index = counter;
            }
        }, frames
    );
}


/**
 *
 * @param caller
 */
function handle_banner_input(caller, target) {


    target = target ? target : '';

    if (caller == 'project') {
        if (!target) {
            target = $('#' + caller + ' h3').text();
        }
        animate_page('projects')
        build_selected_item_content(target, 'default')
        return
    }

    if (caller == 'reference') {
        target = $('#' + caller + ' h3').attr('title');
        animate_page('projects')
        build_selected_item_content(target, 'studies')
        return
    }

    if (caller == 'tool') {
        if (!target) {
            target = $(window.event.target).prev().text().replace(/ /g, '_');
        }
        $('#context').animate({'left': 0});
        animate_page('projects')
        nav_bar_designer(target, 'keyword')
        return
    }

    console.log('FUNCTION HANDLE_BANNER_INPUT RUNS WITH A DEFAULT, PLEASE CHECK !')
}


/**
 * // ENLIST  THE IN-MENU LIST OPTIONS FOR THE 'PROJECT' PAGE


 /*
 ---------------------------  REFACTOR FUNCTIONS  2 --------------------------------------
 */


function EVAL_EXTERNAL_URL_COMMAND() {
    var search = window.location.search;
    if (search) {
        search = search.replace('?', '');
        var entries = search.split('=');
        var type = entries[0];
        var target = entries[1];

        if (type == 'project') {
            handle_banner_input('project', target);
            return true;
        }
        if (type == 'tool') {
            handle_banner_input('tool', target);
            return true;
        }
    }
    return false;
}

/*
 ---------------------------  REFACTOR  FUNCTIONS  1 --------------------------------------
 */


/**
 *
 * @returns {{img: (string|string|jQuery), data, name: *, label: jQuery}|Document|any|null}
 * @private
 */
function __GET_PROJECT() {
    var item = {};
    var cacheIdx = '';

    if (temp_projects.length == 0) {
        temp_projects = projects.slice();
    }
    item = temp_projects.pop();
    cacheIdx = _toIndex('p_' + item.id);

    if (__GET_CACHED_DATA(cacheIdx, false)) {
        return __GET_CACHED_DATA(cacheIdx, false);
    }

    // DESIGNATE THE 'PROJECT' OBJECT FOR 1ST-PAGE SHOWCASE
    var p = {
        name: item.name,
        label: item.cat,
        img: item.img,
        data: item.desc
    };

    __SET_CACHE_DATA(cacheIdx, p, false);

    return p;
}


/**
 *
 * @returns {{img: string, item: *, data: *, name: string, label: string}|Document|any|null}
 * @private
 */
function __GET_REFERENCE() {
    var o = {};
    var cacheIdx = '', project = '';

    if (temp_references.length == 0) {
        temp_references = references.slice();
    }
    o = temp_references.pop();

    // 'project' variable holds the name of the project that was referenced.
    // BUT:: it is not used at the moment
    project = _toIndex('c_' + o[2]);
    cacheIdx = _toIndex('c_' + o[3]);

    if (__GET_CACHED_DATA(cacheIdx, false)) {
        return __GET_CACHED_DATA(cacheIdx, false);
    }

    var name, data, ckey;

    name = o[1];
    data = o[0];

    // THIS WILL BE USED TO REMOVE DUBLICATE-ENTRIES FROM THE ARRAY BUILD
    // ckey = name.substring(name.indexOf('">') + 2, name.indexOf(','));

    var c = {
        name: name.substring(0, name.indexOf('</h4>') + 5),
        label: name.substring(name.indexOf('<p>'), name.indexOf('</p>') + 4),
        img: (name.match('linkedin') > -1) ? 'images/tech_logos/linkedin_user.jpg' : 'images/tech_logos/facebook_user.jpg',
        data: data,
        item: o[3]
    }
    // THROUGH (POP) THE ITEM FROM THE ARRAY, SO THAT IT WILL NOT BE RETRIEVED AGAIN LATER
    __SET_CACHE_DATA(cacheIdx, c, false);

    return c;
}


/**
 *
 * @returns {[]}
 * @private
 */
function __GET_TOOLS() {
    var item = [], size;
    var t = [];


    size = $('#skills_preview #tool h4').length;
    // THE NUMBER OF IMAGES PREVIEWED ON SCREEN (THESE NEED TO POPULATE)

    for (var i = 0; i < size; i++) {
        // CREATE A RANDOM NUMBER FROM THE '.TOOLS' ARRAY BY REDUCING THE POTENTIAL VALUES
        // BY ONE EACH TIME. THIS HAPPENS IN ORDER TO AVOID DUPLICATE ENTRIES, WITH A 'POP'
        // FUNCTION, USED TO REMOVE THE USED VALUE FROM THE 'TOOLS' ARRAY
        // rnum = Math.floor((Math.random() * (tsize - rcount)));
        // t.push(temp_tools[rnum]);
        if (temp_tools.length == 0) {
            temp_tools = tech_tools.slice();
        }
        t.push(temp_tools.pop());

        // THROUGH (POP) THE ITEM FROM THE ARRAY, SO THAT IT WILL NOT BE RETRIEVED AGAIN LATER
        // temp_tools.splice(rnum, 1);
        // rcount++;
    }

    return t;
}


/**
 *
 * @param data
 * @private
 */
function __INITIALIZE_PAGE_DATA(data) {
    // var projs = [], tuts = [], tools = [];
    var a = [];
    var proj = {};

    // // FIND THE NUMBER OF 'ITEMS' IN THE 'SKILLS.XML'
    // psize = $(data).find('item').length - 1;
    // rnum = Math.floor((Math.random() * psize) + 1);
    // STORE A COMPLETE 'ITEM' THAT REFLECTS ALL DATA RELATED TO A 'PROJECT'

    projects = _suffleArray(__GET_ALL_PROJECTS(data));
    temp_projects = projects.slice();

    references = _suffleArray(__GET_ALL_REFERENCES(data));
    temp_references = references.slice();

    // STORE - UNIQUELLY -  ALL SKILLS THAT WERE FOUND IN THE DOCUMENT. THIS IS AN ARRAY
    tech_tools = _suffleArray(__GET_ALL_TOOLS(data));
    temp_tools = tech_tools.slice();

    _BUILD_SEARCH_LISTS(projects, tech_tools);

}


/**
 *
 * @param projects
 * @param tools
 * @private
 */
function _BUILD_SEARCH_LISTS(projects, tools) {
    var htmlProjects = [],
        htmlTools = [];
    // debugger
    projects.forEach(function (project) {
        htmlProjects.push("<option value='" + project.name + "'>" + project.name + "</option>")
    });
    tools.forEach(function (tool) {
        htmlTools.push("<option value='" + tool + "'>" + tool + "</option>")
    });

    document.querySelector(('#project_list')).innerHTML = htmlProjects;
    document.querySelector(('#skill_list')).innerHTML = htmlTools;
}

/**
 *
 * @param data
 * @returns {[]|any}
 * @private
 */
function __GET_ALL_TOOLS(data) {
    var index = 'all_tools';
    var a = [];
    var cache = __GET_CACHED_DATA(index, false);

    if (cache) {
        return JSON.parse(cache);
    }

    // var tsize = 0;
    var key = '';
    // FIND THE NUMBER UNIQUE 'SKILLS' IN THE 'SKILLS.XML'
    $(data).find('tool').each(
        function () {
            key = $(this).text();

            if (key == '-') {
                return;
            }
            insert = true;
            // CHECK IF VALUE IS ALREADY STORED IN THE ARRAY
            for (var i = 0, j = a.length; i < j; i++) {
                if (a[i] == key) {
                    insert = false;
                    break;
                }
            }
            if (insert) {
                a.push(key);
                // tsize++;
            }
        }
    );

    __SET_CACHE_DATA(index, JSON.stringify(a), false);

    return a;
}


/**
 *
 * @param data
 * @returns {[]}
 * @private
 */
function __GET_ALL_PROJECTS(data) {
    var index = 'all_projects';
    var a = [], aSerialized = [];
    var cache = __GET_CACHED_DATA(index, false);

    if (cache) {
        var i = 0;
        aSerialized = JSON.parse(cache);

        while (i < aSerialized.length) {
            a.push(JSON.parse(aSerialized[i]));
            i++;
        }
        return a;
    }

    var proj = {};

    $(data).find('item').each(
        function () {
            proj = {
                id: $(this).children('id').text(),
                name: $(this).children('title').text(),
                cat: $(this).children('category').text(),
                desc: ".." + $(this).children('description').text().substring($(this).children('description').text().indexOf('<span>') + 6, $(this).children('description').text().indexOf('</span>')) + "..",
                img: $(this).children('screenshots').children('shot:first-child').text()
            };

            a.push(proj);
            aSerialized.push(JSON.stringify(proj));
        }
    );

    __SET_CACHE_DATA(index, JSON.stringify(aSerialized), false);

    return a;
}


/**
 *
 * @param data
 * @returns {*|[]}
 * @private
 */
function __GET_ALL_REFERENCES(data) {
    var index = 'all_references';
    var a = [], aSerialized = [], aTemp = [];
    var cache = __GET_CACHED_DATA(index, false);

    if (cache) {
        var i = 0;

        aSerialized = JSON.parse(__GET_CACHED_DATA(index, false));

        return aSerialized;
    }

    // FIND THE NUMBER OF VALID 'COMMENTS' IN THE 'SKILLS.XML'
    $(data).find('item > comment').each(
        function () {
            if ($(this).text() != '-') {
                aTemp = [
                    $(this).text().substring($(this).text().indexOf('<span>') + 6, $(this).text().indexOf('</span>')),
                    $(this).prev().text(),
                    $(this).parent().find('title').text(),
                    $(this).parent().find('id').text(),
                ];
                a.push(aTemp);
                aSerialized.push(JSON.stringify(aTemp));
            }
        }
    );

    __SET_CACHE_DATA(index, JSON.stringify(a), false);

    return a;
}


/**
 *
 * @param index
 * @param data
 * @param isXML
 * @private
 */
function __SET_CACHE_DATA(index, data, isXML) {

    if (isXML) {
        var oSerializer = new XMLSerializer();
        var sXML = oSerializer.serializeToString(data);
        localStorage.setItem(index, sXML);
    } else {
        localStorage.setItem(index, JSON.stringify(data));
    }

}


/**
 *
 * @param index
 * @param isXML
 * @returns {null|Document|any}
 * @private
 */
function __GET_CACHED_DATA(index, isXML) {
    var data = localStorage.getItem(index);

    if (data && isXML) {
        var oParser = new DOMParser();
        return oParser.parseFromString(data, 'text/xml');
    }
    if (data && !isXML) {
        return JSON.parse(data);
    }

    return null;
}

/*
 -------------------- HELPERS | REFACTOR
 */


/**
 *
 * @param str
 * @returns {string}
 * @private
 */
function _toIndex(str) {
    return str.toLocaleLowerCase().replace(/ /g, '_');
}


/**
 *
 * @param a
 * @returns {[]}
 * @private
 */
function _suffleArray(a) {
    var b = [];
    var x = null;

    while (a.length > 0) {
        x = a.splice(Math.floor((Math.random() * a.length)), 1);
        b.push(x[0]);
    }
    return b;
}