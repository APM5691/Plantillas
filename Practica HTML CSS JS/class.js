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
    card.classList.add("card");
    card.setAttribute("id", this.id);
    card.innerHTML = text;
    return card;
  }
}
export { Champion };
