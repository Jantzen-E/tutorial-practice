//.text() in jQuery is similar to textContent() in javaScript
console.log($("h1").text());
console.log($("ul").text());
console.log($("li"));
console.log($("li").text());
console.log($("h1").text("new text from using jQuery"));

//.html() in jQuery is similar to innerHTML() in javaSript
console.log($("ul").html("<li>I Hacked your UL!</li><li>Hello</li>"));

//select img tag and edit how it behaves
console.log($('img').css("width", "200px"));
console.log($('img:first-of-type').attr("src", "https://storage.needpix.com/rsynced_images/marten-500115_1280.jpg"));
//you can also say img:first instead of img:first-of-type and the result will be the same

//this way uses .last which edits the last img tag and updates the src with a new url
console.log($('img').last().attr("src", "https://external-preview.redd.it/zKRnKv9lMmJMsatFFv_9_8qCpOuSOoLzzqEKMl8tYPE.jpg?auto=webp&s=dbc4d10cbce24a2210f79003e7f0529328afdfa2"));

//select the input field and change type to password
console.log($('input').attr("type", "password"));

//this sets the value of the select dropdown to Toad
console.log($('select').val("Toad"));

//this adds a class that has already been defined to the h1
console.log($('h1').addClass('correct'));

//this removes the class that was just added
console.log($('h1').removeClass('correct'));

//this adds the class wrong
console.log($('h1').toggleClass('wrong'));

//this toggles the class wrong so it does not apply it
console.log($('h1').toggleClass('wrong'));

//the first li will have the done class
console.log($('li').first().toggleClass('done'));