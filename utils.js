const fetch = require("node-fetch")
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTk5MjdhODNkMzNlNmNjZjJlMGE4MTkyZTg3NDQ2NiIsIm5iZiI6MTcyNjAzODg3NS45NDMwODUsInN1YiI6IjY2OTExZDBmNmNjNzlmOTE0MGQxNzYxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XECuIPauynSHCJqK6MhcyEFGrjqjq3X0DY3t3Sxw-dI'
    }
  };

async function discoverMovie(){
const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';


const d = await (await fetch(url, options)).json()

return d
}

async function topRated(){
    const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';


const d = await (await fetch(url, options)).json()

return d
}

async function tmdbtoimdb(id, type = "movie" || "tv"){
    const url = `https://api.themoviedb.org/3/${type}/${id}/external_ids`;

const json = await (await fetch(url, options)).json()
    const data = await(await fetch("https://imdb-api.unknownmanishack.workers.dev/title/"+ json.imdb_id)).json()
    return data
}

async function search(term){
    const fetch = require('node-fetch');

const url = `https://api.themoviedb.org/3/search/multi?query=${term}&include_adult=false&language=en-US&page=1`;

const d = await (await fetch(url, options)).json()

    return d
}

async function similar(id, t){
    const fetch = require('node-fetch');
const url = `https://api.themoviedb.org/3/${t}/${id}/similar?language=en-US&page=1`;

const d = await (await fetch(url, options)).json()

    return d
}

async function list(id){
    const fetch = require('node-fetch');

const url = `https://api.themoviedb.org/3/list/${id}?language=en-US&page=1`;

const d = await (await fetch(url, options)).json()

    return d
}
async function tdtid(id,type){
    const fetch = require('node-fetch');

    const url = `https://api.themoviedb.org/3/${type}/${id}/external_ids`;

const d = await (await fetch(url, options)).json()

    return d.imdb_id
}


function idToSource(id,tmdbid, type){
    if(type === "movie"){
        return {
            "vidsrc.me": `https://vidsrc.xyz/embed/movie/${id}`,
            "vidsrc.rip": `https://vidsrc.rip/embed/movie/${id}`,
            "autoembed.cc": `https://player.autoembed.cc/embed/movie/${id}`,
            "superembed.stream": `https://multiembed.mov/directstream.php?video_id=${id}`,
            "2embed.cc": `https://www.2embed.cc/embed/${id}`,
            "vidlink.pro": `https://vidlink.pro/movie/${tmdbid}`,
            "vidsrc.pro": `https://vidsrc.pro/embed/movie/${tmdbid}`,
            "vidsrc.cc": `https://vidsrc.cc/v2/embed/movie/${tmdbid}`,
            "smashystream.com": `https://player.smashy.stream/movie/${id}`,
            "moviesapi.club": `https://moviesapi.club/movie/${tmdbid}`,
            "moviee.tv": `https://moviee.tv/embed/movie/${tmdbid}`
        }
    }else{
        return {
            "vidsrc.me": `https://vidsrc.xyz/embed/tv/${id}`,
            "moviee.tv": `https://moviee.tv/embed/tv/${tmdbid}`,
            "moviesapi.club": `https://moviesapi.club/tv/${tmdbid}`,
            "2embed.cc": `https://www.2embed.cc/embedtvfull/${id}`,
            "vidsrc.pro": `https://vidsrc.pro/embed/movie/${tmdbid}`,
            "vidsrc.cc": `https://vidsrc.cc/v2/embed/tv/${id}`
        }
    }
}

module.exports = {
    discoverMovie,
    topRated,
    tmdbtoimdb,
    search,
    idToSource,
    similar,
    list,
    tdtid
}