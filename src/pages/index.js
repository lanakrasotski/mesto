import './index.css';
import {selectorsSet, editPopupSelector, addPopupSelector, confirmPopupSelector,
  imagePopupSelector, avatarPopupSelector, cardContainer, cardSelector, editPopupButton, 
  addPopupButton, editName, editSubline, addForm, editForm, avatarForm, profileAvatarOverlay} from '../utils/constants.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithSubmit from '../components/PopupWithSubmit.js';
import Api from '../components/Api.js';

let myData;

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-25', 
  headers: {
    authorization: 'da3dbb19-182a-4f56-b817-08636548168f',
    'Content-type': 'application/json'
  }
})

// рендер и добавление карточек
const fullsizeImgPopup = new PopupWithImage(imagePopupSelector);

function cardRenderer(data) {
  return new Card(data, myData, cardSelector, fullsizeImgPopup, deleteConfirmPopup, api).generateCard();
};

const cardsList = new Section((data) => {
  const newCard = cardRenderer(data);
  cardsList.addItem(newCard);
  }, cardContainer);

const addImagePopup = new PopupWithForm(addPopupSelector, addFormSubmitHandler);

fullsizeImgPopup.setEventListeners();
addImagePopup.setEventListeners();
addPopupButton.addEventListener('click', () => {
  addFormValidator.resetValidation();
  addImagePopup.open();
})

Promise.all([api.getAllCards(), api.getUserInfo()])
  .then(([cardData, userData]) => {
    myData = userData;
    userInfo.setUserInfo(myData);
    cardsList.renderItems(cardData);
})
  .catch(err => console.log(err));

function addFormSubmitHandler(cardData) {
 api.addNewCard(cardData)
  .then(data => {
    const newCard = cardRenderer(data);
    cardsList.addItem(newCard);
    addImagePopup.close();
  })
  .catch(err => console.log(err))
  .finally(() => addImagePopup.loading(false));
}

//удаление карточки 
const deleteConfirmPopup = new PopupWithSubmit(confirmPopupSelector, api.deleteCard);

deleteConfirmPopup.setEventListeners();

//редактирование профиля
const userInfo = new UserInfo({name: '.profile__name', about: '.profile__subline', avatar: '.profile__avatar'});
const editProfilePopup = new PopupWithForm(editPopupSelector, editFormSubmitHandler);

function editFormSubmitHandler(user) {
  api.editUserInfo(user)
    .then(data => {
      userInfo.setUserInfo(data);
      editProfilePopup.close();
    })
    .catch(err => console.log(err))
    .finally(() => editProfilePopup.loading(false));
}

editProfilePopup.setEventListeners();
editPopupButton.addEventListener('click', () => {
  editFormValidator.resetValidation();
  editProfilePopup.open();
  const user = userInfo.getUserInfo();
  editName.value = user.name;
  editSubline.value = user.about;
})

//редактирование аватара
const avatarEditionPopup = new PopupWithForm(avatarPopupSelector, avatarSubmitHandler);

function avatarSubmitHandler({avatar}) {
  api.editAvatar(avatar)
    .then(data => {
      userInfo.editAvatar(data);
      avatarEditionPopup.close();
    })
    .catch(err => console.log(err))
    .finally(() => avatarEditionPopup.loading(false));
}

avatarEditionPopup.setEventListeners();
profileAvatarOverlay.addEventListener('click', () => {
  avatarFormValidator.resetValidation();
  avatarEditionPopup.open();
});

// включение валидации
const addFormValidator = new FormValidator(selectorsSet, addForm);
addFormValidator.enableValidation();

const editFormValidator = new FormValidator(selectorsSet, editForm);
editFormValidator.enableValidation();

const avatarFormValidator = new FormValidator(selectorsSet, avatarForm);
avatarFormValidator.enableValidation();