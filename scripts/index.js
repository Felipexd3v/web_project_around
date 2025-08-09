let editProfile = document.querySelector(".profile__button-edit");
let addCard = document.querySelector(".profile__button-add");
let popup = document.querySelector(".popup");
let popupCard = document.querySelector(".popup-card");
let buttonClose = document.querySelector(".popup__button-close");
let buttonCloseCard = popupCard.querySelector(".popup__button-close");
let nameProfile = document.querySelector(".profile__name");
let experienceProfile = document.querySelector(".profile__experience");
let inputName = document.querySelector("#name");
let inputExperience = document.querySelector("#experience");
let formProfile = document.querySelector(".popup__edit-form");

editProfile.addEventListener("click", openModal);
addCard.addEventListener("click", openModalCard);

function openModal() {
  popup.classList.add("popup_opened");
}

function openModalCard() {
  popupCard.classList.add("popup_opened");
}

buttonClose.addEventListener("click", () => closeMOdal(popup));
buttonCloseCard.addEventListener("click", () => closeMOdal(popupCard));

function closeMOdal(modal) {
  modal.classList.remove("popup_opened");
}

formProfile.addEventListener("submit", handleProfileFormSubmit);

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  nameProfile.innerHTML = inputName.value;
  experienceProfile.innerHTML = inputExperience.value;
  closeMOdal();
}
