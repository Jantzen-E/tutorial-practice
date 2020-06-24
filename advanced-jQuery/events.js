//***********************.click()******************************* */

//this is the jQuery way to make a click listener on the h1 that will alert the following message when clicked
$('h1').click(function() {
    alert('h1 clicked');
});

// this adds an event listener to each button that will alert the following message
$('button').click(function() {
    alert('button clicked');
});

//this changes the color of the button once it is clicked on
$('button').click(function() {
    $(this).css('background', 'pink')
});

//this logs the text content of what the button says
$('button').click(function() {
    let text = $(this).text();
    console.log("you clicked " + text)
});


//************************.keypress()********************************** */

//this logs 'you pressed a key' whenever you type something in the input box
$('input').keypress(function() {
    console.log('you pressed a key');
});

//this triggers an alert when you push enter inside of the input box, enter is keycode 13
$('input').keypress(function(event) {
    if(event.which === 13) {
        alert('you hit enter');
    }
    console.log(event);
});


//*************************.on()******************************************* */

//when you click on an h2, it will turn purple
$('h2').on('click', function() {
   $(this).css('color', 'purple'); 
});

//when you press any key in the input box, the console will say 'a key was pressed'
$('input').on('keypress', function() {
    console.log('a key was pressed');
});

//this will log each time a mouse enters into the border of a button
$('button').on('mouseenter', function() {
    console.log('mouse enter');
});

//this will change the font to bold when the mouse enters the border of a button
$('button').on('mouseenter', function() {
    $(this).css('font-weight', 'bold');
});

//this will change the font back to normal when the mouse leaves the border of the button
$('button').on('mouseleave', function() {
    $(this).css('font-weight', 'normal');
});


