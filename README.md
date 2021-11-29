

## Preiculum API- Torrent scraper

<img alt="Javascript" src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"/> <img alt="Nodejs" src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/> <img alt="Puppeteer" src="https://img.shields.io/badge/Puppeteer-40B5A4?style=for-the-badge&logo=Puppeteer&logoColor=white"/>

A __working api__ for accessing kickasstorrent Torrents data .    


BASE URL: https://periculum.herokuapp.com/  


## Getting Started

It has only one endpoint that is for search, you can pass in an query for the data you want to access like

**Request:** 
```/search?search=tv```

**Response:**
listing a few here because there are a lot

```
[
    {
        "_id": "https://kickasstorrents.unblockninja.com/jeopardy-2021-11-18-720p-hdtv-h-264-ntb-t5056788.html",
        "Seeders": 9,
        "Leechers": 6,
        "Source": "KATCR",
        "Name": "Jeopardy 2021 11 18 720p HDTV H 264-NTb",
        "Link": "https://kickasstorrents.unblockninja.com/jeopardy-2021-11-18-720p-hdtv-h-264-ntb-t5056788.html",
        "Magnet": "magnet:?xt=urn:btih:34E10C4514F200075E777A2D8CC1AD213FF85139&dn=Jeopardy.2021.11.18.720p.HDTV.H.264-NTb&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A6969&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.zer0day.to%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fcoppersurfer.tk%3A6969%2Fannounce",
        "Size": 312,
        "UploadDate": 1637317462366
    },
    {
        "_id": "https://kickasstorrents.unblockninja.com/the-blacklist-s09e05-720p-hdtv-x264-syncopy-tgx-t5056808.html",
        "Seeders": 0,
        "Leechers": 0,
        "Source": "KATCR",
        "Name": "The Blacklist S09E05 720p HDTV x264-SYNCOPY TGx",
        "Link": "https://kickasstorrents.unblockninja.com/the-blacklist-s09e05-720p-hdtv-x264-syncopy-tgx-t5056808.html",
        "Magnet": "magnet:?xt=urn:btih:2148C5712A0B9A91517A3817902D51E3AA9C8479&dn=The.Blacklist.S09E05.720p.HDTV.x264-SYNCOPY%5BTGx%5D&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ffasttracker.foreverpirates.co%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.cyberia.is%3A6969%2Fannounce&tr=udp%3A%2F%2Fipv4.tracker.harry.lu%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.uw0.xyz%3A6969%2Fannounce&tr=udp%3A%2F%2Fopentracker.i2p.rocks%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.birkenwald.de%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.moeking.me%3A6969%2Fannounce&tr=udp%3A%2F%2Fopentor.org%3A2710%2Fannounce&tr=udp%3A%2F%2Ftracker.dler.org%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.zer0day.to%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fcoppersurfer.tk%3A6969%2Fannounce",
        "Size": 855,
        "UploadDate": 1637317462363
    },
    {
        "_id": "https://kickasstorrents.unblockninja.com/young-sheldon-s05e07-720p-hdtv-x264-syncopy-tgx-t5056769.html",
        "Seeders": 61,
        "Leechers": 26,
        "Source": "KATCR",
        "Name": "Young Sheldon S05E07 720p HDTV x264-SYNCOPY TGx",
        "Link": "https://kickasstorrents.unblockninja.com/young-sheldon-s05e07-720p-hdtv-x264-syncopy-tgx-t5056769.html",
        "Magnet": "magnet:?xt=urn:btih:AA61B86CB235CC89F96467303DF959A306BD96C5&dn=Young.Sheldon.S05E07.720p.HDTV.x264-SYNCOPY%5BTGx%5D&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ffasttracker.foreverpirates.co%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.cyberia.is%3A6969%2Fannounce&tr=udp%3A%2F%2Fipv4.tracker.harry.lu%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.uw0.xyz%3A6969%2Fannounce&tr=udp%3A%2F%2Fopentracker.i2p.rocks%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.birkenwald.de%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.moeking.me%3A6969%2Fannounce&tr=udp%3A%2F%2Fopentor.org%3A2710%2Fannounce&tr=udp%3A%2F%2Ftracker.dler.org%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.zer0day.to%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fcoppersurfer.tk%3A6969%2Fannounce",
        "Size": 416,
        "UploadDate": 1637317462368
    },
    {
        "_id": "https://kickasstorrents.unblockninja.com/b-positive-s02e06-hdtv-x264-phoenix-t5056760.html",
        "Seeders": 48,
        "Leechers": 22,
        "Source": "KATCR",
        "Name": "B Positive S02E06 HDTV x264-PHOENiX",
        "Link": "https://kickasstorrents.unblockninja.com/b-positive-s02e06-hdtv-x264-phoenix-t5056760.html",
        "Magnet": "magnet:?xt=urn:btih:286D26EA6AC86B3C2FEEA229FA397E427559C9BC&dn=B.Positive.S02E06.HDTV.x264-PHOENiX&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ffasttracker.foreverpirates.co%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.cyberia.is%3A6969%2Fannounce&tr=udp%3A%2F%2Fipv4.tracker.harry.lu%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.uw0.xyz%3A6969%2Fannounce&tr=udp%3A%2F%2Fopentracker.i2p.rocks%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.birkenwald.de%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.moeking.me%3A6969%2Fannounce&tr=udp%3A%2F%2Fopentor.org%3A2710%2Fannounce&tr=udp%3A%2F%2Ftracker.dler.org%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.zer0day.to%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fcoppersurfer.tk%3A6969%2Fannounce",
        "Size": 161,
        "UploadDate": 1637317462371
    },
    {
        "_id": "https://kickasstorrents.unblockninja.com/b-positive-s02e06-720p-hdtv-x264-syncopy-tgx-t5056758.html",
        "Seeders": 27,
        "Leechers": 11,
        "Source": "KATCR",
        "Name": "B Positive S02E06 720p HDTV x264-SYNCOPY TGx",
        "Link": "https://kickasstorrents.unblockninja.com/b-positive-s02e06-720p-hdtv-x264-syncopy-tgx-t5056758.html",
        "Magnet": "magnet:?xt=urn:btih:0EEC21AC7F608D77933213E911635352158269B7&dn=B.Positive.S02E06.720p.HDTV.x264-SYNCOPY%5BTGx%5D&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ffasttracker.foreverpirates.co%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.cyberia.is%3A6969%2Fannounce&tr=udp%3A%2F%2Fipv4.tracker.harry.lu%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.uw0.xyz%3A6969%2Fannounce&tr=udp%3A%2F%2Fopentracker.i2p.rocks%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.birkenwald.de%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.moeking.me%3A6969%2Fannounce&tr=udp%3A%2F%2Fopentor.org%3A2710%2Fannounce&tr=udp%3A%2F%2Ftracker.dler.org%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.zer0day.to%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fcoppersurfer.tk%3A6969%2Fannounce",
        "Size": 530,
        "UploadDate": 1637317462371
    },
    {
        "_id": "https://kickasstorrents.unblockninja.com/young-sheldon-s05e07-hdtv-x264-phoenix-t5056770.html",
        "Seeders": 145,
        "Leechers": 67,
        "Source": "KATCR",
        "Name": "Young Sheldon S05E07 HDTV x264-PHOENiX",
        "Link": "https://kickasstorrents.unblockninja.com/young-sheldon-s05e07-hdtv-x264-phoenix-t5056770.html",
        "Magnet": "magnet:?xt=urn:btih:9DAF193C277ECDF6C4A21D32C3A8B32CC02D8E65&dn=Young.Sheldon.S05E07.HDTV.x264-PHOENiX&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ffasttracker.foreverpirates.co%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.cyberia.is%3A6969%2Fannounce&tr=udp%3A%2F%2Fipv4.tracker.harry.lu%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.uw0.xyz%3A6969%2Fannounce&tr=udp%3A%2F%2Fopentracker.i2p.rocks%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.birkenwald.de%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.moeking.me%3A6969%2Fannounce&tr=udp%3A%2F%2Fopentor.org%3A2710%2Fannounce&tr=udp%3A%2F%2Ftracker.dler.org%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.zer0day.to%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fcoppersurfer.tk%3A6969%2Fannounce",
        "Size": 124,
        "UploadDate": 1637317462368
    },
]    
```

### Here are some other examples: 

```
    /search?search=movies
    /search?search=apps
    /search?search=games
    /search?search=anime
    /search?search=other
```

### You can also directly search for what you are looking for like:

**Request:**
```
    /search?search=forza
```

**Response**
```
[
    {
        "_id": "https://kickasstorrents.unblockninja.com/forza-horizon-5-crackfix-codex-t5054363.html",
        "Seeders": 157,
        "Leechers": 1,
        "Source": "KATCR",
        "Name": "Forza Horizon 5 Crackfix-CODEX",
        "Link": "https://kickasstorrents.unblockninja.com/forza-horizon-5-crackfix-codex-t5054363.html",
        "Magnet": "magnet:?xt=urn:btih:554EB086EC73C327D211FCBCCA6F906A082DA2BE&dn=Forza.Horizon.5.Crackfix-CODEX&tr=http%3A%2F%2Ftracker.trackerfix.com%3A80%2Fannounce&tr=udp%3A%2F%2F9.rarbg.me%3A2980%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2790%2Fannounce&tr=udp%3A%2F%2Ftracker.fatkhoala.org%3A13730%2Fannounce&tr=udp%3A%2F%2Ftracker.slowcheetah.org%3A14710%2Fannounce&tr=udp%3A%2F%2Ftracker.zer0day.to%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fcoppersurfer.tk%3A6969%2Fannounce",
        "Size": 3,
        "UploadDate": 1637167812716
    },
    {
        "_id": "https://kickasstorrents.unblockninja.com/forza-horizon-5-codex-t5054352.html",
        "Seeders": 417,
        "Leechers": 707,
        "Source": "KATCR",
        "Name": "Forza Horizon 5-CODEX",
        "Link": "https://kickasstorrents.unblockninja.com/forza-horizon-5-codex-t5054352.html",
        "Magnet": "magnet:?xt=urn:btih:BEEE7C1FA1C1CA6175D7E70B0F6AF191BB27A7BA&dn=Forza.Horizon.5-CODEX&tr=http%3A%2F%2Ftracker.trackerfix.com%3A80%2Fannounce&tr=udp%3A%2F%2F9.rarbg.me%3A2850%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2940%2Fannounce&tr=udp%3A%2F%2Ftracker.thinelephant.org%3A12720%2Fannounce&tr=udp%3A%2F%2Ftracker.tallpenguin.org%3A15760%2Fannounce&tr=udp%3A%2F%2Ftracker.zer0day.to%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fcoppersurfer.tk%3A6969%2Fannounce",
        "Size": 91000,
        "UploadDate": 1637167812716
    }
]
```

## Scraping Data 

For scraping data we can simply run the KickassScraper.js file in the parsers folder:
``` node KickassScraper.js ```

**NOTE: Its a powerfull js file my laptop crashed 3 times running this, its because its opening two instances for scraping data, one for the basic things like id,link,source.. and other for the magnet.**

Too avoid this it's recommended to not run this file for all the pages there are a maximum of 200 pages, currently its set to run for pages 1 to 3 or if you want to run it for all the pages you can select one category at a time there are a maximum of 8 categories:

```
const categories = [    
    "tv",
    "movies",
    "xxx",
    "apps",
    "music",
    "other",
    "anime",
    "games",
];

```

