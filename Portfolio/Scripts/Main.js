$(document).ready(function () {
    //slide show

        
        $('#parallaxMenu').show();
        $('#normalHeader').hide();
        $('#normalMenu').hide();
        //Change header function
        $(window).scroll(function () {

            if($(window).scrollTop() > 225)
            {
                //$('header').removeClass('parallaxHeader').addClass('normalHeader');
                $('#parallaxMenu').hide();
                $('#parallaxTitle').hide();
                $('#normalHeader').fadeIn();
                $('#normalMenu').fadeIn();
            }
            else {
                $('#parallaxMenu').show();
                $('#normalHeader').hide();
                $('#normalMenu').hide();
            }
        });

    //nav buttons
       
});



