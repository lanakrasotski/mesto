export default class Card {
  constructor({name, link}, cardSelector, handleCardClick) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.card')
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._card = this._getTemplate();
    
    this._cardImage = this._card.querySelector('.card__image');
    this._cardTitle = this._card.querySelector('.card__title');
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardTitle.textContent = this._name;

    this._setEventListeners();
    return this._card;
  }

  _deleteCard() {
    this._card.closest('.card').remove();
  }

  _likeCard() {
    this._card.querySelector('.card__btn-like').classList.toggle('card__btn-like_active');
  }

  _setEventListeners() {
    const deleteButton = this._card.querySelector('.card__btn-delete');
    deleteButton.addEventListener('click', () => {this._deleteCard()});

    const likeButton = this._card.querySelector('.card__btn-like');
    likeButton.addEventListener('click', () => {this._likeCard()});

    this._cardImage.addEventListener('click', () => {this._handleCardClick.open(this._cardImage, this._cardTitle)});
  } 
}