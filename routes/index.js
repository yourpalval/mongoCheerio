//inddex = default file that gets looked at first when you creat any directory

var router = require('express').Router();
var axios = require('axios');
var cheerio = require('cheerio');

router.get('/scrape', function(req, res) {
    var results = [];
    axios.get('https://www.article.com/browse/3/tables').then(function(response) {
        var $ = cheerio.load(response);
        $(".product").each(function(i, element) {
                results.push(element);
        });
    })
    .then(function(){
        res.send(results);
    });
})

module.exports = router;