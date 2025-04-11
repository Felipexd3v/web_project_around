let editProfile = document.querySelector(".profile__button-edit");
let popup = document.querySelector(".popup");
let buttonClose = document.querySelector(".popup__button-close");
let nameProfile = document.querySelector(".profile__name");
let experienceProfile = document.querySelector(".profile__experience");
let inputName = document.querySelector("#name");
let inputExperience = document.querySelector("#experience");
let formProfile = document.querySelector(".popup__edit-form");

editProfile.addEventListener("click", openModal);

function openModal() {
  popup.classList.add("popup_opened");
}

buttonClose.addEventListener("click", closeMOdal);

function closeMOdal() {
  popup.classList.remove("popup_opened");
}

formProfile.addEventListener("submit", handleProfileFormSubmit);

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  nameProfile.innerHTML = inputName.value;
  experienceProfile.innerHTML = inputExperience.value;
  closeMOdal();
}
