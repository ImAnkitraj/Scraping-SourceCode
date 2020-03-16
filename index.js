const scrape = require('website-scraper');
var websiteUrl = 'https://www.youtube.com/';
let options = {
    urls: [websiteUrl],
    directory: './youtube',
    //Enable recursive download
    recursive: true,
    //Follow only the links from the first page (index)
    //then the links from other pages won't be followed
    maxDepth: 1,
    urlFilter: function(url) {

        //If url contains the domain of the website, then continue
        if (url.indexOf(websiteUrl) === 0) {
            console.log(' Url ' + url + ' matches ' + websiteUrl);
            return true;
        }
        return false;
    }
}

scrape(options).then((result) => {
    console.log('Website successfully downloaded');
}).catch((err) => {
    console.log('An Error occurred', err);
});