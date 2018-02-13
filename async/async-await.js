const fetch = require("node-fetch");

const fetchPokemeon = async () => {
  try {
    const res = await fetch("http://www.pokemontrash.com/pokedex/");
    const resultat = await res.text();
    console.log(resultat);
  } catch (err) {
    console.log(err);
  }
};

fetchPokemeon();

// equivalent à
fetchPokemeonPromise = () => {
  return fetch("http://www.pokemontrash.com/pokedex/")
    .then(res => res.text())
    .then(resultat => console.log(resultat))
    .catch(err => console.log({ err }));
};
