//.text() in jQuery is similar to textContent() in javaScript
console.log($("h1").text());
console.log($("ul").text());
console.log($("li"));
console.log($("li").text());
console.log($("h1").text("new text"));

//.html() in jQuery is similar to innerHTML() in javaSript
console.log($("ul").html("<li>I Hacked your UL!</li><li>Hello</li>"));