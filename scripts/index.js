const editProfile = document.querySelector(".profile__button-edit");
const addCard = document.querySelector(".profile__button-add");
const popup = document.querySelector(".popup");
const popupCard = document.querySelector(".popup-card");
const buttonClose = document.querySelector(".popup__button-close");
const buttonCloseCard = popupCard.querySelector(".popup__button-close");
const nameProfile = document.querySelector(".profile__name");
const experienceProfile = document.querySelector(".profile__experience");
const inputName = document.querySelector("#name");
const inputExperience = document.querySelector("#experience");
const formProfile = document.querySelector(".popup__edit-form");
const formCard = document.querySelector(".popup__card-form");
const cardsContainer = document.querySelector(".elements");
const inputTitle = document.querySelector("#title");
const inputLink = document.querySelector("#link");
const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".elements__card");

const initialCards = [
  {
    name: "Vale de Yosemite",
    image:
      "https://share.america.gov/wp-content/uploads/sites/155/2024/05/Yosemite_national_park_-513244762-2.jpg",
  },
  {
    name: "Lago Louise",
    image:
      "https://www.cvc.com.br/dicas-de-viagem/wp-content/uploads/2020/03/canada-lago-louise-banff-national-park-601048877.jpg",
  },
  {
    name: "Montanhas Carecas",
    image:
      "https://img.freepik.com/fotos-gratis/foto-de-paisagem-distante-de-colinas-e-montanhas-verdes-sob-um-ceu-ensolarado_181624-3331.jpg?semt=ais_hybrid&w=740",
  },
  {
    name: "Latemar",
    image:
      "https://www.suedtirolerland.it/images/cms/main/754x435/B_4651-karersee-lago-di-carezza-panorama.jpg",
  },
  {
    name: "Parque Nacional da Vanoise ",
    image:
      "https://media.istockphoto.com/id/964758546/pt/foto/vanoise-national-park-in-france.jpg?s=612x612&w=0&k=20&c=Otvhhw881txLOqYpM6pwQ7xXT3EwHuuK7xCE0oyKcGM=",
  },
  {
    name: "Lago di Braies",
    image:
      "https://www.earthtrekkers.com/wp-content/uploads/2022/09/Lago-di-Braies-Dolomites-1200x900.jpg",
  },
];

function getCardElement(data) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardTitle = cardElement.querySelector(".elements__text");
  const cardImage = cardElement.querySelector(".elements__card-image");
  const likeButton = cardElement.querySelector(".elements__like");
  const deleteButton = cardElement.querySelector(".elements__delete");

  cardImage.src = data.image;
  cardImage.alt = data.name;
  cardTitle.textContent = data.name;

  likeButton.addEventListener("click", (e) => {
    e.target.classList.toggle("elements__like-activate");
  });

  //excluir o card
  deleteButton.addEventListener("click", (e) => {
    const card = deleteButton.closest(".elements__card");
    card.remove();
  });

  return cardElement;
}

function renderCard(data, wrap) {
  wrap.prepend(getCardElement(data));
}

editProfile.addEventListener("click", openModal);
addCard.addEventListener("click", openModalCard);

function openModal() {
  popup.classList.add("popup_opened");
}

function openModalCard() {
  popupCard.classList.add("popup_opened");
}

buttonClose.addEventListener("click", () => closeModal(popup));
buttonCloseCard.addEventListener("click", () => closeModal(popupCard));

function closeModal(modal) {
  modal.classList.remove("popup_opened");
}

formProfile.addEventListener("submit", handleProfileFormSubmit);

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  nameProfile.innerHTML = inputName.value;
  experienceProfile.innerHTML = inputExperience.value;
  closeModal(popup);
}

formCard.addEventListener("submit", handleCardFormSubmit);

function handleCardFormSubmit(evt) {
  evt.preventDefault();

  const imageURL = inputLink.value;
  const caption = inputTitle.value;

  // verificação de campos
  if (!imageURL || !caption) {
    alert("Preencha todos os campos!");
    return;
  }

  renderCard(
    {
      name: caption,
      image: imageURL,
    },
    cardsContainer
  );

  // limpa os campos do formulário
  inputTitle.value = "";
  inputLink.value = "";

  //  fecha o modal
  closeModal(popupCard);
}

initialCards.forEach((card) => {
  renderCard(card, cardsContainer);
});
