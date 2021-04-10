import {Card} from './Card.js'
import {initialCards, selectorsSet} from './utils.js'
import {FormValidator} from './FormValidator.js'

const editPopupButton = document.querySelector('.profile__btn-edit');
const addPopupButton = document.querySelector('.profile__btn-add');
const editPopup = document.querySelector('.popup_edit');
const addPopup = document.querySelector('.popup_add');
const profileName = document.querySelector('.profile__name');
const profileSubline = document.querySelector('.profile__subline');
const editName = document.querySelector('.form__input_editName');
const editSubline = document.querySelector('.form__input_editSubline');
const editForm = document.querySelector('.form_edit');
const addForm = document.querySelector('.form_add');
const cardContainer = document.querySelector('.cards');
const addName = document.querySelector('.form__input_addName');
const addLink = document.querySelector('.form__input_addLink');
const submitButton = document.querySelector('.form__submit-btn-add');
const formList = document.querySelectorAll('.form');
const popups = document.querySelectorAll('.popup');
const imagePopup = document.querySelector('.popup_img');
const fullsizeImg = document.querySelector('.popup__image');
const fullsizeImgTitle = document.querySelector('.popup__image-title');


function showPopup(popupElement) {
  popupElement.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscapeHandler);
}

function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscapeHandler);
}

function closeByEscapeHandler(evt) {
  const popupOpened = document.querySelector('.popup_opened');
  if (evt.key === 'Escape') {
    closePopup(popupOpened);
  }
}

function editFormSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = editName.value;
  profileSubline.textContent = editSubline.value;
  closePopup(editPopup);
}

function renderCards (item) {
  const cardSelector = '.template';
  const card = new Card(item.name, item.link, cardSelector, openFullsizeImage);
  const cardElement = card.generateCard();

  cardContainer.prepend(cardElement);
}

initialCards.forEach((item) => {
  renderCards(item);
});


function addCardFormSubmitHandler(evt) {
  evt.preventDefault();
  
  submitButton.classList.add('form__submit-btn_disabled');
  submitButton.setAttribute('disabled', true);

  const newCard = {};
  newCard.name = addName.value;
  newCard.link = addLink.value;

  renderCards(newCard);

  closePopup(addPopup);

  addName.value = '';
  addLink.value = '';
}

formList.forEach((formElement) => {
  new FormValidator(selectorsSet, formElement).enableValidation();
})

function openFullsizeImage(link, name) { 
  fullsizeImg.src = link;
  fullsizeImgTitle.textContent = name;
  fullsizeImg.alt = name;

  showPopup(imagePopup);
}

popups.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup);
    }
    if (evt.target.classList.contains('popup__btn-close')) {
      closePopup(popup);
    }
  })
})

editPopupButton.addEventListener('click', function () {
  editName.value = profileName.textContent;
  editSubline.value = profileSubline.textContent;
  showPopup(editPopup);
})

addPopupButton.addEventListener('click', function () {
  showPopup(addPopup);
})

editForm.addEventListener('submit', editFormSubmitHandler);
addForm.addEventListener('submit', addCardFormSubmitHandler);