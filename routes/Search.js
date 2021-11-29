const express = require('express')
const router = express.Router()
const axios = require("axios");
const cheerio = require("cheerio");
require('dotenv').config();
const puppeteer = require("puppeteer");
var request = require('request');
const mongoose = require("mongoose");
const { connectionURL } = require("../config");
const { torrent } = require("../models/torrents");
const cookieParser = require("cookie-parser");

mongoose.connect(connectionURL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

const escapeRegex = (text) => {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};


const baseURL = "https://kickasstorrents.unblockninja.com/search";

function getSize(inp){
    if(inp.includes("MB")){
        return parseInt(inp.trim().replace("MB","").trim());
    }

    return parseInt(inp.trim().replace("MB","").trim())*1000;
}

function getDate(inp){
    if(inp.includes("min") || inp.includes("hour")){
        return (new Date()).getTime();
    }
    inp.replace("days","");
    inp.replace("day","");
    return (new Date()).getTime() - parseInt(inp.trim())*24*3600*1000;
}

async function getMagnet(lnk){
    
    const browser = await puppeteer.launch({
        headless: true,
        args: ["--no-sandbox",'--disable-setuid-sandbox']
    });
    const puppetPage = await browser.newPage({waitUntil: 'load', timeout: 0});
    await puppetPage.goto(lnk,{waitUntil: 'load', timeout: 0});
    const bodyHTML = await puppetPage.evaluate(() => document.body.innerHTML);
    const $ = await cheerio.load(bodyHTML);
    const links = await $('#mainDetailsTable > tbody > tr > td:nth-child(1) > div.buttonsline.downloadButtonGroup.clearleft.novertpad > a.kaGiantButton.siteButton.iconButton');
    const link = await links.attr("href");
    await browser.close();
    return link;
    
}


async function parse(keywrd){
    const browser = await puppeteer.launch({
        headless: true,
        args: ["--no-sandbox",'--disable-setuid-sandbox']
    });
    const puppetPage = await browser.newPage({waitUntil: 'load', timeout: 0});
       
                const currentPage = `${baseURL}/${keywrd}/1`;
                console.log(currentPage)
                await puppetPage.goto(currentPage,{waitUntil: 'load', timeout: 0});
                const bodyHTML = await puppetPage.evaluate(() => document.body.innerHTML);
                const $ = await cheerio.load(bodyHTML);
                const table = $("#wrapperInner > div.mainpart > table > tbody > tr > td:nth-child(1) > table > tbody > tr > td > div > table > tbody").children().toArray();
                console.log(table.length)
                table.forEach(async (itr,i,arr) => {
                    try{
                        if(i != 0){
                            const tds = $(itr).children().toArray();
                            let currTorrent = {};
                            currTorrent.Name = $(tds[0]).text().trim().substring(0,$(tds[0]).text().trim().indexOf("Posted by")).trim();
                            currTorrent.Link = baseURL + $($(tds[0]).children().children()[0]).attr("href")?.trim().replace('#','');
                            currTorrent.Size = getSize($(tds[1]).text().trim().trim());
                            currTorrent.UploadDate = getDate($(tds[3]).text().trim().trim());
                            currTorrent._id = currTorrent.Link;
                            currTorrent.Magnet = await getMagnet(currTorrent.Link);
                            currTorrent.Source = "KATCR";
                            currTorrent.Seeders = parseInt($(tds[4]).text().trim());
                            currTorrent.Leechers = parseInt($(tds[5]).text().trim());
                            (new torrent(currTorrent)).save((err)=>{
                                if(err){
                                    console.error(err);
                                }else{
                                    console.log(`Added ${currTorrent.Name}`);
                                }
                            });   
                        }
                    }
                    catch(error){
                        console.log(error);
                    }
                
                });
    await browser.close();
    console.log("done");
}

function findTorrents(regex,res){
    torrent.find({"Name":regex}, async (err,foundTorrents)=>{
        if(foundTorrents.length == 0){
            findTorrents(regex,res)
        }
        else{
            res.json(foundTorrents);
        }
    })
}

router.get("/",(req,res)=>{
    if(req.query.search){
        const regex = new RegExp(escapeRegex(req.query.search.toString()), "gi");
        const key = escapeRegex(req.query.search.toString());
        console.log(key)
        torrent.find({"Name":regex}, async (err,foundTorrents)=>{
            if(err){
                console.log(err)
            }
            else{
                if(foundTorrents.length == 0)
                {
                    await parse(key);
                    findTorrents(regex,res);

                }
                else{
                res.json(foundTorrents);
                }
            }
        })    
        console.log("done2")
    }
})

module.exports = router;
