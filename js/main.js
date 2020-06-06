var random;

$('.plus-btn').click(function(){
    $('body').toggleClass('menu-open');
  })

function randomQuoteSelector(){
    random = Math.floor(Math.random() * quotes.length);
   // document.getElementById("quote").innerHTML = "";
   var randomQuote =  document.createTextNode(quotes[random]);

    document.getElementById("quote-wrapper")
    .appendChild(
        document.createTextNode( '"' + quotes[random].toString() + '"')
    );

}

randomQuoteSelector();