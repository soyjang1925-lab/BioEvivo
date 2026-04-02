$(document).ready(function() {
    // 마우스 엔터/리브 이벤트 (데스크탑 화면에서만 작동하게 권장)
    $('.custom-menu').hover(
        function() {
            $(this).find('.sub-menu-list').stop(true, true).slideDown(300);
        },
        function() {
            $(this).find('.sub-menu-list').stop(true, true).slideUp(200);
        }
    );
    
    // 언어 전환 로직 (기존 유지)
    $('.dropdown-item').click(function(e) {
        e.preventDefault();
        const lang = $(this).data('lang');
        $('#langSelector').text(lang);
        $('.dropdown-item').removeClass('d-none');
        $(this).addClass('d-none');
    });
});