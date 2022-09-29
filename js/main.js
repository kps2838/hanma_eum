$(function(){


    // 슬라이드


    let slideNum = 0;
    let position = 0;

    $('#center .slide-btn .prev').click(function(){
        if(slideNum > 0){
            position += 892;
            $('#center .slide-container .images').css('transform', `translateX(${position}px)`)
            slideNum = slideNum-1;
        };

        if(slideNum == slideNum){
            $('#center .slide-btn > div').removeClass('on');
            $('#center .slide-btn > div').eq(slideNum).addClass('on');
        };

        if(slideNum <= 0){
            $('#center .slide-container .images').css('transform', '0');
        }
    });

    $('#center .slide-btn .next').click(function(){
        if(slideNum < 2){
            position -= 892;
            $('#center .slide-container .images').css('transform', `translateX(${position}px)`)
            slideNum = slideNum+1;
        };

        if(slideNum == slideNum){
            $('#center .slide-btn > div').removeClass('on');
            $('#center .slide-btn > div').eq(slideNum).addClass('on');
        };

    });



    // 슬라이드 페이지네이션

    $('#center .slide-btn > div').eq(0).click(function(){
        $('#center .slide-container .images').css('transform', `translateX(0)`);
        $('#center .slide-btn > div').removeClass('on');
        $(this).addClass('on');
    });

    $('#center .slide-btn > div').eq(1).click(function(){
        $('#center .slide-container .images').css('transform', `translateX(-892px)`);
        $('#center .slide-btn > div').removeClass('on');
        $(this).addClass('on');
    });

    $('#center .slide-btn > div').eq(2).click(function(){
        $('#center .slide-container .images').css('transform', `translateX(-1784px)`);
        $('#center .slide-btn > div').removeClass('on');
        $(this).addClass('on');
    });



    // 센터 아이들 hover


    $('#center .slide .images > div[class^=center]').hover(function(){
        $(this).find('.hover-box').addClass('on');
    }, function(){
        $(this).find('.hover-box').removeClass('on');
    })
})