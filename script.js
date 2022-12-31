function randomQuote() {
  $.ajax({
    url: 'https://api.forismatic.com/api/1.0/?',
    dataType: 'jsonp',
    data: 'method=getQuote&format=jsonp&lang=en&jsonp=?',
    success: function (response) {
      $('#text').html("<span id='text'>" + response.quoteText + '</span>')

      $('#author').html("<span id='author'>" + response.quoteAuthor + '</span>')

      $('#tweet-quote').attr(
        'href',
        'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
          encodeURIComponent(
            '"' + response.quoteText + '" ' + response.quoteAuthor
          )
      )

      $('#tumblr-quote').attr(
        'href',
        'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=' +
          encodeURIComponent(response.quoteAuthor) +
          '&content=' +
          encodeURIComponent(response.quoteText) +
          '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button'
      )
    },
  })
}

$(function () {
  randomQuote()
})

$('#new-quote').click(function () {
  randomQuote()
})
