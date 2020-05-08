$(document).ready(function() {
    
    //variables
    $surface = $('.surface');
    // $carSpeed = $('.car');
    $car = $('.car');
    $img = $('.car img');
    $nightSky = $('.night')
    let flag = true;

    const cars = ['./assets/Img_05.png', './assets/Img_06.png'];

    //keypress event
    //vehicle moves with the "enter" keypress
    $(document).on("keypress", function(e) {
        if (e.which == 13) {
            $($surface).toggleClass('moveRight');
            $($car).toggleClass('suspension');
            $($nightSky).toggleClass('nightSky');
            // $($carSpeed).toggleClass('carSpeed');
        }
    })

    //lights turn on and off with the "w" keypress
    $(document).on("keypress", function(e) {
        if (e.which == 119) {
            if (flag) {
                flag = false;
                $img.attr('src', cars[0])
            }
            else {
                flag = true;
                $img.attr('src', cars[1])
            }
        }
    })
});