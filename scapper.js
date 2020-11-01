const cheerio = require('cheerio');
const axios = require('axios');


async function newSeason(page) {
    var anime_list = []


    res = await axios.get(`https://gogoanime.so/new-season.html?page=${page}`)
    const body = await res.data;
    const $ = cheerio.load(body)

    $('div.main_body div.last_episodes ul.items li').each((index, element) => {
        $elements = $(element)
        name = $elements.find('p').find('a')
        img = $elements.find('div').find('a').find('img').attr('src')
        link = "https://gogoanime.so/" + $elements.find('div').find('a').attr('href')
        anime_name = { 'name': name.html(), 'img_url': img, 'anime_link': link }
        anime_list.push(anime_name)

    })

    return await (anime_list)
}


async function popular(page) {
    var anime_list = []


    res = await axios.get(`https://gogoanime.so/popular.html?page=${page}`)
    const body = await res.data;
    const $ = cheerio.load(body)

    $('div.main_body div.last_episodes ul.items li').each((index, element) => {
        $elements = $(element)
        name = $elements.find('p').find('a')
        img = $elements.find('div').find('a').find('img').attr('src')
        link = "https://gogoanime.so/" + $elements.find('div').find('a').attr('href')
        anime_name = { 'name': name.html(), 'img_url': img, 'anime_link': link }
        anime_list.push(anime_name)

    })

    return await (anime_list)
}



module.exports = {
    popular,
    newSeason
}

