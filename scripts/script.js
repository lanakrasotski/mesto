const editPopupButton = document.querySelector('.profile__btn-edit');
const addPopupButton = document.querySelector('.profile__btn-add');
const editPopup = document.querySelector('.popup_edit');
const addPopup = document.querySelector('.popup_add');
const editClosePopupButton = document.querySelector('.popup__btn-close_edit');
const addClosePopupButton = document.querySelector('.popup__btn-close_add');
const profileName = document.querySelector('.profile__name');
const profileSubline = document.querySelector('.profile__subline');
const editName = document.querySelector('.form__input_editName');
const editSubline = document.querySelector('.form__input_editSubline');
const editForm = document.querySelector('.form_edit');
const addForm = document.querySelector('.form_add');
const cardContainer = document.querySelector('.cards');
const addName = document.querySelector('.form__input_addName');
const addLink = document.querySelector('.form__input_addLink');
const imagePopup = document.querySelector('.popup_img');
const imageClosePopupButton = document.querySelector('.popup__btn-close_img');

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


function showPopup(popupElement) {
  popupElement.classList.add('popup_opened');
}

function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened');
}

function editFormSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = editName.value;
  profileSubline.textContent = editSubline.value;
  closePopup(editPopup);
}

function creatCard(item) {
  const cardTemplate = document.querySelector('.template');
  const cardItem = cardTemplate.content.cloneNode(true);
  const cardTitle = cardItem.querySelector('.card__title');
  const cardImage = cardItem.querySelector('.card__image');

  cardTitle.textContent = item.name;
  cardImage.src = item.link;
  cardImage.alt = item.name;

  const deleteButton = cardItem.querySelector('.card__btn-delete');
  deleteButton.addEventListener('click', deleteCard);

  const likeButton = cardItem.querySelector('.card__btn-like');
  likeButton.addEventListener('click', likeCard);

  cardImage.addEventListener('click', openFullsizeImage);
  
  return cardItem;
}

function renderCards () {
const mainCards = initialCards.map(creatCard);
cardContainer.append(...mainCards);
}

function addCards(evt) {
  evt.preventDefault();

  const newCard = creatCard({
    name: addName.value,
    link: addLink.value
  });

  cardContainer.prepend(newCard);
  closePopup(addPopup);
} 

function deleteCard(evt) {
  evt.target.closest('.card').remove();
}

function likeCard(evt) {
  evt.target.classList.toggle('card__btn-like_active');
}

function openFullsizeImage (evt) {
  showPopup(imagePopup);
  const image = evt.target;
  const card = image.closest('.card');
  const cardTitle = card.querySelector('.card__title');
  const cardImage = card.querySelector('.card__image');
  const fullsizeImg = document.querySelector('.popup__image');
  const fullsizeImgTitle = document.querySelector('.popup__image-title');
  
  fullsizeImg.src = cardImage.src;
  fullsizeImgTitle.textContent = cardTitle.textContent;
  fullsizeImg.alt = cardTitle.textContent;
} 


renderCards();

editPopupButton.addEventListener('click', function () {
  editName.value = profileName.textContent;
  editSubline.value = profileSubline.textContent;
  showPopup(editPopup);
})

addPopupButton.addEventListener('click', function () {
  addName.value = '';
  addLink.value = '';
  showPopup(addPopup);
})

editClosePopupButton.addEventListener('click', function () {
  closePopup(editPopup);
})

addClosePopupButton.addEventListener('click', function () {
  closePopup(addPopup);
})

imageClosePopupButton.addEventListener('click', function () {
  closePopup(imagePopup);
})
editForm.addEventListener('submit', editFormSubmitHandler);
addForm.addEventListener('submit', addCards);