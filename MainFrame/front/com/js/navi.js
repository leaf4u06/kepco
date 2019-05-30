/*	
 * Name: KEPCO
 * Part: JavaScript for ui 竊� plug-in
 * Author : pk.choi
 */
(function($){
//	jQuery.noConfict();
	$(document).ready(function() {		
	
		/*	
		 * Part: Navigation(GNB, LNB, UTIL)
		 * Function:
		 * 		
		 */
		
		
		//GNB MAIN		
		$('.independent .gnb .depth.depth1').on({
			'mouseenter focusin':function (event) {
	  			var $depthbox = $(this).find('.depth_box');
	  			var tarH = $depthbox.find('.sub_meun').height();
	  			//�ъ씠踰꾩��� 濡ㅼ삤踰꾩떆
	  			if($(this).find('.depth_box .sub_meun ul.menu_col').length > 0)
	  				tarH = $depthbox.find('.sub_meun li').height();
	  				
	  			$depthbox.addClass('on');
	  			animateSubdepth($depthbox, tarH, 600, 'easeInOutSine');
	  
	  			$(this).find('>a').css({'background-color':'#fafafa', 'color':'#1658d6'});
	  		}
	  		,'mouseleave foucusout':function (event) {
	  			var $depthbox = $(this).find('.depth_box');
	  			$depthbox.removeClass('on');
	  			animateSubdepth($(this).find('.depth_box'), 0, 0, null);		
	  			$(this).find('>a').css({'background-color':'', 'color':''});
	  		}
			,'focusout':function (event) {
	  			$(this).find('>a').css({'background-color':'', 'color':''});
	  		}
		}, '>li');	
		//�쒕툕�곸뒪 留덉�留� 2�곸뒪硫붾돱 focusout �대깽��
		$('.independent .gnb .depth.depth1 > li .sub_meun').on('focusout', 'li:last', function (event) {
	//		console.log($(this).parent().children().length, $(this).index());
			var $depthbox = $(this).parent().parent();
			//�ъ씠踰꾩��먯쓽 寃쎌슦
			if($(this).parent().attr('class') == 'menu_col')
				$depthbox = $(this).parent().parent().parent().parent();
			
			$depthbox.removeClass('on');
			animateSubdepth($depthbox, 0, 0, null);	
		});
		
		
		//GNB - SUB
		$('.sub .gnb .gnb_menu').on({
			'mouseenter focusin':function (event) {				
				var $depthbox = $(this).find('.depth_box');
				var tarH = $depthbox.find('.sub_depth').height() + 40;
				if($depthbox.find('.sub_depth .sub_meun').length == 0 && $depthbox.find('.sub_depth .pr_depth').length == 0) 
					tarH = 0;
 
				animateSubdepth($depthbox, tarH, 600, 'easeInOutSine');
				if(($(this).attr("id")) && $(this).attr("id") != ""){
					fncBannerGet($(this).attr("id"));
				}
				$(this).find('>a').not('.indep_menu').css({'background-color':'#fafafa', 'color':'#1658d6'});
				if($(this).parent().find('li.on').length > 0) {
					$(this).parent().find('li.on').addClass('prev');
					$(this).parent().find('li.on').removeClass('on');
				}
			}
			,'mouseleave focusout':function (event) {
				if(event.type == 'mouseleave') animateSubdepth($(this).find('.depth_box'), 0, 0, null);		
				
				$(this).find('>a').not('.indep_menu').css({'background-color':'', 'color':''});
				if($(this).parent().find('li.prev').length > 0) {
					$(this).parent().find('li.prev').addClass('on');
					$(this).parent().find('li.prev').removeClass('prev');					
				}
			}
		}, '>li');	
		
		//�쒕툕�곸뒪 留덉�留� 諛곕꼫硫붾돱 focusout �대깽��
		$('.sub .gnb .gnb_menu > li .sub_depth .banner').on('focusout',function (event) {
			animateSubdepth($(this).parent().parent().parent().find('.depth_box'), 0, 0, null);		
		});
		//�쒕툕�곸뒪 留덉�留� 3�곸뒪硫붾돱 focusout �대깽��
		$('.sub .gnb .gnb_menu > li .sub_depth').find('dl:last').children('dt, dd').on('focusout',function (event) {
	//		console.log($(this).parent().children().length, $(this).index());
			//console.log($(this).parent().next('.banner').find('a').length)
			//留덉�留� 3�곸뒪硫붾돱 �섏쐞�� 留덉�留� 4�곸뒪硫붾돱�닿퀬 諛곕꼫硫붾돱媛� �녿떎硫�
			if($(this).index() == $(this).parent().children().length - 1 && $(this).parent().next('.banner').find('a').length == 0)
				animateSubdepth($(this).parent().parent().parent().parent().find('.depth_box'), 0, 0, null);		
		});		
		
		
		//UTIL - �꾧뎅�ъ뾽��,�ㅺ뎅��
		$('.utill_box ul.depth > li').on({
			'mouseenter focusin':function (event) {
				$(this).find('.layer_box').addClass('on');
			}
			,'mouseleave':function (event) {
				$(this).find('.layer_box').removeClass('on');
			}
		});
		$('.utill_box ul.depth > li').has('.layer_box').on('click', '>a', function(){
			return false;
		});
		$('.utill_box ul.depth > li').on('focusout', 'ul li:last', function (event) {
			$(this).parent().parent().parent().removeClass('on');
		});
		
		
		//GNB �쒕툕硫붾돱 animate
		function animateSubdepth($target, $tarH, speed, easing){
			$target.stop(true, false).animate({'height':$tarH}, speed, easing);
		}	
		
		//GNB 6踰덉㎏ 硫붾돱�� �볦씠 議곗젙
		$("#header .gnb ul.gnb_menu li > .depth_box .sub_depth").find("dl.sub_meun:eq(5)").css({
			"width":"133px"
			//,"border":"1px solid red"
		});
		
		
		//寃��됰찓�� focusin event
		$('#suggestImg > a').on('focusin', function (event) {
			suggestToggle();
		});
		//寃��� �쒖꽦�� �댄썑 寃��됰쾭�� focusout event 
		$('#suggestBtn').on('focusout', function (event) {			
			suggestToggle();						
		});		
		
		
		
		//LNB
		var $clicked3dep;
		var $clicked4dep;
		
		$("ul.menu3dep > li").each(function(index, element) {
            if($(this).hasClass('on')){
				$clicked3dep = $(this);
			}
        });
        
        if(!eval($clicked3dep)){
        	$clicked3dep = $("ul.menu3dep > li:first-child");
        }
		$("ul.menu4dep > li").each(function(index, element) {
            if($(this).hasClass('on')){
				$clicked4dep = $(this);
			}
        });		

        if(!eval($clicked4dep)){
        	$clicked4dep = $("ul.menu4dep > li:first-child");
        }
        
		$("ul.menu3dep > li > a").on('click',function (event) {
			if($(this).parent().children('ul.menu4dep').length > 0){
				
				//湲곕낯 留곹겕瑜� 留됰뒗��(�대┃�� 留곹겕�대룞�� �꾩슂�섎㈃ �꾨옒 �쇱씤 二쇱꽍泥섎━)
				event.preventDefault ? event.preventDefault() : event.returnValue = false;	
			
				//硫붾돱媛� 鍮꾪솢�깊솕�� �곹깭
				if( $(this).next().css('visibility') == 'hidden') {		
					$('ul.menu3dep > li').removeClass('on');
//					if($clicked3dep.find('>ul').attr("class") == "menu4dep")
					if($clicked3dep.find('>ul').length > 0)
						$clicked3dep.find('>a').css({'background':'url(/front/img/com/ico_lnb_more.png) 155px center no-repeat'});
					
					$(this).parent().addClass('on');
					$(this).css({'background':'none'});
					
					$clicked3dep = $(this).parent();
				}
				//硫붾돱媛� �쒖꽦�붾맂 �곹깭
				else {
					$(this).parent().removeClass('on');
					$(this).css({'background':'url(/front/img/com/ico_lnb_more.png) 155px center no-repeat'});
				}
			}
		});			
		
		$("ul.menu4dep > li > a").on('click',function (event) {
			if($(this).parent().children('ul.menu5dep').length > 0){
				
				//湲곕낯 留곹겕瑜� 留됰뒗��(�대┃�� 留곹겕�대룞�� �꾩슂�섎㈃ �꾨옒 �쇱씤 二쇱꽍泥섎━)
				event.preventDefault ? event.preventDefault() : event.returnValue = false;	
			
				//硫붾돱媛� 鍮꾪솢�깊솕�� �곹깭
				if( $(this).next().css('visibility') == 'hidden') {
					$('ul.menu4dep > li').removeClass('on');
					$clicked4dep.find('>a span').css('background','url(/front/img/com/ico_lnb_more.png) 132px center no-repeat');
					
					$(this).parent().addClass('on');
					$(this).find('span').css('background','none');
					
					$clicked4dep = $(this).parent();
				}
				//硫붾돱媛� �쒖꽦�붾맂 �곹깭
				else {
					$(this).parent().removeClass('on');
					$(this).find('span').css('background','url(/front/img/com/ico_lnb_more.png) 132px center no-repeat');
				}
			}
		});
		
		


		/*	
		 * Part: �댁슜�덈궡
		 * Function:
		 * 		
		 */
		var $dh = $("body").height();
		var $gnb_useg_index = 0; 

		//�좏떥硫붾돱 以� �댁슜�덈궡 �대┃
		$("#user_guide a").on('click',function (event) {
			showUserGuide();
			return false;
		});
		
		//�좏떥硫붾돱 以� �ъ씠�몃㏊ �대┃
		$("#userguide_site a").on('click',function (event) {
			showUserGuide('sitemap');
			return false;
		});		
		
		//�댁슜�덈궡 �덉씠�� �닿린
		function showUserGuide(utilname){
			$dh = $("body").height();

			if ($('#wrap_userguide').length > 0) {
				//alert('wrap_userguide exists already');
				if(!$('#wrap_userguide').is(':animated')){
					$('#wrap_userguide').show().stop(true, false).animate({'left':0}, 800, function(){
						if(utilname){
							//alert('sitemap')							
							if($gnb_useg_index != 3){
								url = "/cmmn/sitemap.do";
								loadContainer_useg(url, 3);
							}
						}
						$(this).find('h1 a').focus();
					});					
				}		
				initHeightUserGuide($('#wrap_userguide'), $gnb_useg_index);
			}
			else { //wrap_userguide does not exist - create and insert (runs 1st time only)
				//create HTML markup for lightbox window				
				var lightbox = '<div id="wrap_userguide"></div>';
				
				//insert lightbox HTML into page
				$('body').append(lightbox);						
				
				var url = "/front/html/ME/F/A/MEFAHP001.html";				
				
				$('#wrap_userguide').load(url + " .all_outer_useg", function() {
					var $wrap = $(this);					
					$wrap.animate({'left':0}, 800, 'easeInOutSine', function(){
						if(utilname){
							//alert('firstload sitemap');
							url = "/cmmn/sitemap.do";
							loadContainer_useg(url, 3);
						}
						$(this).find('h1 a').focus();
					});					
					//alert('wrap_userguide load complete');
					$("#gnb_useg a").on('click',function (event) {
						if(!$(this).hasClass('on')){
							var href = this.href;
							var myIndex = $(this).parent().index();
							loadContainer_useg(href, myIndex);
						}				
						$(this).focus();
						return false;
					});
					$(".btn_cls_useg .button_cur").on('click',function (event) {
						hideUserGuide();
						return false;
					});					
					
					initEventUserGuide(0);
					initHeightUserGuide($wrap, 0);
				});				
			}

			$('.vedio_cont .view').hide();
			if($('object').length > 0){
				if(detectBrowser().browser == 'Microsoft Internet Explorer') wm_player.controls.stop();
				if(detectBrowser().browser == 'Firefox') wm_player2.controls.stop();
			}
		}
		
		//�댁슜�덈궡 �덉씠�� �リ린
		function hideUserGuide(){
			$('#wrap_userguide').stop(true, false).animate({'left':'100%'}, 800, 'easeInOutSine', function(){
				$(this).hide();
				$('.vedio_cont .view').show();
			});
		}
		
		//而⑦뀒�대꼫 �곸뿭 濡쒕뱶
		function loadContainer_useg(url, index){
			$('#container_useg').empty();
			$.ajax({
			  url: url			  
			  ,async: false
			  ,success: function(data) {
				$(data).find('#container_useg').appendTo($('.section_useg')).prev().remove();
			    initEventUserGuide(index);
				initHeightUserGuide($('#wrap_userguide'), index);	
			  }
			});
			$("#gnb_useg a").removeClass('on');
			$("#gnb_useg li:eq(" + index + ") a").addClass('on');
			$gnb_useg_index = index;			
		}
		
		//媛� container_useg �댁쓽 ui �대깽�� �ы샇異�
		function initEventUserGuide(index_gnb){
			
			if(index_gnb == 0){			//New KEPCO
				var index = 0;			
				$('.p_tab a').on('click',function(){
					$(this).parent('.p_tab').find('> a').addClass('on').parent('.p_tab').siblings('.p_tab').find('> a').removeClass('on');
					//$(this).parent('.p_tab').next('div.specific_info_useg').removeClass('blind').siblings('div.specific_info_useg').addClass('blind');
					//console.log(this.href.substr(this.href.length - 1))
					
					index = this.href.substr(this.href.length - 1);
					$('.specific_info_useg_main').css({'position':'absolute','top':'-999px'});
					$('#spec_info_useg01,#spec_info_useg02,#spec_info_useg03,#spec_info_useg04').addClass('blind');				
					$('#spec_info_useg0'+index).removeClass('blind');
					initHeightUserGuide($('#wrap_userguide'), 0);
					$(this).focus();
					//return false;
				})
				$('.p_tab a').on('keydown',function(event){
					if(this.href.substr(this.href.length - 1) == 4){
						setFocusTabkey(event);	
					}
				})
				$('.btn_prev_useg a, .btn_next_useg a').on('click',function(){
					if($(this).parent().attr('class') == 'btn_prev_useg'){					
						if(index <= 1){
							index = 4;					
						}else{
							index--;
						}					
					}else{					
						if(index > 3){
							index = 1;					
						}else{
							index++;
						}
					}
					setSpecInfo(index);
				});
				$('.btns_equal_h2tab a').on('click',function(){
					setSpecInfo($(this).index()+1);
				});			
				
				function setSpecInfo($index){
					$('.p_tab > a.on').removeClass('on');
					$('.p_tab0'+$index+' > a').addClass('on').focus();
					$('div.specific_info_useg').addClass('blind');
					$('#spec_info_useg0'+$index).removeClass('blind');
					initHeightUserGuide($('#wrap_userguide'), 0);
					index = $index;
				}
			}else if(index_gnb == 1){	//�쒕퉬�� �곸꽭�덈궡
				//�쒕퉬�� �곸꽭�덈궡
				var $total_menus_useg = $('#total_menus_useg a');
				var $useg_dotboxes = $('.specific_detailcon_useg .useg_dotbox04');
				var $real_contentsboxes = $('.specific_detailcon_useg .real_contentsbox_useg');
				$total_menus_useg.on('click',function(){
					$('.wrap_serviceinfo_useg').hide();
		  			$('.specific_detailcon_useg').show();
		  			$($(this).attr('href')).show().next().show().end()
		  									.find('.real_links_useg a:first').focus();
				});				
				$total_menus_useg.last().on('keydown',function(event){
					setFocusTabkey(event);				
				});
				//�곷떒 ��찓��
				$('.wrap_serviceinfo_useg .useg_dotbox03 a').on('click',function(){
					$('.wrap_serviceinfo_useg .useg_dotbox03 a').removeClass('on');
					if($(this).parent().index() == 0){						
						$(this).addClass('on').focus();	
					}else{
						$(this).addClass('on');	
						$($(this).attr('href') + ' li:eq(0) a').focus();
					}									
				});
				//�쒕퉬�� �곸꽭�덈궡 紐⑸줉 �대룞踰꾪듉			
				$('.go_list_useg a').on({
					'click':function (event) {
						$('.wrap_serviceinfo_useg').show();
			  			$('.specific_detailcon_useg').hide();
			  			$useg_dotboxes.hide();
			  			$real_contentsboxes.hide();
			  			$('.h1_logo_useg a').focus();
			  			//$('.wrap_serviceinfo_useg .useg_dotbox03 li:eq(0) a').focus();
					}
				}).on('keydown',function(event){
					setFocusTabkey(event);				
				})
			}else if(index_gnb == 2){	//異붿쿇�쒕퉬��
				//異붿쿇�쒕퉬�� focusout
				$('.many_elip_style .article04 li:last a').on('keydown',function(event){
					setFocusTabkey(event);				
				});
			}else if(index_gnb == 3){	//�ъ씠�몃㏊
				//�ъ씠�몃㏊ accordian 硫붾돱 �곷떒 ��찓��
				$('.tabsrch_menus_useg li a').on('click',function(){
					if($gnb_useg_index == 3){
						$('.tabsrch_menus_useg li a').removeClass('on');
						$('.menu_top_useg a.btn_opcls_useg').removeClass('on');
						$('.realdept_menus_useg').hide();				
						
						$(this).addClass('on');
						$($(this).attr('href')).show().prev().find('a.btn_opcls_useg').addClass('on').focus();						
						fncGetSiteMap($(this).parent().index()+1);
						/*�ъ씠�몃㏊�� 硫붾돱�쒖꽌媛� 諛붾�붽꼍��*/
						//fncGetSiteMap($(this).attr('href').substr($(this).attr('href').length-1));
						initHeightUserGuide($('#wrap_userguide'), $gnb_useg_index);	//wrap�� �믪씠媛� �ъ꽕��
					}				
				})
				//�ъ씠�몃㏊ accordian 硫붾돱 open/close(硫붾돱紐� �대┃)
				$('.menu_top_useg h3 a').on('click',function(){
					var myIndex = this.href.substr(this.href.length-1);
					fncGetSiteMap($(this).attr("id"));
					setSitemapMenus($(this).parent().parent().find('a.btn_opcls_useg'), myIndex);	
				})
				//�ъ씠�몃㏊ accordian 硫붾돱 open/close(爰쎌뇿踰꾪듉 �대┃)
				$('.menu_top_useg a.btn_opcls_useg').on('click',function(){
					var myIndex = this.href.substr(this.href.length-1);
					fncGetSiteMap($(this).attr("id"));
					setSitemapMenus($(this), myIndex);	
					//console.log(this.href.substr(this.href.length-1));				
					//return false;
				})
				//留덉�留� 硫붾돱(�꾧뎅�ъ뾽��)�� 爰쎌뇿踰꾪듉 �ъ빱�ㅼ븘��
				$('.menu_top_useg a.btn_opcls_useg:last').on('keydown',function(event){
					if(!$(this).hasClass('on')){
						setFocusTabkey(event);
					}								
				})				
				
				function setSitemapMenus($obj, index){
					if($obj.hasClass('on')){
						$obj.removeClass('on');					
						$('.tabsrch_menus_useg li a').removeClass('on');
						$obj.parent().next('.realdept_menus_useg').hide();
					}else{
						$('.menu_top_useg a.btn_opcls_useg').removeClass('on');
						$('.tabsrch_menus_useg li a').removeClass('on');
						$('.realdept_menus_useg').hide();					
						
						$obj.addClass('on');
						$('.tabsrch_menus_useg li').eq(index-1).find('a').addClass('on');
						$obj.parent().next('.realdept_menus_useg').show();					
					}
					initHeightUserGuide($('#wrap_userguide'), $gnb_useg_index);	//wrap�� �믪씠媛� �ъ꽕��
					$obj.focus();
				}
			}else if(index_gnb == 4){	//援щ찓�댁갼湲�
				//援щ찓�댁갼湲�
				$('.tabsrch_menus_useg.old_menusrch_useg li a').on('click',function(){
					$('.tabsrch_menus_useg.old_menusrch_useg li a').removeClass('on');
					$("#mapMenuTitle").text($(this).text()+($(this).attr("menuDivn") == "TEXT" ? "("+$(this).attr("menuText")+")": ""));
					
					fncGetMapping($(this).attr("id"));
					$(this).addClass('on').focus();
				});
				
				setFocusOutLastMenuOfFindOldMenu();	//援щ찓�� focusout
			}
		}

		var fncGetMapping = function(menuCd){
			$("#realdept_menus_useg01").html("");
			if(menuCd != ""){

				$.getJSON("/cmmn/getMapping.json", {upMenuCd: menuCd}, function (returnJson) {
					var objData = returnJson.resultList;
					var i = 1;
					var endDivn = "N";
					var html = "";
					
					if (typeof objData == "object") {
						$.each(objData, function (intIndex, strValue) {
							var result = objData[intIndex];
							if (result.menuLvl == "3"){
								if(i%2 == 1){
									html += "<div class=\"outer_dl_useg clfix\">";
									endDivn="N";
								}
									html+="<dl>";
									html+="	<dt>";
									if(result.menuDivn == 'MENU'){
										if(result.linkTgt == "_script"){
											html+="	<a href=\""+result.htmlUrl+"\" onclick=\""+result.linkUrl+"return false;\" title=\""+result.menuNm+"\">";
										}else{
											html+="	<a href=\""+(result.linkUrl != null && result.linkUrl.indexOf('/ckepco') > -1 ? '' : '')+result.linkUrl+"\" target=\"_blank\" title=\""+result.menuNm+"\">";
										}
									}else if(result.menuDivn == 'LINK'){
										html+="	<a href=\""+result.linkUrl+"\" title=\""+result.menuNm+"\" target=\"_blank\" class=\"cur_def\">";
									}else{
										html+="	<a href=\"#\" title=\""+result.linkUrl+"\" class=\"cur_def\">";
									}
									html+="	<span>"+result.menuNm;
									if(result.menuDivn == 'TEXT'){
										html+="("+result.linkUrl+")";
									}
									html+="</span></a></dt>";
									html+="	<dd>";
										$.each(objData, function (intIndex2, strValue2) {
										var result2 = objData[intIndex2];
											if(result.menuCd == result2.upMenuCd){
											html+="<p>";
												if(result2.menuDivn == 'MENU'){
													if(result2.linkTgt == "_script"){
														html+="<a href=\""+result2.htmlUrl+"\" onclick=\""+result2.linkUrl+"return false;\" title=\""+result2.menuNm+"\">";
													}else{
														html+="<a href=\""+(result2.linkUrl != null && result2.linkUrl.indexOf('/ckepco') > -1 ? '' : '')+result2.linkUrl+"\" target=\"_blank\" title=\""+result2.menuNm+"\">";
													}
												}else if(result2.menuDivn == 'LINK'){
													html+="	<a href=\""+result2.linkUrl+"\" title=\""+result2.menuNm+"\" target=\"_blank\" class=\"cur_def\">";
												}else{
													html+="<a href=\"#\" title=\""+result2.linkUrl+"\" class=\"cur_def\">";
												}
												html+= result2.menuNm;
												if(result2.menuDivn == 'TEXT'){
													html+="("+result2.linkUrl+")";
												}
												html+="</a></p>";
												html+="<ul>";
												if(result2.childCnt > 0){

												$.each(objData, function (intIndex3, strValue3) {
												var result3 = objData[intIndex3];
												if(result2.menuCd == result3.upMenuCd){
												html+="<li>";
												if(result3.menuDivn == 'MENU'){
													if(result3.linkTgt == "_script"){
														html+="<a href=\""+result3.htmlUrl+"\" onclick=\""+result3.linkUrl+"return false;\" title=\""+result3.menuNm+"\">";
													}else{
														html+="<a href=\""+(result3.linkUrl != null && result3.linkUrl.indexOf('/ckepco') > -1 ? '' : '')+result3.linkUrl+"\" target=\"_blank\" title=\""+result3.menuNm+"\">";
													}
												}else if(result3.menuDivn == 'LINK'){
													html+="	<a href=\""+result3.linkUrl+"\" title=\""+result3.menuNm+"\" target=\"_blank\" class=\"cur_def\">";
												}else{
													html+="<a href=\"#\" title=\""+result3.linkUrl+"\" class=\"cur_def\">";
												}
												html += result3.menuNm;
												if(result3.menuDivn == 'TEXT'){
													html+="("+result3.linkUrl+")";
												}
												html +="</a>";
													if(result3.childCnt > 0){
													html+="<ul class=\"last_dept\">";
														$.each(objData, function (intIndex4, strValue4) {
														var result4 = objData[intIndex4];
														if(result3.menuCd == result4.upMenuCd){												
															html+="<li>";
															if(result4.menuDivn == 'MENU'){
																if(result4.linkTgt == "_script"){
																	html+="<a href=\""+result4.htmlUrl+"\" onclick=\""+result4.linkUrl+"return false;\" title=\""+result4.menuNm+"\">";
																}else{
																	html+="<a href=\""+(result4.linkUrl != null && result4.linkUrl.indexOf('/ckepco') > -1 ? '' : '')+result4.linkUrl+"\" target=\"_blank\" title=\""+result4.menuNm+"\">";
																}
															}else if(result4.menuDivn == 'LINK'){
																html+="	<a href=\""+result4.linkUrl+"\" title=\""+result4.menuNm+"\" target=\"_blank\" class=\"cur_def\">";
															}else{
																html+="<a href=\"#\" title=\""+result4.linkUrl+"\" class=\"cur_def\">";
															}
															html += result4.menuNm;
															if(result4.menuDivn == 'TEXT'){
																html+="("+result4.linkUrl+")";
															}
															html +="</a></li>";
														}
														});
														html+="</ul>";
													}
													html+="</li>";
												}
												});
												}
												html+="</ul>";
											}
											});
											html+="</dd>";
											html+="</dl>";
								if(i%2 == 0){
									html+="</div>";
									endDivn = "Y";
								}
								i = i+1;
							}
						});
						if(endDivn == "N") html+="</div>";
						$("#realdept_menus_useg01").html(html);
						initHeightUserGuide($('#wrap_userguide'), $gnb_useg_index);	//wrap�� �믪씠媛� �ъ꽕��
						setFocusOutLastMenuOfFindOldMenu();	//援щ찓�� focusout
					}
				});
			}
		};
		
		var fncGetSiteMap = function(strVal){
			var menuCd = "";
			var kepcoPath = "";
			if(strVal != "1" && $("#realdept_menus_useg0"+strVal).html() == ""){
				if(strVal == "2"){
					menuCd = "FN02";
				}else if(strVal == "3"){
					menuCd = "FN03";
				}else if(strVal == "4"){
					menuCd = "FN06";
					kepcoPath = "";
				}else if(strVal == "5"){
					menuCd = "FN04";
					kepcoPath = "";
				}else if(strVal == "6"){
					menuCd = "FN05";
					kepcoPath = "";
				}else if(strVal == "7"){
					menuCd = "FN12";
					kepcoPath = "";
				}else if(strVal == "8"){
					menuCd = "FN13";
				}else if(strVal == "9"){
					menuCd = "FN14";
					kepcoPath = "";
				}

				$.getJSON("/cmmn/getMenu.json", {upMenuCd: menuCd}, function (returnJson) {
					var objData = returnJson.resultList;
					var i = 1;
					var endDivn = "N";
					var html = "";
					
					if (typeof objData == "object") {
						$.each(objData, function (intIndex, strValue) {
							var result = objData[intIndex];
							if (result.menuLvl == "3" && result.serviceDivn == "N"){
								if(i%3 == 1){
									html += "<div class=\"outer_dl_useg clfix\">";
									endDivn="N";
								}
									html+="<dl>";
									html+="	<dt>";
									if(result.linkTgt == "_script"){
										html+="	<a href=\""+kepcoPath+result.htmlUrl+"\" onclick=\""+result.linkUrl+"return false;\" title=\""+result.menuNm+"\">";
									}else{
										html+="	<a href=\""+kepcoPath+result.linkUrl+"\" target=\""+result.linkTgt+"\" title=\""+result.menuNm+"\">";
									}
									html+="	<span>"+result.menuNm+"</span></a></dt>";
									html+="	<dd>";
										$.each(objData, function (intIndex2, strValue2) {
										var result2 = objData[intIndex2];
											if(result.menuCd == result2.upMenuCd && result2.serviceDivn == "N"){
											html+="<p>";
												if(result2.linkTgt == "_script"){
													html+="<a href=\""+kepcoPath+result2.htmlUrl+"\" onclick=\""+result2.linkUrl+"return false;\" title=\""+result2.menuNm+"\">";
												}else{
													html+="<a href=\""+kepcoPath+result2.linkUrl+"\" target=\""+result2.linkTgt+"\" title=\""+result2.menuNm+"\">";
												}
												html+= result2.menuNm+"</a></p>";
												html+="<ul>";
												if(result2.childCnt > 0){

												$.each(objData, function (intIndex3, strValue3) {
												var result3 = objData[intIndex3];
												if(result2.menuCd == result3.upMenuCd && result3.serviceDivn == "N"){
												html+="<li>";
												if(result3.linkTgt == "_script"){
													html+="<a href=\""+kepcoPath+result3.htmlUrl+"\" onclick=\""+result3.linkUrl+"return false;\" title=\""+result3.menuNm+"\">";
												}else{
													html+="<a href=\""+kepcoPath+result3.linkUrl+"\" target=\""+result3.linkTgt+"\" title=\""+result3.menuNm+"\">";
												}
												html += result3.menuNm+"</a>";
													if(result3.childCnt > 0){
													html+="<ul class=\"last_dept\">";
														$.each(objData, function (intIndex4, strValue4) {
														var result4 = objData[intIndex4];
														if(result3.menuCd == result4.upMenuCd && result4.serviceDivn == "N"){												
															html+="<li>";
															if(result4.linkTgt == "_script"){
																html+="<a href=\""+kepcoPath+result4.htmlUrl+"\" onclick=\""+result4.linkUrl+"return false;\" title=\""+result4.menuNm+"\">";
															}else{
																html+="<a href=\""+kepcoPath+result4.linkUrl+"\" target=\""+result4.linkTgt+"\" title=\""+result4.menuNm+"\">";
															}
															html += result4.menuNm+"</a></li>";
														}
														});
														html+="</ul>";
													}
													html+="</li>";
												}
												});
												}
												html+="</ul>";
											}
											});
											html+="</dd>";
											html+="</dl>";
								if(i%3 == 0){
									html+="</div>";
									endDivn = "Y";
								}
								i = i+1;
							}
						});
						if(endDivn == "N") html+="</div>";
						$("#realdept_menus_useg0"+strVal).html(html);
						initHeightUserGuide($('#wrap_userguide'), $gnb_useg_index);	//wrap�� �믪씠媛� �ъ꽕��
						if(strVal == 9) setFocusOutLastMenuOfSitemap();	//�꾧뎅�ъ뾽�� 硫붾돱媛� �쇱퀜吏�硫� 留덉�留� li focusout �ъ꽕��
					}
				});
			}
		};
		
		//留덉�留� 硫붾돱(�ъ씠�몃㏊ > �꾧뎅�ъ뾽��)�덉쓽 留덉�留� li focusout �ъ꽕��
		function setFocusOutLastMenuOfSitemap(){			
			$('#realdept_menus_useg09 .outer_dl_useg:last li:last a').on('keydown',function(event){
				setFocusTabkey(event);
			})
		}
		
		//留덉�留� 硫붾돱(援щ찓�댁갼湲�)�덉쓽 留덉�留� a focusout �ъ꽕��
		function setFocusOutLastMenuOfFindOldMenu(){
			$('#realdept_menus_useg01 .outer_dl_useg:last a:last').on('keydown',function(event){
				setFocusTabkey(event);				
			})
			$('.old_menusrch_useg02 a:last').on('keydown',function(event){				
				if($('#realdept_menus_useg01').children().length == 0){
					setFocusTabkey(event);
				}
			})
		}
		
		//�믪씠媛� �ъ꽕��
		function initHeightUserGuide($obj, $index){
			var h = $dh;
			var sectionUsegH = [845, 1537, 614, 1811, 1481];
			//console.log($dh, $obj.find('.section_useg').height(), $obj.find('#container_useg').height(), $index, $('body').height());
			if($dh - 140 <= $obj.find('.section_useg').height()){
				if($obj.find('.section_useg').height() < sectionUsegH[$index]){
					h = $obj.find('.section_useg').height() + 210;
				}else{
					h = $obj.find('.section_useg').height() + 140;
				}
			}
			$obj.find('.bg_body_useg').css({	
				"height":h
			});	
		}
		
		function setFocusTabkey(event){
			if(event.keyCode == '9') {
				//alert(event.keyCode);
				$('.h1_logo_useg a').focus();
			}
		}
		
	});//end : document ready	
	
	var fncBannerGet = function(varMenuCd){
		if(varMenuCd != "" && $("#GnbBanner"+varMenuCd).html() == ""){
			$.getJSON("/banner/getBanner.json", {menuCd: varMenuCd}, function (returnJson) {
				var thisData = returnJson.bannerVO;	
				if(thisData){
					$("#GnbBanner"+varMenuCd).html("<a href=\""+thisData.linkUrl+"\" target=\""+(thisData.linkTgt == "Y" ? "_blank" : "_self" )+"\"><img src=\"/cmmn/fms/getImage.do?atchFileId="+thisData.bnrImg+"&fileSn="+thisData.fileSn+"\" alt=\""+thisData.bnrContent+"\"></a>");
				}else{
					$("#GnbBanner"+varMenuCd).html("<span></span>");
				}
			});
		}
	};

})(jQuery);

