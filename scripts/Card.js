export class Card {
  constructor(name, link, cardSelector, showPopup) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
    this._showPopup = showPopup;
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
    this._setEventListeners();

    this._card.querySelector('.card__image').src = this._link;
    this._card.querySelector('.card__title').textContent = this._name;
    this._card.querySelector('.card__image').alt = this._name;
    
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

    const cardImage = this._card.querySelector('.card__image'); 
    cardImage.addEventListener('click', () => {this._showPopup(this._link, this._name)});
    } 
  }    