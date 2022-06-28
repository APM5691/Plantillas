let root = document.getElementById("root");

// Card

class Card {
  constructor(id, name, title, image, info) {
    this.id = id;
    this.name = name;
    this.title = title;
    this.image = image;
    this.info = info;
  }

  createCard() {
    let card = document.createElement("div");
    let container = document.createElement("div");
    let containerImage = document.createElement("div");
    let containerText = document.createElement("div");
    let image = document.createElement("img");
    let title = document.createElement("div");
    let text = document.createElement("div");
    let description = document.createElement("div");

    card.setAttribute("id", this.id);

    card.classList.add("Card");
    container.classList.add("container");
    containerImage.classList.add("containerImage");
    image.classList.add("image");
    containerText.classList.add("containerText");
    title.classList.add("title");
    text.classList.add("text");
    description.classList.add("description");

    image.setAttribute(
      "src",
      "http://ddragon.leagueoflegends.com/cdn/12.11.1/img/champion/" +
        this.image
    );

    title.innerHTML = this.name;
    text.innerHTML = this.title;
    description.innerHTML = this.info;

    containerText.appendChild(title);
    containerText.appendChild(text);
    containerText.appendChild(description);
    containerImage.appendChild(image);

    container.appendChild(containerImage);
    container.appendChild(containerText);

    card.appendChild(container);

    return card;
  }
}

// Final Card

let url =
  "http://ddragon.leagueoflegends.com/cdn/12.11.1/data/es_ES/champion.json";

async function getData() {
  let response = await fetch(url);
  let data = await response.json();
  return data;
}

var data = getData();

let champions = data.data;

console.log(champions);

for (let i = 0; i < champions.length; i++) {
  let card = new Card(
    champions[i].key,
    champions[i].name,
    champions[i].title,
    champions[i].image.full,
    champions[i].blurb
  );
  // console.log(card);
  root.appendChild(card.createCard());
}
