// npm install node-fetch cheerio jsonframe-cheerio image-downloader
const fetch = require("node-fetch");
const cheerio = require("cheerio");
const jsonframe = require("jsonframe-cheerio");
const download = require("image-downloader");

const frame = {
  imgPoke: ["img[src]"]
};

// PROMISE
// fetch("http://www.pokemontrash.com/pokedex/")
//   .then(res => res.text())
//   .then(html => {
//     return cheerio.load(html);
//   })
//   .then($ => {
//     jsonframe($);
//     return $;
//   })
//   .then($ => $("body").scrape(frame, { string: true }))
//   .then(res => JSON.parse(res))
//   .then(result => {
//     const urls = result.imgPoke.map(url => ({ url, dest: "./img/" }));
//     const dwlImgs = () => urls.map(url => download.image(url));
//     Promise.all(dwlImgs());
//   });

// Version Victor

fetch("http://www.pokemontrash.com/pokedex/")
  .then(res => res.text())
  .then(html => cheerio.load(html))
  .then($ => {
    const tabPoke = [];
    $(".toppokemon").each((index, element) => {
      let pokemon = $(element).children("a");
      let image = pokemon.children("img").attr("src");
      let name = pokemon.children("strong").text();
      tabPoke.push({ image, name });
    });
    return tabPoke;
  })
  .then(tabPoke => {
    tabPoke.forEach(el => {
      const options = {
        url: el.image,
        dest: "./img/" + el.name + ".png"
      };
      download.image(options);
    });
  })
  .catch(err => console.log(err));

// ASYNC AWAIT
const scrapHtml = async () => {
  const res = await fetch("https://www.growthhacking.fr");
  const html = await res.text();
  const $ = cheerio.load(html);

  const tabPoke = [];
  $(".toppokemon").each((index, element) => {
    let pokemon = $(element).children("a");
    let image = pokemon.children("img").attr("src");
    let name = pokemon.children("strong").text();
    tabPoke.push({ image, name });
  });

  tabPoke.forEach(async el => {
    const options = {
      url: el.image,
      dest: "./img/" + el.name + ".png"
    };
    await download.image(options);
  });
};

scrapHtml();
