$(function () {
    // common_js_start
    console.log('common_js_start');

    // ======================================= AOS ======================================= 
    AOS.init({
        duration : 700 
    });
    
    // $('select').niceSelect();
    // ======================================= AOS ======================================= 


    
    // ======================================= swiper ======================================= 
    // main_visual
    var mainSwiper = new Swiper('.main_visual.swiper-container', {
        effect: "fade",
        slidesPerView: 1,
        loop: true,
        loopAdditionalSlides: 1,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        lazy: {
            loadPrevNext: true
        },
        touchMoveStopPropagation: true,
        // pagination: {
        //     clickable: true,
        //     el: '.swiper-pagination',
        //     type: 'bullets',
        // },
        // navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev',
        // },
        // on: {
        //     init: function () {
        //         $('.swiper-progress-bar').removeClass('animate');
        //         $('.swiper-progress-bar').removeClass('active');
        //         $('.swiper-progress-bar').eq(0).addClass('animate');
        //         $('.swiper-progress-bar').eq(0).addClass('active');
        //     },
        //     slideChangeTransitionStart: function () {
        //         $('.swiper-progress-bar').removeClass('animate');
        //         $('.swiper-progress-bar').removeClass('active');
        //         $('.swiper-progress-bar').eq(0).addClass('active');
        //     },
        //     slideChangeTransitionEnd: function () {
        //         $('.swiper-progress-bar').eq(0).addClass('animate');
        //     },
        // }
    });

    var swiper_edu = new Swiper('.swiper_edu.swiper-container', {
        effect: "slide",
        slidesPerView: 3.85,
        spaceBetween: 30,
        // loop: true,
        // loopAdditionalSlides: 1,
        // autoplay: {
            // delay: 3000,
            // disableOnInteraction: false,
        // },
        // lazy: {
            // loadPrevNext: true
        // },
        // touchMoveStopPropagation: true,
        pagination: {
            clickable: true,
            el: '.swiper-pagination',
            type: 'bullets',
        },
        navigation: {
            nextEl: '.btn_edu_wrap .swiper-button-next',
            prevEl: '.btn_edu_wrap .swiper-button-prev',
        },
        scrollbar: {
            el: ".swiper-scrollbar",
        },
        // on: {
        //     init: function () {
        //         $('.swiper-progress-bar').removeClass('animate');
        //         $('.swiper-progress-bar').removeClass('active');
        //         $('.swiper-progress-bar').eq(0).addClass('animate');
        //         $('.swiper-progress-bar').eq(0).addClass('active');
        //     },
        //     slideChangeTransitionStart: function () {
        //         $('.swiper-progress-bar').removeClass('animate');
        //         $('.swiper-progress-bar').removeClass('active');
        //         $('.swiper-progress-bar').eq(0).addClass('active');
        //     },
        //     slideChangeTransitionEnd: function () {
        //         $('.swiper-progress-bar').eq(0).addClass('animate');
        //     },
        // }
        breakpoints: {
            1580: {
              slidesPerView: 3.2,  //브라우저가 768보다 클 때
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 2.5,  //브라우저가 1024보다 클 때
              spaceBetween: 15,
            },
          },
    });



    // ======================================= swiper ======================================= 




    

    // ======================================== click Event ========================================
    function toggleClickEvent_01(target_01, target_02){
        $(target_01).click(function(){
            $(target_02).toggleClass('active')
        })
    } 

    // ======================================== hover Event ========================================
    function toggleHoverEvent_01(target_01, target_02){
     
        $(target_01).hover(function(){
            let idx = $(this).index()/2
            console.log(idx)

            $('.header_full').addClass('active');
            $(target_02+':eq('+idx+')').addClass('active')
        })
    } 




    let nowLocation = location.href
        // subPageName = $('.visual_text .text_01').text();

    
    // // header_default 
    // let header = document.querySelector('#header'), 
    //     header_ham = document.querySelector('.header_ham'), 
    //     header_full = document.querySelector('.header_full'), 
    //     depth_01 = document.querySelectorAll('.header_full_list > li');
    //     headerHei = $('#header').height();


    
    // header hover event
    function headerHover_slide(target01, target02) {
        $(target01).hover(function () {
            $(this).children(target02).stop().slideDown("fast");
        }, function () {
            $(this).children(target02).stop().slideUp("fast");
        });
    };



    function headerHover_fade(target01, target02) {
        $(target01).hover(function () {
            $(this).children(target02).stop().fadeIn(200);
            $(this).addClass('active');
        }, function () {
            $(this).children(target02).stop().fadeOut(200);
            $(this).removeClass('active');
        });
    };
    

    
    // header click event
    function headerClick(target01, target02) {
        $(target01).click(function () {
            $(this).children(target02).slideToggle("fast");
        });
    };


    // header Scroll event 
    function headerScroll() {
        $(window).scroll(function () {
            var scroll = $(window).scrollTop(), wh = $(window).height(), headerHei = $('#header').height();
            scroll >= headerHei ? $('#header').addClass('active') : $('#header').removeClass('active');
        });
        //    if($('#header').hasClass('active')) {
        //        $('#header_left img').attr('src','../images/ico/logo_black.svg')
        //    } else {
        //        $('#header_left img').attr('src','../images/ico/logo.svg')
        //    }
    };


    // window resize reload
    function windowResize() {
        window.addEventListener('resize', function () {
            location.reload();
        });
    };


    // header search box
    function headerSearch() {
        $('#header_search_btn').click(function () {
            $('#header_search_box').slideToggle(function () {
                $(this).toggleClass('active');
            });
        });
    };


    // header Full depth
    function headerFullslide() {

        // ver_01
        // for (var i = 0; i < depth_01.length; i++) {
        //     depth_01[i].addEventListener('click', function () {
        //         // $(this).children('ul').slideToggle();
        //         // $(this).siblings().children('ul').slideUp();
        //         $('.header_full_list > li').removeClass('active');
        //         $(this).addClass('active');
        //     });
        // }

        // ver_02 
        $('.header_full_list > li').each(function(item,idx,val){
            $(this).click(function(){
                $('.header_full_list > li').removeClass('active');
                $(this).addClass('active');

                $('#type_01 .header_full_img').css({
                    'background':'url("../images/main/header_bg_0' + item + '.png")no-repeat center/cover',
                });
            })
        })

    };


    // header Right click, header_full.active event.
    function headerRight() {
        header_ham.addEventListener('click', function () {
            $(this).toggleClass('active');

            // if this active 
            if ($(this).hasClass('active')) {
                console.log(header_full);
                $('.header_full, .header_lang, .header_sns').addClass('active');
            } else {
                $('.header_full, .header_lang, header_sns').removeClass('active');
            }
            

            // if header_full active 
            if ($('.header_full').hasClass('active')) {
                $('html').css('overflow-y','hidden')
                /* 
                    $('body').on('scroll touchmove mousewheel', function (e) {
                        e.preventDefault();
                        e.stopPropagation();
                        return false;
                    });
                */
            } else {
                // $('body').off('scroll touchmove mousewheel');
                $('html').css('overflow-y','auto')
            } 
        });
    };


    // page check header active
    function pageCheck() {
        // location Check


        if(nowLocation.indexOf('index.html') >= 0) {
            console.log('Home') 
        } else {
            console.log('subPage') 
            headerLogo()
            subNaviDepth_01()
            $('#sub_nav_01 .depth_01 > a').text(subPageName)
            
            $('#sub_visual .visual_text').addClass('active')
        }

        (nowLocation.indexOf('/system/') >= 0) ? subNavi_add_system() : null;
        (nowLocation.indexOf('/about/') >= 0) ? subNavi_add_about() : null;
        // (nowLocation.indexOf('index.html') >= 0) ? console.log('Home') :  headerLogo();

        // let subNaviEvent = $('#sub_navi .content_wrap .text_02').text();
        // let LinkActive = $('.link_wrap a');
        // // link_wrap auto active
        // LinkActive.each(function (idx) {
        //     (subNaviEvent == LinkActive.eq(idx).text()) ? $(this).addClass('active') : null;
        // });
    };


    // function headerLogo() {
    //     $('#header_left a img').attr('src', '../images/ico/logo_black.svg');
    //     headerScroll();
    // };

    // ======================================== default_json ========================================
    
    // sub_page_navi
    function subNaviDepth_01() {
        let tagList_01 = '';

        fetch('../js/data.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('ERROR_01')
                }
                return response.json()
            })
            .then((data) => {

                let addList = data.subNaviDepth_01
                for (let i = 0; i < addList.length; i++) {
                    tagList_01 = '<li class="depth_02_list"><a href="' + addList[i].href + '">' + addList[i].title + '</a></li>'
                    $('#sub_nav_01 .depth_02').append(tagList_01);
                }
                // $('#sub_nav_02 .depth_02').append(tagList)

            })
            .catch(() => {
                console.log('ERROR_02')
            })
    };

    // about
    function subNavi_add_about() {
        let tagList_01 = '';

        fetch('../js/data.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('ERROR_01')
                }
                return response.json()
            })
            .then((data) => {

                let addList = data.subNavi_about
                
                for (let i = 0; i < addList.length; i++) {
                    tagList_01 = '<li class="depth_02_list"><a href="' + addList[i].href + '">' + addList[i].title + '</a></li>'
                    $('#sub_nav_02 .depth_02').append(tagList_01);
                }
                // $('#sub_nav_02 .depth_02').append(tagList)

            })
            .catch(() => {
                console.log('ERROR_02')
            })
    };

    // system
    function subNavi_add_system() {
        let tagList_01 = '';

        fetch('../js/data.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('ERROR_01')
                }
                return response.json()
            })
            .then((data) => {

                let addList = data.subNavi_system
                
                for (let i = 0; i < addList.length; i++) {
                    tagList_01 = '<li class="depth_02_list"><a href="' + addList[i].href + '">' + addList[i].title + '</a></li>'
                    $('#sub_nav_02 .depth_02').append(tagList_01);
                }
            })
            .catch(() => {
                console.log('ERROR_02')
            })
    };



    // ======================================== play ========================================
    async function btnParty() {
        let click = true;
        $(".event_btn").click(function(e) {
            if (click) {
                click = !click;

                party.confetti(this, {
                    count: party.variation.range(100, 40),
                });

                setTimeout(() => {click = true;}, 3000);
            }        
        });
    };
    



    // header function
    // headerScroll()
    // headerHover('.header_center > li', '.depth_01');
    // headerClick('.header_lang > ul', '.more_lang');
    // headerFullslide(); //type_01 change
    // headerRight();
    // page function
    // pageCheck();

    $('.header_full').hide()
    headerHover_fade('.header_center .depth_01', '.header_full')
    
    toggleClickEvent_01('.quick_btn', '#quick_menu')
    

    // common_js_end
    btnParty()
    console.log('common_js_end');
});
