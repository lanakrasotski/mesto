let showPopupButton = document.querySelector('.profile__btn-edit');
let popup = document.querySelector('.popup');
let closePopupButton = document.querySelector('.popup__btn-close');
let profileName = document.querySelector('.profile__name');
let profileSubline = document.querySelector('.profile__subline');
let editName = document.querySelector('input[name=profileName]');
let editSubline = document.querySelector('input[name=profileSubline]');
let formElement = document.querySelector('.form');

function showPopup() {
    popup.classList.add('popup_opened');
    editName.value = profileName.textContent;
    editSubline.value = profileSubline.textContent;
  }

  function closePopup() {
    popup.classList.remove('popup_opened');
  }

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = editName.value;
    profileSubline.textContent = editSubline.value;
    closePopup();
}

showPopupButton.addEventListener('click', showPopup);
closePopupButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);