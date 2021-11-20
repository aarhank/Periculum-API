

const axios = require("axios");
const cheerio = require("cheerio");
const puppeteer = require("puppeteer");
var request = require('request');

var URL = 'https://kickasstorrents.to/red-notice-2021-720p-nf-webrip-800mb-x264-galaxyrg-t5049113.html';

async function parse(){
    
    const browser = await puppeteer.launch({
        headless: true,
        args: ["--no-sandbox",'--disable-setuid-sandbox']
    });
    const puppetPage = await browser.newPage();
    await puppetPage.goto(URL);
    const bodyHTML = await puppetPage.evaluate(() => document.body.innerHTML);
    const $ = await cheerio.load(bodyHTML);
    const links = $('#tab-main > div.torrentMediaInfo > div.sharingWidgetBox > div.sharingWidget.borderrad3px.floatleft > a');
    const link = links.attr("href");
    
    await browser.close();
    return link;

}
parse();
// const axios = require("axios");
// const cheerio = require("cheerio");
// const { children } = require("cheerio/lib/api/traversing");
// const puppeteer = require("puppeteer");
// var request = require('request');
// console.log("hello");
// request(URL, function (error, response, html) {

//     var $ = cheerio.load(html);
    

//     $('.siteButton').each(function() {
//         var text = $(this).text();
//         var link = $(this).attr('href');
//         console.log(text);
//         console.log(link)
//       });
//     // const magnet = $('.siteButton');
//     // const ggh = magnet.attr("href");
//     // console.log(magnet.html);
//     // console.log(ggh)
    
// });