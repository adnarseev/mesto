let editButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let nameinput = document.querySelector('.popup__input_type_title');
let Jobinput = document.querySelector('.popup__input_type_subtitle');
function addPopup() {
  popup.classList.add('popup_opened');
  nameinput.value = profileTitle.textContent;
  Jobinput.value = profileSubtitle.textContent;
}
editButton.addEventListener('click', addPopup);

let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');

let form = document.querySelector('.popup__form');

function rename(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameinput.value;
  profileSubtitle.textContent = Jobinput.value;
  removePopup();
}

form.addEventListener('submit', rename);

let closeButton = document.querySelector('.popup__close-button')
let removePopup = function () {
  popup.classList.remove('popup_opened', 'popup-place_opened');
}
closeButton.addEventListener('click', removePopup);
