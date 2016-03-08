var request = require('request');
var cheerio = require('cheerio');


request(["http://cnj.craigslist.org/search/ela"], function (error, response, html) {
  var $ = cheerio.load(html);
  var result = [];
  $('.hdrlnk').each(function(i, element){

    //scrape some stuff, put it in an object and add it to the result array

    var title = $(this).prev();

    var titletextonly = $('.hdrlnk:first-child').text();
    console.log(titletextonly);

    // var price = $('')

    // var rank = a.parent().parent().text();
    // var title = a.text();
    // var url = a.attr('href');
    // var subtext = a.parent().parent().next().children('.subtext').children();
    // var points = $(subtext).eq(0).text();
    // var username = $(subtext).eq(1).text();
    // var comments = $(subtext).eq(2).text();
    // // Our parsed meta data object
    // var metadata = {
    //   rank: parseInt(rank),
    //   title: title,
    //   url: url,
    //   points: parseInt(points),
    //   username: username,
    //   comments: parseInt(comments)
    // };
    // console.log(metadata);







    });
  console.log(result);
});




// Matt's Correct Solution:

// request(["http://www.cnn.com/"], function (error, response, html) {
//  var $ = cheerio.load(html);
//  var result = [];
//  $('.cd__headline-text').each(function(i, element){

//    var title = $(this).text();
//    var link = $(element).children().attr('href');
  
//    result.push({
//      title: title,
//      link: link
//    })

   

//    });
//  console.log(data);
// });