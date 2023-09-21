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

    image.setAttribute("loading", "lazy");

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
      "https://ddragon.leagueoflegends.com/cdn/12.11.1/img/champion/" +
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

let getData = async () => {
  let response = await fetch(url);
  return await response.json();
};

let createDiv = () => {
  let div = document.createElement("div");
  div.classList.add("container");
  return div;
};

let createInput = () => {
  let input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "Buscar");
  input.setAttribute("id", "input");
  input.classList.add("input");
  return input;
};

let clean = () => {
  let cards = document.querySelectorAll(".Card");
  cards.forEach((card) => {
    card.remove();
  });
};

getData().then((data) => {
  let champions = Object.values(data.data);
  // console.log(champions);
  let div = createDiv();

  let input = createInput();

  div.appendChild(input);

  root.appendChild(div);

  champions.forEach((champion) => {
    // console.log(champion);
    let card = new Card(
      champion.key,
      champion.name,
      champion.title,
      champion.image.full,
      champion.blurb
    );

    root.appendChild(card.createCard());
  });

  input.addEventListener("keyup", () => {
    console.log(input.value);

    clean();

    let result = champions.filter((champion) => {
      return champion.name.toLowerCase().includes(input.value.toLowerCase());
    });

    result.forEach((champion) => {
      // console.log(champion);
      let card = new Card(
        champion.key,
        champion.name,
        champion.title,
        champion.image.full,
        champion.blurb
      );

      root.appendChild(card.createCard());
    });
  });
});
