const express = require('express')
const router = express.Router()

const escapeRegex = (text) => {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};
const {torrent} = require("../torrents");



router.get("/", (req,res)=>{
    if(req.query.search){
        const regex = new RegExp(escapeRegex(req.query.search.toString()), "gi");
        //console.log(req.query.search)
        torrent.find({"Name":regex},(err,foundTorrents)=>{
            if(err){
                console.log(err);
            }
            else{
                res.json(foundTorrents);
            }
        })
    }
})

module.exports = router;
