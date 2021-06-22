const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const selectorsSet = {
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit-btn',
  inactiveButtonClass: 'form__submit-btn_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_visible'
};

const editPopupSelector = '.popup_edit';
const addPopupSelector = '.popup_add';
const imagePopupSelector = '.popup_img';

const cardContainer = '.cards';
const cardSelector = '.template';

const editPopupButton = document.querySelector('.profile__btn-edit');
const addPopupButton = document.querySelector('.profile__btn-add');

const editName = document.querySelector('.form__input_editName');
const editSubline = document.querySelector('.form__input_editSubline');

const formList = document.querySelectorAll('.form');


export {initialCards, selectorsSet, editPopupSelector, addPopupSelector, 
  imagePopupSelector, cardContainer, cardSelector, editPopupButton, addPopupButton, editName, editSubline, formList}