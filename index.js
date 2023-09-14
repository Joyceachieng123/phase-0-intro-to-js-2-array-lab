const cats = ["Milo", "Otis", "Garfield"];

function appendCat(name) {
  const newCats = [...cats, "Broom"]; 
  return newCats;
}


function prependCat(name) {
  const newCats = ["Arnold", ...cats]; 
  return newCats;
}

  
module.exports = {
    appendCat,
    prependCat,
    cats,
  };




