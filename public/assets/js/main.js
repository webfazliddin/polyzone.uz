(function ($) {
    "use strict";
    $(document).on('ready', function () {


        /*======  Number-Counter-Active ======*/
        $(".count").appear(function () {
            var value = $(this).text();
            $(this).animateNumber({
                number: value,
                numberStep: $.animateNumber.numberStepFactories.separator(',')
            }, 1500);
        });

        $('[data-toggle="tooltip"]').tooltip();


        /*======  custom dropdown ======*/
        function dropdown(e) {
            var obj = $(e + '.dropdown');
            var btn = obj.find('.btn-selector');
            var dd = obj.find('ul');
            var opt = dd.find('li');
            obj.on("mouseenter", function () {
                dd.show();
                $(this).css("z-index", 99);
            }).on("mouseleave", function () {
                dd.hide();
                $(this).css("z-index", "auto")
            })
            opt.on("click", function () {
                dd.hide();
                var txt = $(this).text();
                opt.removeClass("active");
                $(this).addClass("active");
                btn.text(txt);
            });
        }

        dropdown('#filter_by_duration');
        dropdown('#filter_by_category');

        /*====== Dynamic_Accordion ======*/
        $('.accordion-list').each(function () {
            $(this).find('.accoridon-item .title').on('click', function () {
                $(this).parent('.accoridon-item').siblings('.accoridon-item').find('.desc').slideUp();
                $(this).parent('.accoridon-item').siblings('.accoridon-item').find('.title').removeClass('active');
                $(this).siblings('.desc').slideToggle();
                $(this).toggleClass('active');
            });
        });

        /*====== Click-Smoth-Scroll-Script ======*/
        $('.nav_area a[href*="#"]')
            .not('[href="#"]')
            .not('[href="#0"]')
            .on('click', function (event) {
                if (
                    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                    // Figure out element to scroll to
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    // Does a scroll target exist?
                    if (target.length) {
                        // Only prevent default if animation is actually gonna happen
                        event.preventDefault();
                        $('html, body').animate({
                            scrollTop: target.offset().top
                        }, 1000, function () {
                            // Callback after animation
                            // Must change focus!
                            var $target = $(target);
                            $target.focus();
                            if ($target.is(":focus")) { // Checking if the target was focused
                                return false;
                            } else {
                                $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                                $target.focus(); // Set focus again
                            };
                        });
                    }
                }
            });


        $(".dots_list li").hide();
        $(".dots_list li").slice(0, 6).show();
        $(".load_more").on('click', function (e) {
            e.preventDefault();
            $(".dots_list li:hidden").slice(0, 3).slideDown(500);
            if ($(".dots_list li:hidden").length == 0) {
                $(".load_more").fadeOut('slow');
            }
        });





        /*====== nav_menu-Dropdown-Plus-Icon ======*/
        $('.nav_menu .sub-menu').parent('li').children('a').append('<i class="plus"></i>');
        $('.nav_menu .sub-menu').parent('li').children('a').on('click', function () {
            return false;
        });

        /*===== SHOW MENU =====*/
        const navMenu = $('#nav-right'),
            navToggle = $('#nav-toggle'),
            navClose = $('#nav-close');

        /*===== MENU SHOW =====*/
        /* Validate if constant exists */
        if (navToggle) {
            navToggle.on('click', function () {
                navMenu.addClass('show-menu');
            });
        }

        /*===== MENU HIDDEN =====*/
        /* Validate if constant exists */
        if (navClose) {
            navClose.on('click', function () {
                navMenu.removeClass('show-menu');
            });
        }

        /*===== SCROLL REVEAL ANIMATION =====*/
        // const sr = ScrollReveal({
        //     distance: '30px',
        //     duration: 1500,
        //     // reset: true,
        // });
        // sr.reveal(`.anim_top`, {
        //     origin: 'top',
        //     interval: 100,
        // });
        // sr.reveal(`.anim_bottom`, {
        //     origin: 'bottom',
        //     interval: 100,
        // });
        // sr.reveal(`.anim_left`, {
        //     origin: 'left',
        // });
        // sr.reveal(`.anim_right`, {
        //     origin: 'right',
        //     interval: 100,
        // });

        $('.nav_menu').slicknav({
            label: '',
            duration: 500,
            prependTo: '',
            closedSymbol: '<i class="far fa-plus"></i>',
            openedSymbol: '<i class="far fa-minus"></i>',
            appendTo: '.nav_menu',
            menuButton: '#nav_mobile_toggle',
            closeOnClick: 'true' // Close menu when a link is clicked.
        });

        /*====== QUANTITY MINUS PLUS =====*/
        $('.product_quantity .add').on('click', function () {
            $(this).prev().val(+$(this).prev().val() + 1);
        });
        $('.product_quantity .sub').on('click', function () {
            $(this).next().val(+$(this).next().val() - 1);
        });

        //Scroll back to top
        var progressPath = document.querySelector('.progress-wrap path');
        var pathLength = progressPath.getTotalLength();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
        progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
        var updateProgress = function () {
            var scroll = $(window).scrollTop();
            var height = $(document).height() - $(window).height();
            var progress = pathLength - (scroll * pathLength / height);
            progressPath.style.strokeDashoffset = progress;
        }
        updateProgress();
        $(window).scroll(updateProgress);
        var offset = 50;
        var duration = 550;
        jQuery(window).on('scroll', function () {
            if (jQuery(this).scrollTop() > offset) {
                jQuery('.progress-wrap').addClass('active-progress');
            } else {
                jQuery('.progress-wrap').removeClass('active-progress');
            }
        });
        jQuery('.progress-wrap').on('click', function (event) {
            event.preventDefault();
            jQuery('html, body').animate({
                scrollTop: 0
            }, duration);
            return false;
        });

        /*====== Background_SVG_Shape_Append =====*/
        $('body').append('<div class="d-none"><svg width="30" id="scroll_element_1" height="55" viewBox="0 0 30 55" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 39C6.72973 39 0 32.4398 0 24.3749V14.6251C0 6.56079 6.72897 0 15 0C23.271 0 30 6.56019 30 14.6251V24.3749C30 32.4392 23.271 39 15 39ZM15 1.82888C7.76331 1.82888 1.875 7.56905 1.875 14.6258V24.3757C1.875 31.4321 7.76293 37.1726 15 37.1726C22.2371 37.1726 28.125 31.4324 28.125 24.3757V14.6258C28.125 7.56942 22.2371 1.82888 15 1.82888V1.82888Z" fill="currentColor" /><circle cx="14.5" cy="10.5" r="1.5" fill="currentColor" /><path d="M14.2929 54.7071C14.6834 55.0976 15.3166 55.0976 15.7071 54.7071L22.0711 48.3431C22.4616 47.9526 22.4616 47.3195 22.0711 46.9289C21.6805 46.5384 21.0474 46.5384 20.6569 46.9289L15 52.5858L9.34314 46.9289C8.95262 46.5384 8.31946 46.5384 7.92893 46.9289C7.53841 47.3195 7.53841 47.9526 7.92893 48.3431L14.2929 54.7071ZM14 23L14 54L16 54L16 23L14 23Z" fill="currentColor" /></svg><svg width="77" height="16" viewBox="0 0 77 16" id="arrow_left" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.292893 7.2929C-0.0976311 7.68342 -0.097631 8.31659 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8.00001L8.07107 2.34315C8.46159 1.95263 8.46159 1.31946 8.07107 0.928938C7.68054 0.538414 7.04738 0.538414 6.65685 0.928938L0.292893 7.2929ZM77 7L1 7.00001L1 9.00001L77 9L77 7Z" fill="currentColor"/></svg><svg width="77" height="16" viewBox="0 0 77 16" id="arrow_right" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M76.7071 8.70711C77.0976 8.31659 77.0976 7.68342 76.7071 7.2929L70.3431 0.928938C69.9526 0.538414 69.3195 0.538414 68.9289 0.928938C68.5384 1.31946 68.5384 1.95263 68.9289 2.34315L74.5858 8.00001L68.9289 13.6569C68.5384 14.0474 68.5384 14.6805 68.9289 15.0711C69.3195 15.4616 69.9526 15.4616 70.3431 15.0711L76.7071 8.70711ZM-8.74228e-08 9L76 9.00001L76 7.00001L8.74228e-08 7L-8.74228e-08 9Z" fill="currentColor"/></svg><svg width="169" id="proccess_arrow_line" height="9" viewBox="0 0 169 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M167.987 3.14003L162.685 0.148782C162.512 0.0498324 162.315 -0.00149095 162.116 3.29738e-05C161.917 0.00155689 161.721 0.0558738 161.549 0.157458C161.382 0.253082 161.243 0.391257 161.147 0.557944C161.05 0.724632 161 0.913894 161 1.1065V7.089C161 7.28161 161.05 7.47088 161.147 7.63756C161.243 7.80425 161.382 7.94243 161.549 8.03805C161.721 8.13959 161.917 8.19388 162.116 8.1954C162.315 8.19692 162.512 8.14563 162.685 8.04673L167.987 5.05548C168.158 4.96075 168.3 4.82198 168.399 4.65356C168.499 4.48514 168.551 4.29323 168.551 4.09775C168.551 3.90228 168.499 3.71036 168.399 3.54195C168.3 3.37353 168.158 3.23476 167.987 3.14003Z" fill="currentColor"/><circle cx="3.91321" cy="4.4679" r="3.47539" fill="currentColor" stroke="currentColor" stroke-width="0.875648"/><circle opacity="0.5" cx="88.9783" cy="4.46853" r="1.64626" fill="currentColor"/><circle opacity="0.5" cx="51.6463" cy="4.64626" r="1.64626" fill="currentColor"/><circle opacity="0.5" cx="16.6463" cy="4.64626" r="1.64626" fill="currentColor"/><circle opacity="0.5" cx="101.209" cy="4.46853" r="1.64626" fill="currentColor"/><circle opacity="0.5" cx="63.8767" cy="4.64626" r="1.64626" fill="currentColor"/><circle opacity="0.5" cx="28.8767" cy="4.64626" r="1.64626" fill="currentColor"/><circle opacity="0.5" cx="113.439" cy="4.46853" r="1.64626" fill="currentColor"/><circle opacity="0.5" cx="76.1072" cy="4.64626" r="1.64626" fill="currentColor"/><circle opacity="0.5" cx="41.1072" cy="4.64626" r="1.64626" fill="currentColor"/><circle opacity="0.5" cx="125.67" cy="4.46853" r="1.64626" fill="currentColor"/><circle opacity="0.5" cx="137.799" cy="4.46853" r="1.64626" fill="currentColor"/><circle opacity="0.5" cx="150.029" cy="4.46853" r="1.64626" fill="currentColor"/></svg></div>');

    });

})(jQuery);



/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'fa-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'fa-moon' : 'fa-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'fa-moon' ? 'add' : 'remove'](iconTheme)
}

if (themeButton) {
    // Activate / deactivate the theme manually with the button
    themeButton.addEventListener('click', () => {
        // Add or remove the dark / icon theme
        document.body.classList.toggle(darkTheme)
        themeButton.classList.toggle(iconTheme)
        // We save the theme and the current icon that the user chose
        localStorage.setItem('selected-theme', getCurrentTheme())
        localStorage.setItem('selected-icon', getCurrentIcon())
    });
}


/*==================== VIDEO ====================*/
const videoFile = document.getElementById('video_file'),
    videoButton = document.getElementById('video_button'),
    videoIcon = document.getElementById('video_icon'),
    videoContent = document.getElementById('video_content')

function playPause() {
    if (videoFile.paused) {
        // Play video
        videoFile.play()
        // We change the icon
        videoIcon.classList.add('fa-pause')
        videoIcon.classList.remove('fa-play')
        videoContent.classList.add('play')
    } else {
        // Pause video
        videoFile.pause();
        // We change the icon
        videoIcon.classList.remove('fa-pause')
        videoIcon.classList.add('fa-play')
        videoContent.classList.remove('play')

    }
}

if (videoButton) {
    videoButton.addEventListener('click', playPause)
}

function finalVideo() {
    // Video ends, icon change
    videoIcon.classList.remove('fa-pause')
    videoIcon.classList.add('fa-play')
}

if (videoFile) {
    // ended, when the video ends
    videoFile.addEventListener('ended', finalVideo)
}
