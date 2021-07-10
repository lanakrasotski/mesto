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
const avatarPopupSelector = '.popup_avatar-edit';
const confirmPopupSelector = '.popup_confirm';

const cardContainer = '.cards';
const cardSelector = '.template';

const editPopupButton = document.querySelector('.profile__btn-edit');
const addPopupButton = document.querySelector('.profile__btn-add');
const profileAvatarOverlay = document.querySelector('.profile__avatar-overlay');

const editName = document.querySelector('.form__input_editName');
const editSubline = document.querySelector('.form__input_editSubline');

const addForm = document.querySelector('.form_add');
const editForm = document.querySelector('.form_edit');
const avatarForm = document.querySelector('.form_avatar-edit')



export {selectorsSet, editPopupSelector, addPopupSelector, confirmPopupSelector,
  imagePopupSelector, avatarPopupSelector, cardContainer, cardSelector, editPopupButton, 
  addPopupButton, editName, editSubline, addForm, editForm, avatarForm, profileAvatarOverlay}