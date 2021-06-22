import './index.css';
import {initialCards, selectorsSet, editPopupSelector, addPopupSelector, 
  imagePopupSelector, cardContainer, cardSelector, editPopupButton, 
  addPopupButton, editName, editSubline, formList} from '../utils/constants.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';


//редактирование профиля
const userInfo = new UserInfo({name: '.profile__name', subline: '.profile__subline'});
const editProfilePopup = new PopupWithForm(editPopupSelector, editFormSubmitHandler);

function editFormSubmitHandler(user) {
  userInfo.setUserInfo(user);
  editProfilePopup.close();
}

editProfilePopup.setEventListeners();
editPopupButton.addEventListener('click', () => {
  editProfilePopup.open();
  const user = userInfo.getUserInfo();
  editName.value = user.name;
  editSubline.value = user.subline;
})


// рендер и добавление карточек
const fullsizeImgPopup = new PopupWithImage(imagePopupSelector);

function cardRenderer(data) {
  return new Card(data, cardSelector, fullsizeImgPopup).generateCard();
}

const cardsList = new Section({
  items: initialCards,
  renderer: (data) => {
    const newCard = cardRenderer(data);
    cardsList.addItem(newCard); 
    } 
}, cardContainer);
cardsList.renderItems();

const addImagePopup = new PopupWithForm(addPopupSelector, addFormSubmitHandler);

function addFormSubmitHandler(data) {
  const newCard = cardRenderer(data);
  addImagePopup.close();
  cardsList.addItem(newCard);
}

fullsizeImgPopup.setEventListeners();
addImagePopup.setEventListeners();
addPopupButton.addEventListener('click', () => {
  addImagePopup.open();
})


// включение валидации
formList.forEach((formElement) => {
  new FormValidator(selectorsSet, formElement).enableValidation();
})