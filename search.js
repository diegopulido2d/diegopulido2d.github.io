//SEARCHBAR REQUEST

      
const endpoint_search = "https://api.giphy.com/v1/gifs/search";
const api_key = "6AZdbonZwDZz5GrFbGYYjcdUgZ6UwrPB";
let limit = 12;
let offset = 0;

const searchEndpoint = async (q, offset) => {
  const data = await fetch(
    `${endpoint_search}?api_key=${api_key}&q=${q}&limit=${limit}&offset=${offset}`
  );
  const json = await data.json();
  return json;
};

const createImages = (images) => {
  for (let index = 0; index < images.data.length; index++) {
    const image = document.createElement("img");
    image.src = images.data[index].images.fixed_height.url;
    document.getElementById("searchResult").appendChild(image);
  }
};

const button = document.getElementsByClassName('searchBtn');
button[0].addEventListener("click", async () => {
  offset += limit + 1;
  let texto = document.getElementsByClassName('searchBox')[0].value;
  const images = await searchEndpoint(texto, offset);
  createImages(images);
});
