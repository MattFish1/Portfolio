$(document).ready(function () {
    //slide show

        
        $('#parallaxMenu').show();
        $('#normalHeader').hide();
        $('#normalMenu').hide();
        //Change header function
        $(window).scroll(function () {

            if($(window).scrollTop() > 235)
            {
                //$('header').removeClass('parallaxHeader').addClass('normalHeader');
                $('#parallaxMenu').hide();
                $('#normalHeader').show();
                $('#normalMenu').show();
            }
            else {
                $('#parallaxMenu').show();
                $('#normalHeader').hide();
                $('#normalMenu').hide();
            }
        });

    //nav buttons
       
});



