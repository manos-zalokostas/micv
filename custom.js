// JavaScript Document

$(document).ready(
    function()
    {
        animation = '';
        animation_running = false;
        gmode = 'global';

        var temp_projects = [];
        var temp_references = [];
        var temp_tools = [];

        var projects = [], references = [], tech_tools = [];

        ajax_retrieve_skill_data();

        // PRELOAD WELCOME - TEXT - ANIMATION
        var icounter = 0;
        var intro_anime = self.setInterval(
            function()
            {
                var child1 = $('#welcome h3:nth-child(1)')
                var child2 = $(child1).next();
                var child3 = $(child2).next();
                var child4 = $(child3).next();

                if(icounter > 50)
                {
                    window.clearTimeout(intro_anime)
                    intro_anime = null;
                    icounter = null;
                    $('#skill_fields > em').css('right', '-24%');

                }

                if(icounter >= 1)
                {
                    $('#skills_preview').animate({'left': 0});
                }
                if(icounter == 5)
                {
                    $('#skill_fields b').animate({'top': 0, 'opacity': 1});
                }
                if(icounter == 10)
                {
                    $(child1).animate({'opacity': 1})
                    navigate_resume_page('introduction_cv');
                }
                if(icounter == 18)
                {
                    $(child1).animate({'opacity': 0})
                }
                if(icounter == 20)
                {
                    $(child2).animate({'opacity': 1})
                }
                if(icounter == 28)
                {
                    $(child2).animate({'opacity': 0})
                }
                if(icounter == 30)
                {
                    $(child3).animate({'opacity': 1})
                }
                if(icounter == 38)
                {
                    $(child3).animate({'opacity': 0})
                }
                if(icounter == 40)
                {
                    $(child4).animate({'opacity': 1})
                }
                if(icounter == 48)
                {
                    $(child4).animate({'opacity': 0})
                }
                if(icounter == 50)
                {
                    $('#welcome').remove();
                }
                icounter++;
            }, 180
        )

        // LISTENER FOR THE PAGES
        $("#site_menu a").click(
            function()
            {
                var current_page = $(this).context.innerHTML;
                animate_page(current_page)
            }
        );

        // LISTENERS FOR THE BANNER BUTTONS
        $("#skill_fields b").each(
            function()
            {
                $(this).click(
                    function()
                    {
                        var pause_btn = $('#skills_preview > div > em');
                        if($(pause_btn).hasClass('paused'))
                        {
                            handle_pause_action();
                        }
                        animate_skills('off');
                        configure_banner_display($(this).attr('title'));
                    }
                )
            }
        )

        // LISTENER FOR THE 'PAUSE' BUTTON
        var pause_btn = $('#skills_preview > div > em');
        $(pause_btn).click(handle_pause_action);

        function handle_pause_action()
        {
            var pause_btn = $('#skills_preview > div > em');
            if(pause_btn.attr('class'))
            {
                $(pause_btn).removeClass();
                animation_running = true;
                animate_skills(gmode);
            }
            else
            {
                $(pause_btn).addClass('paused');
                animation_running = false;
                animate_skills('off')
            }
        }

        // LISTENER FOR THE SKILLS - BANNER
        $('#skills_preview').mouseenter(
            function()
            {
                var pause_btn = $('#skills_preview > div > em');
                if($(pause_btn).hasClass('paused'))
                {
                    return;
                }
                $(pause_btn).css('display', 'block');
            }
        )

        $('#skills_preview').mouseleave(
            function()
            {
                var pause_btn = $('#skills_preview > div > em');
                if($(pause_btn).hasClass('paused'))
                {
                    return;
                }
                $(pause_btn).css('display', 'none');
            }
        )

        // LISTENERS FOR THE BANNER - SHOWCASE - ITEMS
        $('#skills_preview').delegate(
            'ul>li>div', 'click', function()
            {
                $(this).click(handle_banner_input(this.parentNode.id));
            }
        )

        //LISTENERS FOR THE 'INTRODUCTION' PAGE
        $("#introduction_menu a").each(
            function()
            {
                $(this).click(
                    function()
                    {
                        var domain = this.id;
                        navigate_resume_page(domain)
                    }
                );
            }
        );

        $('#cv_comments').click(
            function()
            {
                if(document.querySelector('#cv_description i').style.display == 'none' || !(document.querySelector('#cv_description i').hasAttribute('style')))
                {
                    $('#cv_description i').css({'display': 'block'}).animate({'opacity': '1'});
                }
                else
                {
                    $('#cv_description i').animate(
                        {'opacity': '0'}, function()
                        {
                            $(this).css({'display': 'none'})
                        }
                    );

                }
            }
        )

        // LISTENERS FOR THE BUTTONS THAT ISSUE THE TIMELINE DATES  (2001, 2002 etc) TO SCALE AND CHANGE COLOR
        $("#timeline_btns a").each(
            function()
            {
                $(this).click(
                    function()
                    {
                        var domain = this.id;

                        if(domain == 'mlt')
                        {
                            color = 'gainsboro';
                        } else
                        {
                            if(domain == 'std')
                            {
                                color = 'teal';
                            } else
                            {
                                color = 'goldenrod';
                            }
                        }

                        if(document.querySelector('#timeline a.selected'))
                        {
                            $('#timeline a.selected').removeClass().css('paddingBottom', 0);
                            $('#objectives').css('opacity', 0);
                        }

                        if(document.querySelector('#timeline_btns a[style]'))
                        {
                            document.querySelector('#timeline_btns a[style]').removeAttribute('style')
                        }
                        $(this).css({'background-color': color});
                        $('#label').css('color', color)

                        $('#timeline li').each(
                            function()
                            {
                                if(this.className.match(domain))
                                {
                                    this.setAttribute('class', this.getAttribute('class').replace('_off', ''));
                                    $(this).css({'opacity': '0'});
                                    $(this).animate({'padding-left': '6px', 'opacity': '1'}, 'slow', 'swing');
                                }
                                else
                                {
                                    if(!(this.getAttribute('class').match('_off')) && this.getAttribute('class') != 'default')
                                    {
                                        this.setAttribute('class', this.getAttribute('class') + '_off');
                                        $(this).animate({'padding-left': '0px'}, 'slow', 'swing');
                                    }
                                }
                            }
                        )
                    }
                );
            }
        );

        // LISTENERS FOR THE TIMELINE DATES (2001,2005 etc) TO DELIVER (ONCLICKED) THEIR CONTENT ONSCREEN
        $("#timeline > li  a").each(
            function()
            {
                $(this).click(
                    function()
                    {

                        if(document.querySelector('#timeline > li a.selected'))
                        {
                            $('#timeline > li a.selected').removeClass('selected').removeAttr('style');
                        }

                        $(this).addClass('selected').animate({'paddingBottom': '100px'});

                        $('#objectives').css({'opacity': '0'});

                        var label = this.parentNode.querySelector('p[title="item_label"]').innerHTML;
                        var skill = this.parentNode.querySelector('p[title="item_skills"]').innerHTML;
                        document.querySelector('#label').innerHTML = label;
                        document.querySelector('#skills').innerHTML = skill;

                        $('#objectives').animate({'opacity': '1'}, 'slow', 'swing');
                    }
                )
            }
        );

        //LISTENERS FOR THE ''WORK'' PAGE
        // $("#menu_tabs li a").hover(hover_in_menu_buttons, hover_out_menu_buttons);

        //MAIN BUTTONS 'CLICK'
        $("#menu_tabs li a").click(
            function(event)
            {

                if(document.querySelector('#context').style.left != 0)
                {
                    $('#context').animate({'left': 0})
                }
                nav_bar_designer(event.target.innerHTML, 'navigation');
            }
        );

        // LIST BUTTONS 'CLICK'
        $('#list').delegate(
            '.sublist>li', 'click', function(event)
            {

                if($('li').hasClass('previewed') && !(($(this).siblings('li').hasClass('previewed'))))
                {
                    $('.previewed').parent().parent().css('background-color', 'white');
                    $('.previewed').parent().remove()
                }

                $(this).attr('class', 'previewed').parent().parent().css('background-color', '#eee');
                $(this).css({'background-color': 'white', 'color': 'orange'});

                build_selected_item_content(event.target.innerHTML, $('.list').attr('id'));
            }
        );

        // LIST BUTTONS 'MOUSEENTER'
        $('#list').delegate(
            'ul.list>li, ul.sublist>li', 'mouseenter', (function(event)
            {

                if($(this).parent().hasClass('list'))
                {
                    reveal_list_subcategories(event.target);
                }
                else
                {
                    event.stopPropagation();
                }
            })
        );

        // LIST BUTTON 'MOUSELEAVE'
        $('#list').delegate(
            'ul.list>li', 'mouseleave', (function(event)
            {

                if(!($(this).children('ul').children('li').hasClass('previewed')))
                {
                    $(this).children('ul').remove();
                }

            })
        );

        // EXTRA BUTTONS 'CLICK'
        $('#iextra > div').click(
            function(event)
            {

                preview_extras(this);
            }
        )

        // media / files / IMAGES  ELEMENTS 'CLICK'
        $('#imedia, #ifiles, #iscreenshots').delegate(
            'a', 'click', function(event)
            {

                var item_src = $(this).attr('href');
                var app = "";
                if($(this).parent().parent().attr('id').search('media') > -1)
                {
                    app = 'avi';
                } else
                {
                    if($(this).parent().parent().attr('id').search('files') > -1)
                    {
                        app = 'pdf';
                    } else
                    {
                        app = 'jpg';
                    }
                }
                $(this).attr('class', 'item_previewed', '');
                content_handler(item_src, app)
                return false;
            }
        )

        // HEAD - KEYWORDS LINKS 'CLICK'
        $('#description').delegate(
            'a.keys', 'click', function(event)
            {
                nav_bar_designer(event.target.innerHTML, 'keyword')
                $('#context').animate({'left': 0});
                return false;
            }
        )

        // HEAD - CATEGORY-KEYWORDS 'CLICK'
        $('#description').delegate(
            'a.cat_key', 'click', function(event)
            {
                nav_bar_designer(event.target.innerHTML, 'category')
                $('#context').animate({'left': 0});
                return false;
            }
        )

        // LIST CREATED BY KEYWORDS 'CLICK'
        $('#list').delegate(
            '#temp_list li', 'click', function(event)
            {

                list_item = event.target.innerHTML;
                build_selected_item_content(list_item, null)
            }
        )

    }
);

function navigate_resume_page(domain)
{

    var id = '#' + domain;
    var domain = '#' + domain + '_field';

    if(document.querySelector('#introduction_menu a.selected'))
    {
        document.querySelector('#introduction_menu a.selected').removeAttribute('class')
    }
    $(id).addClass('selected');

    if(domain == '#document_cv_field')
    {
        clean_page_data();
        animate_page('projects');

        $('#context').animate({'left': '-100%'});
        content_handler('images/cv_document/micv.pdf', 'pdf');
    }
    // GET ALL THE SIBLINGS ON THE DISPLAY (LEFT OPEN BY PREVIOUS ACITVITIES), AND RESTORE THEM TO ORIGINAL POSITION
    $(domain).siblings().each(
        function()
        {
            if(this.id.match('cv_field'))
            {
                $(this).animate(
                    {'opacity': '0', 'left': '-100%'}, 'swing', function()
                    {
                    }
                )
            }
        }
    )

    $(domain).animate({'opacity': '1', 'left': '0'});
    $(domain).find('.main_txt > p').animate(
        {'left': 0}, function()
        {
            $(domain).find('.main_txt > h2').animate({'opacity': '1'})
        }
    );
    $(domain).find('.aux_txt > p').animate(
        {'right': 0}, function()
        {
            $(domain).find('.aux_txt > h3').animate({'opacity': '1'})
        }
    );

}

//  SCRIPT THAT TRAVELS AMONG 3 MAIN PAGES
function animate_page(current_page)
{

    if($('#site_menu a.selected').attr('title') == current_page)
    {
        return;
    }
    var animation_paused = $('#skill_fields > em').hasClass('paused');

    $('#site_menu a.selected').removeAttr('class');
    $('#site_menu a[title="' + current_page + '"]').addClass('selected');

    $('#site_menu').animate({'top': '-10%'})

    switch(current_page)
    {

        case 'about' :
            $('#wrapper').animate(
                {'top': '0%'}, 'slow', 'swing', function()
                {
                    $('#site_menu').animate({'top': 0})
                }
            );
            $('#author_presentation > img').animate({'left': 0}, 'slow');
            if(!animation_running && !animation_paused)
            {
                animate_skills(gmode);
            }
            break;
        case 'projects' :
            $('#wrapper').animate({'top': '-100%'}, 'slow', 'swing');
            $('#author_presentation > img').animate(
                {'left': '-100%'}, 'slow', function()
                {
                    $('#site_menu').animate({'top': 0})
                }
            );
            animate_skills('off');
            break;
        case 'certificates' :
            $('#wrapper').animate(
                {'top': '-200%'}, 'slow', 'swing', function()
                {
                    $('#site_menu').animate({'top': 0})
                }
            );
            $('#author_presentation > img').animate({'left': '-100%'});
            animate_skills('off');
            break;
        default :
            // DEFAULT:: TOP LEVEL PAGE
            console.log('FUNCTION: ANIMATE_PAGE -> RUNS DEFAULT - PLEASE CHECK !')
            $('#wrapper').animate(
                {'top': '0%'}, 'slow', 'swing', function()
                {
                    $('#site_menu').animate({'top': 0})
                }
            )
            break;
    }
}

function ajax_retrieve_skill_data()
{
    var oXML = __GET_CACHED_DATA('sXML', true);

    if(oXML)
    {
        __INITIALIZE_PAGE_DATA(oXML);
        proccess_ajax_data(gmode);
        return;
    }

    $.ajax(
        {
            url: 'items.xml',
            dataType: 'xml',
            success: function(data)
            {

                __SET_CACHE_DATA('sXML', data, true);

                __INITIALIZE_PAGE_DATA(data);
                proccess_ajax_data(gmode);
            },
            error: function()
            {
                console.log('Failed 2 Tech-Logos file ...');
            }
        }
    );
}

function proccess_ajax_data(field)
{

    var p = {}, c = {};
    var t = [];
    // var ckey = '', cname = '', cdata = '';
    // var psize = 0, csize = 0, tsize = 0, imgsize = 0, rcount = 0;

    var prun = false, crun = false, trun = false;
    var procstr = '';

    if(field == 'global')
    {
        prun = true, crun = true, trun = true
    }

    if(field == 'project' || prun)
    {
        procstr = "p";
        p = __GET_PROJECT();
    }
    if(field == 'reference' || crun)
    {
        procstr += "c";
        c = __GET_REFERENCE();
    }
    if(field == 'tool' || trun)
    {
        procstr += "t";
        t = __GET_TOOLS()
    }
    // CHECK AT LEASE ONE IS TRUE (VALIDATE)
    // if(!prun && !crun && !trun)
    // {
    //     (console.log('Specify FIELD to proccess'));
    // }

    // // PROCCESS THE "REFERENCE" FIELD
    // if(crun)
    // {
    // }
    //
    // // PROCCESS THE "TOOLS" FIELD
    // if(trun)
    // {
    // }

    convert_data_to_html(p, c, t, field, procstr);

}

function convert_data_to_html(project, comment, tools, field, proccess_string)
{

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

    if(pct.indexOf('p') > -1)
    {
        // FIRST THING TO DO WITH THE 'PCT' (PROCCESS STRING)
        // IS TO THE REMOVE THE 'FLAG' SO THAT THE CURRENT 'IF' WILL NO WHETHER TO RUNN THE NEXT FUNCTION
        // WITHOUT MOVING TO FOLLOWING 'IF' STATEMENTS

        pdiv.children('h3').html(p.name);
        pdiv.children('h4').html(p.label);
        pdiv.children('p').html(p.data);
        pdiv.children('img').attr('src', (p.img));
        pdivl.css({'background': 'url(' + p.img + ') no-repeat', 'backgroundSize': '100%', 'backgroundPosition': '50%'})

        pct = pct.replace('p', '');
        if(pct == '' && !animation_running)
        {
            gmode = 'project';
            animate_skills(gmode);
            return;
        }
    }

    if(pct.indexOf('c') > -1)
    {
        cdiv.children('h3').html(c.name);
        cdiv.children('h3').attr('title', c.item);
        cdiv.children('h4').html(c.label);
        cdiv.children('p').html(c.data);
        cdiv.children('img').attr('src', (c.img));
        cdivl.css({'background': 'url(' + c.img + ') no-repeat', 'backgroundSize': '100%', 'backgroundPosition': '50%'})

        pct = pct.replace('c', '');
        if(pct == '' && !animation_running)
        {
            gmode = 'reference';
            animate_skills(gmode);
            return;
        }
    }

    if(pct.indexOf('t') > -1)
    {
        place_skill_images(tdiv, t, counter, field, pctl);
    }
}

//   THE FUNCTION WILL CHECK IF THE CURRENT DIVS THAT ARE EXAMINED
// CREATE VALID IMAGES (BY-IMAGE-NAME), AND WILL OUTPUT - IF TRUE
function place_skill_images(divs, skills, counter, field, pctl)
{
    var node = {};
    var name = '';
    var img_loaded = false;

    node = $(divs[counter]);
    name = $(skills[counter]).selector;

    $(node).html('<h4>' + name.replace(/_/g, ' ') + '</h4><img src="images/tech_logos/' + name + '.jpg" />');

    counter++;
    if(counter < divs.length)
    {
        place_skill_images(divs, skills, counter, field, pctl)
    }
    else
    {
        if(animation_running)
        {
            return;
        }
        if(pctl > 1)
        {
            gmode = 'global';
            animate_skills(gmode)
        }
        else
        {
            gmode = "tool";
            animate_skills(gmode);
        }
    }
}

function animate_skills(mode)
{

    if(mode == 'off')
    {
        window.clearTimeout(animation);
        animation = null;
        animation_running = false;
        return;
    }
    else
    {
        var frames = 10000;
        var counter = 0, max = 0, index = 0, sindex = 0;
        var anime_items;
        var animate_next = true;

        if(mode == 'global')
        {
            max = $('#skills_preview> ul> li').length;
        }
        else
        {
            if(mode == 'reference')
            {
                sindex += 1
            }
            else
            {
                if(mode == 'tool')
                {
                    sindex += 2
                }
                else
                {
                    sindex = sindex
                }
            }
            max = 1;
        }
    }
    index = sindex;

    var num = 0;
    animation = self.setInterval
    (
        function()
        {
            animation_running = true;
            if(mode == 'off')
            {
                window.clearTimeout(animation);
                animation_running = false;
                animation = null;
                return;
            }
            else
            {
                if(counter >= max)
                {
                    proccess_ajax_data(mode);
                    index = sindex;
                    counter = 0
                    /* mode='off';*/
                    /*animate_next=false;*/
                }

                var anime_child = $('#skills_preview> ul> li:nth-child(' + (index + 1) + ')');

                if($('.slide_animated'))
                {

                    $('.slide_animated').find('img').css({'right': '-100%'})
                    $('.slide_animated').children('div:last-child').css({'bottom': '-100%'})
                    $('.slide_animated').removeAttr('class').css({'left': '-150%'})
                }
                $(anime_child).attr('class', 'slide_animated').animate(
                    {'left': 0}, function()
                    {
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

function configure_banner_display(filter)
{
    if(gmode == 'global' || gmode != filter)
    {
        gmode = filter;

        if($('.filteron'))
        {
            $('.filteron').removeAttr('class')
        }
        $('#skill_fields>b[title="' + filter + '"]').attr('class', 'filteron');
    }
    else
    {
        gmode = 'global'
        $('#skill_fields>b[title="' + filter + '"]').removeAttr('class');
    }
    animate_skills(gmode);
}

function handle_banner_input(caller)
{
    var target = '';
    if(caller == 'project')
    {
        target = $('#' + caller + ' h3').text();
        animate_page('projects')
        build_selected_item_content(target, 'default')
    }
    else
    {
        if(caller == 'reference')
        {
            target = $('#' + caller + ' h3').attr('title');
            animate_page('projects')
            build_selected_item_content(target, 'studies')
        }
        else
        {
            if(caller == 'tool')
            {
                target = $(window.event.target).prev().text().replace(/ /g, '_');
                $('#context').animate({'left': 0});
                animate_page('projects')
                nav_bar_designer(target, 'keyword')
            }
            else
            {
                console.log('FUNCTION HANDLE_BANNER_INPUT RUNS WITH A DEFAULT, PLEASE CHECK !')
            }
        }
    }
}

// HOVER OUT THE MAIN BUTTONS (3) OF 'PROJECTS' PAGE (p2)
// function hover_out_menu_buttons(event)
// {//console.log('left')
//
//     $(this).animate(
//         {'padding-top': '0'}, 'fast', function()
//         {
//             $(this).stop()
//         }
//     )
//
// }

// ENLIST  THE IN-MENU LIST OPTIONS FOR THE 'PROJECT' PAGE
function reveal_list_subcategories(element)
{
    var oXML = __GET_CACHED_DATA('sXML', true);

    if(oXML)
    {
        __RESOLVE_AND_DISPLAY_SUBSECTION(element, oXML);
        return;
    }

    $.ajax(
        {
            url: 'items.xml',
            dataType: 'xml',
            success: function(data)
            {
                __RESOLVE_AND_DISPLAY_SUBSECTION(element, data);
            },
            error: function()
            {
                console.log('Failed 2 Open ...');
            }
        }
    );
}

// THE SCRIPT HANDLES THE DISPLAY FOR THE 'EXTRAS' FIELD ('MEDIA', 'FILES', ...)
// - CLICKING ON EACH OF THE FIELDS, THE SCRIPT ANIMATESAND REVEALS IT
//  WHILE AT THE SAME TIME ANIMATES TO HIDE IT'S SIBLINGS
function preview_extras(element)
{

    var elem = element

    // HIDES THE PREVIEWED SIBLING
    $('#iextra').find('.extra_preview').animate({'height': '5%'}).find('span').css('display', 'none');

    // ANIMATES-IN THE SELECTED FIELD
    $(elem).attr('class', 'extra_preview').animate(
        {'height': '80%'}, 'medium', 'linear', function()
        {
            $(this).find('span').css({'display': 'block'});
        }
    );
}

function nav_bar_designer(item_requested, function_caller)
{
    var oXML = __GET_CACHED_DATA('sXML', true);

    if(oXML)
    {
        __RESOLVE_AND_POPULATE_MAIN_BOARD(item_requested, function_caller, oXML);
        return;
    }

    // CALL THE AJAX TO RETRIEVE RELATED DATA AND POPULATE THE NAVIGATION LIST MENE
    $.ajax(
        {
            url: 'items.xml',
            dataType: 'xml',
            success: function(data)
            {
                __RESOLVE_AND_POPULATE_MAIN_BOARD(item_requested, function_caller, data)
            },
            error: function()
            {

                console.log('Could trace the Main Menu Buttons File ...');
            }
            //END OF 'AJAX' FUNCTION
        }
    );
}

// AUX-FUNCTION THAT ASSISTS 'NAV_BAR_DESIGNER' FUNCTION TO CLEAN THE FORMAT OF SELECTED MENU BUTTONS
function initialize_button(btn)
{

    btn.animate({'padding-top': 0})
    // .hover(hover_in_menu_buttons, hover_out_menu_buttons)
        .removeClass()
}

// CLEARS ALL THE DATA DISPLAYED ON SCREEN BY THE LATEST PREVIEWED ITEM, AND DISPLAY, THEM, OFF
function clean_page_data()
{

    var id_elems = $('#description #iextra *[id]');
    var elem_spans = $('#description span');
    var navigation_list = $('#list');

    $(id_elems).each(
        function()
        {
            $(this).css({'display': 'none'})
        }
    );
    $(elem_spans).each(
        function()
        {
            $(this).html('')
        }
    );
    navigation_list.html('');
}

function build_selected_item_content(current_list_item, curr_list)
{

    var oXML = __GET_CACHED_DATA('sXML', true);
    if(oXML)
    {
        __RESOLVE_AND_DISPLAY_ITEM_FULL_DESCRIPTION(current_list_item, curr_list, oXML);
        return;
    }

    $.ajax(
        {
            url: 'items.xml',
            dataType: 'xml',
            success: function(data)
            {
                __RESOLVE_AND_DISPLAY_ITEM_FULL_DESCRIPTION(current_list_item, curr_list, data);
            },
            error: function()
            {

                console.log('Failed 2 Open ...');
            }
        }
    );
}

// CHECK THE DOMAIN THAT THE USER PICKED, AND DECIDE WHICH AUX-FIELD SHOULD OPEN
//AT THE END OF THE ANIMATION (EXAMPLE: IF DOMAIN='WEB' => LINK-FIELD, IF STUDIES => FILES-FIELD)
function open_field_on_anime_end(list)
{

    var field = {};

    switch(list.toLowerCase())
    {
        case 'web':
            field = $('#ilink');
            break;
        case 'studies':
            field = $('#icomplements');
            break;
        case 'work':
            field = $('#imedia');
            break;
        default:
            field = $('#ifiles');
            break;
    }
    return field;
}

function content_handler(item_src, app)
{

    var src = item_src;
    var app = app;

    //SINCE THE 'PREVIEW' AREA WORKS ALL FOR IMAGES/VIDEOS/PPT/PDF
    //I HAVE INTENTIONALLY DESIGNED THE HTML PAGE AS TO WRAP THE SRC OF THE ABOVE
    //IN 'ANCHOR' TAGS THAT LINK TO THE SOURCE IT SELF.
    //THIS WAY I CAN COMMUNICATE WITH ALL ELEMENTS, EMPOWERED BY A SIMPLER UNIFIED CODE
    var image_parent = $('a[href="' + src + '"]');
    var item;

    if(src == 'images/cv_document/micv.pdf')
    {
        $('#iextra > div').css('display', 'none')
    }

    //ANIMATES THE OPACTITY OF THE 'TEXT and IMAGES' BACKGROUND RESOURCES
    //BOFORE THE SLIDESHOW AREA IS EXPANDED
    $('#ibody > div:first-child').children().animate(
        {opacity: 0}, 'normal', function()
        {
            $(this).css('display', 'none');
        }
    );

    if(!($('#media_control').is(':visible')))
    {

        $('#description').append('<div id="media_control"><div id="cpanel"><span title="next"> > </span><span title="previous"> < </span><span title="exit"> x </span></div><div id="preview"></div></div>');
        $('#iscreenshots').animate({'bottom': '-100%'});
        $('#idescription').animate({'left': '-100%'});

        $('#media_control').animate(
            {'left': '51%'}, 'linear', function()
            {
                $('#cpanel').animate({'left': 0});

            }
        )
    }
    item = handle_preview_content(app, src);
    $('#preview').html($(item));

    $('#preview').css({'right': '-100%'});
    $('#preview').children(':first-child').css({'opacity': 0, 'right': '-100%'})
    $('#preview').children(':first-child').css({'opacity': 1, 'right': '0'});

    //THE BELOW SCRITP WILL HANDLE THE BUTTONS OF THE PREVIEW AREA *THE FIRST TIME IT OPENS*,
    //IN A WAY THAT IF THE CURRENTLY DISPLAYED ITEM HAVE SIBLING ITEMS
    //THEN THE BUTTONS WILL BE ENABLED
    if($(image_parent).siblings().length > 0)
    {

        if(!($(image_parent).next().attr('href')))
        {
            $('#media_control span:contains(">")').attr('class', 'nochild');
        }
        else
        {
            $('#media_control span:contains(">")').attr('class', 'haschild')
        }
        if(!($(image_parent).prev().attr('href')))
        {
            $('#media_control span:contains("<")').attr('class', 'nochild')
        }
        else
        {
            $('#media_control span:contains("<")').attr('class', 'haschild')
        }
    }
    else
    {
        $('#media_control span').attr('class', 'nochild');
    }

    $('#media_control span').click(
        function(event)
        {
            var direction = event.target.title;

            slide_images(direction, this);
        }
    )
}

function handle_preview_content(app, src)
{

    var item = "";

    switch(app)
    {

        case 'jpg':
            item += '<img src="' + src + '" /></div>';
            break;

        case 'pdf':
            item += '<embed src="' + src + '" />';
            break;

        case 'avi':
        case 'swf':
            item += '<iframe src="' + src + '" ></iframe>';
            break;

        case 'pptx':
            item += '<iframe src="' + src + '"></iframe>'
            break;

        default :

            break;
    }

    return item;
}

function slide_images(direction, button_clicked)
{

    var handler = direction;
    var button = button_clicked;
    var src = $('#preview').children(':first').attr('src');
    var media_box = $('#media_control');
    var selected_item = $('.item_previewed');
    var btnnext = $('#cpanel span[title="next"]');
    var btnprev = $('#cpanel span[title="previous"]');

    if(handler == "next")
    {

        if($(selected_item).next().attr('href'))
        { // console.log(' SIBILI');
            src = $(selected_item).next().attr('href');
            $(selected_item).next().attr('class', 'item_previewed');
            $(selected_item).removeAttr('class');
            $(btnnext).attr('class', 'haschild')
            $(btnprev).attr('class', 'haschild')

            //THE ABOVE HANDLES THE WHETHER THE BUTTON WILL BE ENABLED OR NOT
            //TO DO THAT i TAKE THE src OF THE ITEM THAT WILL BE DISPLAYED DURING THIS
            //CODE EXECUTION (--NOT THE ONE THAT WAS ALREADY DISPLAYED ON SCREEN--)
            $('#preview').children(':first').animate(
                {'opacity': 0, 'right': '100%'}, function()
                {
                    $('#preview').children(':first').attr('src', src).css({'right': '-100%'})
                }
            ).animate({'opacity': 1, 'right': 0});
        }
        else
        {
            $(btnnext).attr('class', 'nochild')
        }

    }
    else
    {
        if(handler == "previous")
        {

            if($(selected_item).prev().attr('href'))
            {
                src = $(selected_item).prev().attr('href');
                $(selected_item).prev().attr('class', 'item_previewed');
                $(selected_item).removeAttr('class');
                $(btnprev).attr('class', 'haschild')
                $(btnnext).attr('class', 'haschild')

                //THE ABOVE HANDLES THE WHETHER THE BUTTON WILL BE ENABLED OR NOT
                //TO DO THAT i TAKE THE src OF THE ITEM THAT WILL BE DISPLAYED DURING THIS
                //CODE EXECUTION (--NOT THE ONE THAT WAS ALREADY DISPLAYED ON SCREEN--)
                $('#preview').children(':first').animate(
                    {'opacity': 0, 'right': '-100%'}, function()
                    {
                        $('#preview').children(':first').attr('src', src).css({'right': '100%'})
                    }
                ).animate({'opacity': 1, 'right': 0});
            }
            else
            {
                $(btnprev).attr('class', 'nochild')
            }

        }
        else
        {
            $('#media_control').animate(
                {height: 0}, 'fast', function()
                {
                    $('#iscreenshots').animate({'bottom': 0});
                    $('#idescription').animate({'left': 0});
                    $(this).remove()
                }
            );

            $('#ibody > div:first-child').children().css('display', 'block');
            $('#ibody > div:first-child').children().animate({opacity: 1}, 'slow');
        }
    }
}

/*
 ---------------------------  REFACTOR FUNCTIONS --------------------------------------
 */

function __GET_PROJECT()
{
    // var size = 0;
    // var i = 0;
    var item = {};
    var cacheIdx = '';

    // size = temp_projects.length - 1;
    // i = Math.floor((Math.random() * size) + 1);
    if(temp_projects.length == 0)
    {
        temp_projects = projects.slice();
    }
    item = temp_projects.pop();
    cacheIdx = _toIndex('p_' + item.id);

    if(__GET_CACHED_DATA(cacheIdx, false))
    {
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

function __GET_REFERENCE()
{
    var o = {};
    var cacheIdx = '', project = '';

    if(temp_references.length == 0)
    {
        temp_references = references.slice();
    }
    o = temp_references.pop();

    // 'project' variable holds the name of the project that was referenced.
    // BUT:: it is not used at the moment
    project = _toIndex('c_' + o[2]);
    cacheIdx = _toIndex('c_' + o[3]);

    if(__GET_CACHED_DATA(cacheIdx, false))
    {
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

function __GET_TOOLS()
{
    var item = [], size;
    var t = [];

    // tsize = temp_tools.length - 1;
    // if(tsize <= 0)
    // {
    //     temp_tools = tech_tools.slice();
    //     tsize = tech_tools.length;
    // }

    size = $('#skills_preview #tool h4').length;
    // THE NUMBER OF IMAGES PREVIEWED ON SCREEN (THESE NEED TO POPULATE)

    for(var i = 0; i < size; i++)
    {
        // CREATE A RANDOM NUMBER FROM THE '.TOOLS' ARRAY BY REDUCING THE POTENTIAL VALUES
        // BY ONE EACH TIME. THIS HAPPENS IN ORDER TO AVOID DUPLICATE ENTRIES, WITH A 'POP'
        // FUNCTION, USED TO REMOVE THE USED VALUE FROM THE 'TOOLS' ARRAY
        // rnum = Math.floor((Math.random() * (tsize - rcount)));
        // t.push(temp_tools[rnum]);
        if(temp_tools.length == 0)
        {
            temp_tools = tech_tools.slice();
        }
        t.push(temp_tools.pop());

        // THROUGH (POP) THE ITEM FROM THE ARRAY, SO THAT IT WILL NOT BE RETRIEVED AGAIN LATER
        // temp_tools.splice(rnum, 1);
        // rcount++;
    }

    return t;
}

function __INITIALIZE_PAGE_DATA(data)
{
    // var projs = [], tuts = [], tools = [];
    var a = [];
    var proj = {};

    // // FIND THE NUMBER OF 'ITEMS' IN THE 'SKILLS.XML'
    // psize = $(data).find('item').length - 1;
    //
    // rnum = Math.floor((Math.random() * psize) + 1);
    // STORE A COMPLETE 'ITEM' THAT REFLECTS ALL DATA RELATED TO A 'PROJECT'

    projects = _suffleArray(__GET_ALL_PROJECTS(data));
    temp_projects = projects.slice();

    references = _suffleArray(__GET_ALL_REFERENCES(data));
    temp_references = references.slice();

    // STORE - UNIQUELLY -  ALL SKILLS THAT WERE FOUND IN THE DOCUMENT. THIS IS AN ARRAY
    tech_tools = _suffleArray(__GET_ALL_TOOLS(data));
    temp_tools = tech_tools.slice();

}

function __GET_ALL_TOOLS(data)
{
    var index = 'all_tools';
    var a = [];
    var cache = __GET_CACHED_DATA(index, false);

    if(cache)
    {
        return JSON.parse(cache);
    }

    // var tsize = 0;
    var key = '';
    // FIND THE NUMBER UNIQUE 'SKILLS' IN THE 'SKILLS.XML'
    $(data).find('tool').each(
        function()
        {
            key = $(this).text();

            if(key == '-')
            {
                return;
            }
            insert = true;
            // CHECK IF VALUE IS ALREADY STORED IN THE ARRAY
            for(var i = 0, j = a.length; i < j; i++)
            {
                if(a[i] == key)
                {
                    insert = false;
                    break;
                }
            }
            if(insert)
            {
                a.push(key);
                // tsize++;
            }
        }
    );

    __SET_CACHE_DATA(index, JSON.stringify(a), false);

    return a;
}

function __GET_ALL_PROJECTS(data)
{
    var index = 'all_projects';
    var a = [], aSerialized = [];
    var cache = __GET_CACHED_DATA(index, false);

    if(cache)
    {
        var i = 0;
        aSerialized = JSON.parse(cache);

        while(i < aSerialized.length)
        {
            a.push(JSON.parse(aSerialized[i]));
            i++;
        }
        return a;
    }

    var proj = {};

    $(data).find('item').each(
        function()
        {
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

function __GET_ALL_REFERENCES(data)
{
    var index = 'all_references';
    var a = [], aSerialized = [], aTemp = [];
    var cache = __GET_CACHED_DATA(index, false);

    if(cache)
    {
        var i = 0;

        aSerialized = JSON.parse(__GET_CACHED_DATA(index, false));

        return aSerialized;
    }

    // FIND THE NUMBER OF VALID 'COMMENTS' IN THE 'SKILLS.XML'
    $(data).find('item > comment').each(
        function()
        {
            if($(this).text() != '-')
            {
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

function __RESOLVE_AND_DISPLAY_SUBSECTION(element, data)
{

    var curr_section = element.innerHTML;
    var curr_element = element;

    var list_elem = "";
    var childs = $(data).find('section:contains(' + curr_section + ')').siblings('title')
        .each(
            function()
            {
                list_elem += '<li>' + $(this).text() + '</li>';
            }
        );

    var lista = '<ul class="sublist">' + list_elem + '</ul>';
    $('#list').css('overflow-x', 'hidden');
    if(!($(curr_element).children('ul').is(':visible')))
    {
        $(curr_element).append($(lista));
        $('.sublist li').css('position', 'relative').animate({'padding-left': '5%'}, 'medium');
    }

}

function __RESOLVE_AND_POPULATE_MAIN_BOARD(item_requested, function_caller, data)
{

    var item = item_requested;
    var caller = function_caller;

    // CLEAN ALL THE DATA DISPLAYED BY THE LATEST PREVIEWED ITM
    // AND DISPLAY, THEM, OFF
    clean_page_data();

    //THIS SCRIPT HANDLES THE MAIN NAVIGATION BUTTON ANIMES AND CHANGES THE BACKGROUND IMAGE ON CLICK
    if(caller == 'navigation')
    {
        $('#menu_tabs a:contains(' + item + ')').addClass('selected').unbind('hover');
        $('#menu_tabs a:not(:contains(' + item + '))')
            .animate({'padding-top': 0})
            // .hover(hover_in_menu_buttons, hover_out_menu_buttons)
            .removeClass();
    }

    //IF ONE OF THE MAIN BUTTONS IS SELECTED AND THE '#MEDIA_CONTROL' IS STILL OPEN
    //THE LINE BELOW  WILL HANDLE TO CLOSE IT
    if($('#media_control').attr('id'))
    {
        slide_images('x', null)
    }

    var temp_array = [];
    var num = -300;

    var childs = [];

    // A TEXT THAT INFORMS THE USER ABOUT THE CURRENT NAVIGATION LIST (BUILDS DYNAMIIC ALS0)
    $('#list').prepend('<h5>' + item.replace(/_/g, " ") + '</h5>');

    // A DISTINCTION IS MADE FOR THE CALLER, THAT WILL DEFINE THE QUERY TO THE XML FILE
    // AND FINALLY SUSTAIN THE BEHAVIOUR OF THE DISPLAY
    if(caller == "navigation")
    {
        childs = $(data).find('domain:contains(' + item + ')').siblings('section');
    }
    else
    {
        if(caller == "category")
        {

            // THE SCRIPT QUERIES THE 'CATEGORY' TAG FROM THE XML FILE
            childs = $(data).find('category:contains(' + item + ')').siblings('title');
            initialize_button($('#menu_tabs a:not(:contains(' + item + '))'));
        }
        else
        {

            // THE SCRIPT QUERIES THE 'TOOLS' TAG FROM THE XML FILE (TOOLS ~ KEYWORDS)
            var tools = $(data).find('tools>tool:contains(' + item + ')').each(
                function()
                {
                    if($(this)[0].textContent == item)
                    {
                        childs.push($(this).parent().siblings('title'))
                    }
                }
            )
        }
    }
    initialize_button($('#menu_tabs a:not(:contains(' + item + '))'));
    // AFTER DECIDING WHICH DATA WILL BE PROCESSED AS 'CHILDS' ABOVE,
    // NOW THEY ARE STORED IN AN ARRAY AND FURTHER PROCESSED AFTER 'COMPLETE' OF THE AJAX CALL
    $(childs).each(
        function()
        {
            temp_array.push($(this).text());
        }
    );

    for(var i = 0; i < temp_array.length; i++)
    {
        if(i == $.inArray(temp_array[i], temp_array))
        {
            $('#list').append('<li class="mgroupi" style="left:' + num + 'px">' + temp_array[i] + '</li>');
            num -= 50;
        }
    }

    if(caller == 'navigation')
    {
        $('#list li').wrapAll('<ul id="' + item + '" class="list" />');
    }
    else
    {
        $('#list li').wrapAll('<ul id="temp_list" />');
    }

    $('#list ul li').each(
        function()
        {
            $(this).animate({'left': 0}, 'slow')
        }
    );
}

function __RESOLVE_AND_DISPLAY_ITEM_FULL_DESCRIPTION(current_list_item, curr_list, data)
{
    var l_item = {};
    var list = curr_list;
    var list_item = current_list_item;

    clean_page_data();

    //THE SCRIPT WILL HANDLE TO CLOSE THE 'MEDIA-PLAYER' IF THE USER LEAVES THE PAGE
    if($('#media_control').attr('id'))
    {
        slide_images('x', null)
    }

    l_item = $(data).find('item>title:contains(' + list_item + ')').parent().children();

    var num = -250;

    $(l_item).each(
        function()
        {

            var tag = this.tagName;
            var data = '';

            // 'CDATA'  THAT IS CONTAINED IN SOME TAGS, LIKE 'DESCRIPTION' OR 'INSTRUCTOR'
            // ARE ALSO RECOGNIZED AS 'CHILD-NODES', NEVERTHELESS MAINTAIN A TYPE ='4' NODE
            // AND THAT IS WHY A DISTINCTION IS BEING MADE UPPON
            // THE SCRIPT WILL HANDLE TO DISPLAY ONLY THE TAGS THAT CONTAIN VALUES (OTHERWISE DISPLAY OFF)
            if(this.childNodes[1] && (this.childNodes[1].nodeType == '1'))
            {

                data = $(this).children(':first-child').text();

                if(data != '' && data != '-')
                {
                    data = $(this).children();
                    var mdata = "";

                    switch(tag)
                    {

                        case 'tools':
                            $(data).each(
                                function()
                                {
                                    mdata += '<a class="keys" href="#">' + $(this).text() + '</a>';
                                }
                            );
                            break;
                        case 'screenshots':
                            $(data).each(
                                function()
                                {
                                    mdata += '<a href="' + $(this).text() + '"><img  src="' + $(this).text() + '" title="' + $(this).text().substring($(this).text().lastIndexOf('/') + 1, $(this).text().lastIndexOf('.')).replace(
                                            /_/g, " "
                                        ) + '"  /></a>';
                                    var img_loader = new Image();
                                    img_loader.src = $(this).text();
                                    num += 10;
                                }
                            )
                            break;
                        case 'files':
                            $(data).each(
                                function()
                                {
                                    var addr = this;
                                    var app = $(addr).text().substring($(this).text().lastIndexOf(".") + 1);
                                    var label = $(addr).text().substring($(this).text().lastIndexOf("/") + 1, $(this).text().lastIndexOf("."))
                                    mdata += '<a href="' + $(addr).text() + '"><img src="images/_buttons/' + app + '.png" /><p>' + label.replace(/_/g, " ").toUpperCase() + '</p></a>';
                                }
                            )
                            break;
                        case 'media':
                            $(data).each(
                                function()
                                {
                                    var addr = this;
                                    var app = $(addr).text().substring($(addr).text().lastIndexOf(".") + 1);
                                    var label = $(addr).text().substring($(addr).text().lastIndexOf(",") + 1, $(addr).text().lastIndexOf("."));
                                    var src = $(addr).text().substring(0, $(addr).text().lastIndexOf(","));
                                    mdata += '<a href="' + src + '"><img src="images/_buttons/' + app + '.png"  /><p>' + label.replace(/_/g, " ").toUpperCase() + '</p></a>';
                                }
                            );
                            break;
                        default:
                            /* I LEFT IT PURSPOSELY BECAUSE I NEED TO SEE THE 'VALUES' INDEXED BY THE SCRIPT*/
                            break;
                    }

                    $('#description #i' + tag).css({'display': 'block'});
                    $('#description #i' + tag + ' span').append(mdata);
                }
            }
            else
            {
                data = $(this).text();
                if(data != '' && data != '-')
                {
                    if(tag == 'tutor')
                    {
                        $('#icomplements').css({'display': 'block'})
                    }
                    $('#description #i' + tag).css({'display': 'block'});
                    $('#description #i' + tag + ' span').html(data);
                    if(tag == 'link')
                    {
                        $('#description #i' + tag + ' span').html('<a href="' + data + '">VISIT ONLINE</a>');
                    }
                }
            }
        }
    );
    //END OF 'AJAX' FUNCTION

    // FIND ITEM TO DISPLAY ON ANIME-END
    if(list)
    {
        var field = open_field_on_anime_end(list);
        $('#context').animate(
            {'left': '-100%'}, function()
            {
                preview_extras(field)
            }
        );
        return;
    }
    // ANIMATE THE DISPLAY TO THE AREA THAT SHOWCASES SINGLE ITEM (AT THE RIGHT OF THE PAGE)
    $('#context').animate({'left': '-100%'});
}

function __SET_CACHE_DATA(index, data, isXML)
{

    if(isXML)
    {
        var oSerializer = new XMLSerializer();
        var sXML = oSerializer.serializeToString(data);
        localStorage.setItem(index, sXML);
    }
    else
    {
        localStorage.setItem(index, JSON.stringify(data));
    }

}

function __GET_CACHED_DATA(index, isXML)
{
    var data = localStorage.getItem(index);

    if(data && isXML)
    {
        var oParser = new DOMParser();
        return oParser.parseFromString(data, 'text/xml');
    }
    if(data && !isXML)
    {
        return JSON.parse(data);
    }

    return null;
}

/*
 -------------------- HELPERS | REFACTOR
 */

function _toIndex(str)
{
    return str.toLocaleLowerCase().replace(/ /g, '_');
}

function _suffleArray(a)
{
    var b = [];
    var x = null;

    while(a.length > 0)
    {
        x = a.splice(Math.floor((Math.random() * a.length)), 1);
        b.push(x[0]);
    }
    return b;
}