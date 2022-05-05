async function getBeer() {
  const response = await fetch('https://api.punkapi.com/v2/beers/random');
  const data = await response.json();
  return data;
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function handleClick() {
  const beer = await getBeer();
  const { name, image_url, tagline, abv } = beer[0];
  if (image_url === null) handleClick();
  console.log(name, image_url, tagline, abv);
  console.log(image_url);

  const can = document.querySelector('.can');
  const canMid = document.querySelector('.mid');
  canMid.innerHTML = `
    <div id="title">
    <h2>${name}</h2>
</div>
<div><img src="${image_url}" height="250px" alt="beer"></div>
<div class="tagline">${tagline}</div>
<div class="vol">vol: ${abv}%</div>`;
}

const rollButton = document.querySelector('.repeat');
rollButton.addEventListener('click', handleClick);
