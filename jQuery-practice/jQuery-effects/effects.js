//***********************************FADING*********************************** */

//this fades out the divs in 1 second when the button is clicked, eliminate display:none to make this work
// $('button').on("click", function() {
//     $('div').fadeOut(1000, function() {
//         $(this).remove();
//     });
// });

//this fades in the divs when the button is clicked
// $('button').on("click", function() {
//     $('div').fadeIn(1000, function() {
//     });
// });

//this toggles between fading in and fading out when the button is clicked, eliminate display:none to make this work
// $('button').on("click", function() {
//     $('div').fadeToggle(1000, function() {
//     });
// });


//****************************************SLIDING************************************ */

//set display to none for this to work
// $('button').on("click", function() {
//     $('div').slideDown();
// });


// $('button').on("click", function() {
//     $('div').slideUp();
// });

//you can set an optional callback function to log something or remove the elements after the code above is executed
$('button').on("click", function() {
    $('div').slideToggle(1000, function() {
        console.log('slide is done');
        // $(this).remove();
    });
});