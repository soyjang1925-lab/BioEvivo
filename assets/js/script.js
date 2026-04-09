$(document).ready(function() {
    if (window.innerWidth > 991) {

        $('.menu').on('mouseenter', function() {
            $('.sub-menu-list').stop().slideDown();
            $('.menu-bg').stop().slideDown();
        })
        $('.menu').on('mouseleave', function() {
            $('.sub-menu-list').stop().slideUp();
            $('.menu-bg').stop().slideUp();
        })
    }
    

    // $('.menu-bg').on('mouseenter', function() {
    //     $('.sub-menu-list').stop().slideDown();
    //     $('.menu-bg').stop().slideDown();
    // })
    // $('.menu-bg').on('mouseleave', function() {
    //     $('.sub-menu-list').stop().slideUp();
    //     $('.menu-bg').stop().slideUp();
    // })



    

    if (window.innerWidth < 992) {
        $('.menu').on('click',function(){
            $(this).find('.sub-menu-list').stop().slideToggle(300); 
        });

    }
    
    // 언어 전환 로직 (기존 유지)
    $('.dropdown-item').click(function(e) {
        e.preventDefault();
        const lang = $(this).data('lang');
        $('#langSelector').text(lang);
        $('.dropdown-item').removeClass('d-none');
        $(this).addClass('d-none');
    });
});


$(document).ready(function() {
    var counted = 0;

    $(window).on('scroll', function() {
        // 컨테이너가 화면 하단에 걸칠 때 시작하도록 계산
        var counterOffset = $('.info-counter-container').offset().top;
        var windowHeight = window.innerHeight;
        var scrollTop = $(window).scrollTop();

        // 숫자가 아직 카운트되지 않았고, 스크롤 위치가 컨테이너 근처에 왔을 때
        if (counted == 0 && scrollTop > (counterOffset - windowHeight + 100)) {
            $('.counter').each(function() {
                var $this = $(this);
                var countTo = parseInt($this.attr('data-count')); // HTML의 data-count 값 가져오기

                $({ countNum: 0 }).animate({
                    countNum: countTo
                }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function() {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        // 최종 수치 뒤에 기호 붙이기
                        var val = this.countNum;
                        if (val == 580) {
                            $this.text(val + "kL");
                        } else if (val == 300 || val == 180) {
                            $this.text(val + "+");
                        } else {
                            $this.text(val);
                        }
                    }
                });
            });
            counted = 1; // 중복 실행 방지
        }
    });
});