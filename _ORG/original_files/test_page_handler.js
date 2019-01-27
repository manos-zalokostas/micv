// JavaScript Document

$(document).ready(function() {

//	console.log('ready stady go !');

$("#booking_form label").each(
										function (){
											$(this).click(
											function (){
											if(selector = $('.form_tag_selected')){
											$(selector).removeClass('form_tag_selected');
											}
											var node_id =  "#" +  $(this).parent().attr('id')
//											console.log("node_id is : " + node_id);
											$(node_id + " > legend").addClass("form_tag_selected");
											})});

$("#ajax_table_labels > li").each(
										function (){
											$(this).click(
											function (){
											if(selector = $('.ajax_tab_selected')){
											$(selector).removeClass('ajax_tab_selected');
											}
											$(this).addClass("ajax_tab_selected");

											$.ajax({

												url: 'xml_file.xml',
												dataType: 'xml',
												success: function (data){

													var list_elem = "<ul>";
													var childs = $(data).find('flight > * ')
													.each(function(){
													list_elem +='<li>' +$(this).text()+ '</li>';
													}
													);
													list_elem +="</ul>";
													$('#record_table1').html(list_elem);
													$('#record_table2').html(list_elem);
																			var count=10;
																			$('#record_table1 > ul > li , #record_table2 > ul> li')
																					.each(
																					function (){
																					this.style.right=(200 -(count *10)) + '%';
																					$(this).animate({'right':0})
																					count--;
																					})

												},
												error: function(){
																console.log('Failed 2 Open ...');
												}
												})

											})});


var carousel_div = $('#carousel');
var carousel_left = $('#left_handle');
var carousel_right = $('#right_handle');
//var carousel_imgs = $('carousel > ul > li > img');
var images = ['carousel1','carousel2','carousel3','carousel4'];
//console.log(images);
current_position = 0;
		carousel_right.click(
										function(){
							//			console.log('right hid down !');
										if(image_displayed = $('.carousel_img')){
										$(image_displayed).removeClass('carousel_img');
										}
										if(current_position >= 3){
										current_position = -1;
										var clone_node = $('#carousel_container').html();
										console.log(clone_node);

										$('#carousel_container').animate({'top':'100%'}, function(){
																														$('#carousel_container').html(clone_node);
																														$('#carousel_container').css({'top':'-200%'});
																														$('#carousel_container').animate({'top':0});

																														});
										}

										current_position +=1;
										$('#c'+current_position).addClass('carousel_img')

										console.log(current_position + ' - ' );
			})

		carousel_left.click(
										function(){
							//					console.log('right hid down !');
										if(image_displayed = $('.carousel_img')){
										$(image_displayed).removeClass('carousel_img');
										}
										if(current_position < 1 ){
										current_position = 4;
										var clone_node = $('#carousel_container').html();
										console.log(clone_node);

										$('#carousel_container').animate({'top':'-100%'}, function(){
																														$('#carousel_container').html(clone_node);
																														$('#carousel_container').css({'top':'200%'});
																														$('#carousel_container').animate({'top':0});

																														});
										}

										current_position -=1;
										$('#c'+current_position).addClass('carousel_img')

										console.log(current_position + ' - ' );
										})

$('#info_list_top > li, #info_list_bottom > li')
.each(
		function(){
						$(this).hover(
							function(){
							var node = $(this);
							var node_id = this.id;
							console.log('enter');
							$(this).find('img').animate({'width':'25%'});
							$(this).find('em, b, span, i').animate({'opacity':0});
							$(this).find('em').css({'left':'100%', 'color':'#234'}).animate({'opacity':1, 'left':0})

							}
							,
							function(){
							$(this).find('img').animate({'width':'20%'});
							$(this).find('em').animate({ 'left':'-100%'});
							$(this).find('em').animate({ 'left':0}).css({ 'color':'#e92'});

							$(this).find('em, b, span, i').animate({'opacity':1});
							console.log('left');
							}
						)
		}
)

		num = 0;
		play_frames();
function play_frames() {

		play = setInterval(set_anime_automaton, 10000)
		}



function set_anime_automaton(){

	console.log('num: ' + num);
	num++;
//	$('#banner1 > p:first-child, #banner1 > p:last-child').animate({'opacity':0});
	$('#banner1 > p:first-child').css('right', '-100%')
	$('#banner1 > p:last-child').css('left', '-100%')

	$('#banner2 > p:first-child').css('right', '-100%')
	$('#banner1 > p:last-child').css('left', '-100%')
	//console.log('entered.................');
	//play_frames();

			if(true){
				var frame1 = document.querySelector('#banner1');
				var frame2 = document.querySelector('#banner2');
				var b1_p1 = frame1.querySelector('p:first-of-type');
				var b1_p2 = frame1.querySelector('p:last-of-type');
				var img1 = frame1.querySelector('img');
				var img2 = frame2.querySelector('img');
				var counter = 0;
				var new_img1 = new Image();
				var new_img2 = new Image();

				new_img1.src = img1.src;
				new_img1.style.position = 'absolute';
				new_img1.style.left = '-100%';
				new_img1.style.zIndex = 10;

				$(new_img1).insertAfter(img1);

				new_img2.src = img2.src;
				new_img2.style.position = 'absolute';
				new_img2.style.right = '100%';
				new_img2.style.zIndex = 10;

				$(new_img2).insertAfter(img2);

				anime_automaton = self.setInterval (

				function(){

					if(counter >10) {
					$(b1_p1, b1_p2).animate({'opacity': 1});
					$(b1_p1).animate({'right': 0});
					$(b1_p2).animate({'left': 0});

					frame1.removeChild(frame1.querySelector('img'));
					frame2.removeChild(frame2.querySelector('img'));

//					document.querySelector('#side_banners > ul >li')[1].style.color='orange';
					if(num >2) {
						num=0;
						$('#side_banners > ul > li:last-child> ul >li').css('color','#234')
					}
//					console.log(document.querySelector('#side_banners > ul >li:nth-child(' + num + ')'));
					document.querySelector('#side_banners > ul > li:last-child> ul >li:nth-child(' + (num+1) + ')').style.color = 'darkorange';

					window.clearInterval(anime_automaton);
					counter=0;

					//console.log(frame1.querySelector('img'));

					}
					else{
					new_img1.style.left = (100-(10 * counter)) + '%';
					new_img2.style.right =(100-(10 * counter)) + '%';
					$(img1).fadeOut();
					$(img2).fadeOut();
					counter++;
					}
				} ,30);

			}
			else {
//				window.clearInterval(anime_automaton);
			}
		}

$('#banner2').hover(
							function(){
							$('#banner2 > p:first-child').animate({'top':'-10%'});
							$('#banner2 > p:last-child').animate({'bottom':'-6%'});
							},
							function(){
							$('#banner2 > p:first-child').animate({'top':'-40%'});
							$('#banner2 > p:last-child').animate({'bottom':'-26%'});
							}
						)


});
