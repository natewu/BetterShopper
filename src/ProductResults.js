import $ from 'jquery';

$("#form").submit(function (e) {
  e.preventDefault()

  var query = $("#search").val()

  let result = ' '

//   var API_KEY = 'c2c72910bdce795130fc2176129f64c8'
  var API_KEY = '93F8D851D4D64EE88806C1895ACC8918'

  var url = 'https://api.scaleserp.com/search?api_key=' + API_KEY + '&q=' + query + '&shopping_buy_on_google=false&shopping_price_min=100&shopping_condition=used&include_html=false&google_domain=google.ca&location=Canada&url=&gl=ca&hl=en&search_type=shopping&sort_by=review_score&page=1&output=json'
//   var url = 'http://api.serpstack.com/search?access_key='+ API_KEY + '&type=shopping&query=' + query
  console.log(url)

  $.get(url, function(data) {
    $("#result").html('')
    console.log(data)
    
    data.shopping_results.forEach(res => {
      result = `
      <h1>${res.title}</h1><br><h2>$${res.price}</h2><br><a target ="_blank" href="${res.link}"${res.url}</a>
      <p>${res.snippet}</p>
      <img src = ${res.image}></img>

      `
      $("#result").append(result)
    })

  })
})
