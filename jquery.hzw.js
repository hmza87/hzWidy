/*!
 * jQuery hzWidy
 *
 *
 * Copyright 2018 Hamza El Founassi
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 */

$.fn.loading = function(custom_options){
    var that = this,
        options = {
            text : 'En cours ..',
            image : 'circle2',
            glassy : true,
        },
        stop    = false,
        images = {
            colorfull : 'https://cdn.dribbble.com/users/503653/screenshots/3143656/fluid-loader.gif',
            stack : 'https://oviedogrove.com/loading.gif',
            square : 'https://thumbs.gfycat.com/LameDifferentBalloonfish-max-1mb.gif',
            gears : 'https://loading.io/spinners/gear-set/lg.triple-gears-loading-icon.gif',
            hamster : 'https://darkiemindyou.files.wordpress.com/2015/04/loading6_230x230-cooler.gif',
            circle2 : 'http://superstorefinder.net/support/wp-content/uploads/2018/01/blue_loading.gif',

        },

        inner = $('<div class="hzw_inner"></div>'),
        shadow = $('<div class="hzw_shadow"></div>'),
        text = options.text,
        image = ''
    ;


    if(typeof custom_options == 'boolean'){
        stop = !custom_options;
    }else{
        $.extend(options, custom_options);
    }
    console.log(typeof custom_options, stop);

    //cleaning
    that
        .data('isloading', false)
        .children()
        .removeClass('hzw_glassy_content');
    that
        .find('.hzw_inner')
        .add('.hzw_shadow')
        .hide(20, function(){$(this).remove();})

    if(that.data('oldposition')) {
        that
            .css('position', that.data('oldposition')).removeData('oldposition');
    }

    if(!stop){

        if(['relative', 'absolute'].indexOf(that.css('position')) == -1){
            that.data('oldposition', that.css('position')).css('position', 'relative');
        }

        shadow.appendTo(that).hide().fadeIn('slow');
        inner
            .append($('<img>').attr('src', images[options.image] || images.circle2))
            .append($('<span></span>').html(text))
            .appendTo(that)
            .hide()
            .fadeIn('slow');

        if(options.glassy){
            that.children().addClass('hzw_glassy_content');
        }

        that.data('isloading', true);
    }

    return that;






};
$.fn.isLoading = function(){
    return (this.data('isloading') == true);
}