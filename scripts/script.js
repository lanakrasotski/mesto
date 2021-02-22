let showPopupButton = document.querySelector('.profile__btn-edit');
let popup = document.querySelector('.popup');
let closePopupButton = document.querySelector('.popup__btn-close');
let profileName = document.querySelector('.profile__name');
let profileSubline = document.querySelector('.profile__subline');
let editName = document.querySelector('input[name=profileName]');
let editSubline = document.querySelector('input[name=profileSubline]');
let formElement = document.querySelector('.form');

function togglePopup() {
    popup.classList.toggle('popup_opened');
    editName.value = profileName.textContent;
    editSubline.value = profileSubline.textContent;
  }
showPopupButton.addEventListener('click', togglePopup);
closePopupButton.addEventListener('click', togglePopup);

function formSubmitHandler (evt) {
    evt.preventDefault();
    editName.getAttribute('value');
    editSubline.getAttribute('value');
    profileName.textContent = editName.value;
    profileSubline.textContent = editSubline.value;
}
formElement.addEventListener('submit', formSubmitHandler);
formElement.addEventListener('submit', togglePopup);