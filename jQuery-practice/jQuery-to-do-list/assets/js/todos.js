//***************************check off specific todos by clicking them***********************************
// $('li').click(function() {
//     $(this).css("color", "gray");
//     $(this).css("text-decoration", "line-through");
// });

//this is does the same thing as the function above but insted of having 2 separate lines, it 
//handles it in an object with key value pairs
// $('li').click(function() {
//     $(this).css({
//         color: "gray",
//         textDecoration: "line-through"
//     });
// });

//this is the long way to write the logic
// $('li').click(function() {
//     //if li is grey
//     if($(this).css("color") === "rgb(128, 128, 128)") {
//         //turn it black
//         $(this).css("color", "black");
//         $(this).css("text-decoration", "none");
//     }
//     else {
//         $(this).css("color", "gray");
//         $(this).css("text-decoration", "line-through");
//     }
// });

//this is a much shorter way to write it because it uses a class and css to toggle
$('ul').on("click", "li", function() {
    $(this).toggleClass("completed")
});

//********************remove todos when the x is clicked******************************** */
$('ul').on("click", "span", function(event) {
    $(this).parent().fadeOut(250, function() {
        $(this).remove();
    });
    event.stopPropagation();
});

//*****************add a todo to the list of lis and remove it from the input box when you press enter********** */
$("input[type='text']").keypress(function(event) {
    if(event.which === 13) {
        let todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
    }
});

// $(".fa-plus").click(function() {
//     $("input[type='text']").fadeToggle()
// });