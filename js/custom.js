$(window).on('load', function(){

    var totalLi, crntLi, nextli, prevLi, img, YTlink, imgHdng, imgPrh

    $('.glryBox li').click(function(){
        $(this).addClass('active');
        crntLi = $(this).index()+1;
        totalLi = $('.glryBox li').length;
        nextli = $(this).nextAll('li').length;
        prevLi = $(this).prevAll('li').length;
        
        YTlink = $(this).find('.imgBox img').attr('ytRel'); 
        img = $(this).find('.imgBox img').attr('rel');
        imgHdng = $(this).find('.imgDtl h2').html(); 
        imgPrh = $(this).find('.imgDtl p').html(); 

        if(nextli == 0){
            $('.glryBoxArw .nextGlryArw').addClass('disable');
        }
        if(prevLi == 0){
            $('.glryBoxArw .prevGlryArw').addClass('disable');
        }

        $('.glryBigTrans').fadeIn();

        if(YTlink == null){
            $('.glryBigBox .glryimg').append(`<img src=${img} alt="" />`);
        } else{
            $('.glryBigBox .glryimg').append(`<iframe frameborder="0" tabindex="0" allowfullscreen="true" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" style="background: rgb(0, 0, 0);" src="${YTlink}?fs=1&amp;amp;wmode=opaque&amp;amp;autoplay=1;rel=0"></iframe>`);
        }

        $('.glryBigBox .glryDtl h2').html(imgHdng);
        $('.glryBigBox .glryDtl p').html(imgPrh);

        setTimeout(() => {
            $('.glryBigBox').addClass('anim');      
        }, 500);
        
    });

    $('.nextGlryArw').click(function(){
        if(crntLi == 0){
            $('.glryBoxArw .prevGlryArw').addClass('disable');
        }
        $('.glryBoxArw .prevGlryArw').removeClass('disable');
        if(crntLi < totalLi){
            crntLi++
            $('.glryBigBox').removeClass('anim'); 
            $('.glryBigBox .glryimg').html('');
            $('.glryBigBox .glryDtl h2').html('');
            $('.glryBigBox .glryDtl p').html('');

            YTlink = $('.glryBox li.active').next('li').find('.imgBox img').attr('ytRel'); 
            img = $('.glryBox li.active').next('li').find('.imgBox img').attr('rel');
            imgHdng = $('.glryBox li.active').next('li').find('.imgDtl h2').html(); 
            imgPrh = $('.glryBox li.active').next('li').find('.imgDtl p').html(); 

            $('.glryBox li.active').next('li').addClass('active');
            $('.glryBox li.active').eq(0).removeClass('active');

            if(YTlink == null){
                $('.glryBigBox .glryimg').append(`<img src=${img} alt="" />`);
            } else{
                $('.glryBigBox .glryimg').append(`<iframe frameborder="0" tabindex="0" allowfullscreen="true" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" style="background: rgb(0, 0, 0);" src="${YTlink}?fs=1&amp;amp;wmode=opaque&amp;amp;autoplay=1;rel=0"></iframe>`);
            }
            

            setTimeout(() => {
                $('.glryBigBox').addClass('anim');   
                $('.glryBigBox .glryDtl h2').html(imgHdng);
                $('.glryBigBox .glryDtl p').html(imgPrh);   
            }, 500);

            if(crntLi == totalLi){
                $('.glryBoxArw .nextGlryArw').addClass('disable');
            }
        }
    });

    $('.prevGlryArw').click(function(){
        if(crntLi == 0){
            $('.glryBoxArw .prevGlryArw').addClass('disable');
        }
        
        $('.glryBoxArw .nextGlryArw').removeClass('disable');

        if(crntLi > 1){
            crntLi--
            $('.glryBigBox').removeClass('anim'); 
            $('.glryBigBox .glryimg').html('');
            $('.glryBigBox .glryDtl h2').html('');
            $('.glryBigBox .glryDtl p').html('');

            YTlink = $('.glryBox li.active').prev('li').find('.imgBox img').attr('ytRel'); 
            img = $('.glryBox li.active').prev('li').find('.imgBox img').attr('rel');
            imgHdng = $('.glryBox li.active').prev('li').find('.imgDtl h2').html(); 
            imgPrh = $('.glryBox li.active').prev('li').find('.imgDtl p').html(); 

            $('.glryBox li.active').prev('li').addClass('active');
            $('.glryBox li.active').eq(1).removeClass('active');

            if(YTlink == null){
                $('.glryBigBox .glryimg').append(`<img src=${img} alt="" />`);
            } else{
                $('.glryBigBox .glryimg').append(`<iframe frameborder="0" tabindex="0" allowfullscreen="true" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" style="background: rgb(0, 0, 0);" src="${YTlink}?fs=1&amp;amp;wmode=opaque&amp;amp;autoplay=1;rel=0"></iframe>`);
            }
            

            setTimeout(() => {
                $('.glryBigBox').addClass('anim'); 
                $('.glryBigBox .glryDtl h2').html(imgHdng);
                $('.glryBigBox .glryDtl p').html(imgPrh);     
            }, 500);

            if(crntLi == 1){
                $('.glryBoxArw .prevGlryArw').addClass('disable');
            }
        }

    });

    $(document).click(function (e) {
        //if ($(e.target).hasClass("glryBigTrans") && $(e.target).parents(".glryBigBox").length === 0 ) 
        if ($(e.target).hasClass("glryBigTrans") || $(e.target).hasClass("glryimg") || $(e.target).hasClass("glryDtl") ) 
        {
            $(".glryBigTrans").fadeOut(500);
            $('.glryBigBox .glryimg').html('');
            $('.glryBigBox .glryDtl h2').html('');
            $('.glryBigBox .glryDtl p').html('');
            $('.glryBigBox').removeClass('anim'); 
        }
    });

});