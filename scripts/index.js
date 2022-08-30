let editButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let nameInput = document.querySelector('.popup__input_type_title');
let jobInput = document.querySelector('.popup__input_type_subtitle');
let closeButton = document.querySelector('.popup__close-button')
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');
let form = document.querySelector('.popup__form');

let removePopup = function () {
  popup.classList.remove('popup_opened', 'popup-place_opened');
}

function addPopup() {
  popup.classList.add('popup_opened');
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
}

function rename(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  removePopup();
}

form.addEventListener('submit', rename);
editButton.addEventListener('click', addPopup);
closeButton.addEventListener('click', removePopup);
