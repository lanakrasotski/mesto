export default class Card {
  constructor({ likes, _id, name, link, owner }, myId, cardSelector, handleCardClick, handleDelete, api) {
    this._likes = likes;
    this._id = _id;
    this._name = name;
    this._link = link;
    this._owner = owner;
    this._myId = myId._id;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleDelete = handleDelete;
    this.api = api;
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
    this._allLikes = this._card.querySelector('.card__like-counter');
    this._likeButton = this._card.querySelector('.card__btn-like');
    this._deleteButton = this._card.querySelector('.card__btn-delete');
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardTitle.textContent = this._name;
    this._allLikes.textContent = this._likes.length;
    this._likes.some((user) => {
      if (user._id === this._myId) {
        this._likeButton.classList.add('card__btn-like_active');
      }
    });
   if (this._owner._id != this._myId) this._deleteButton.remove();

    this._setEventListeners();
    return this._card;
  }

  deleteCard() {
    this._card.remove(); 
    this._card = null;
  }

  _setEventListeners() {
    this._deleteButton.addEventListener('click', () => {
      this._handleDelete.open();
      this._handleDelete.deleteConfig(this);
    });

    this._likeButton.addEventListener('click', () => {
      if (this._likeButton.classList.contains('card__btn-like_active')) {
        this.api.deleteLike(this._id)
          .then(data => {
            this._allLikes.textContent = data.likes.length;
            this._likeButton.classList.remove('card__btn-like_active');
          })
          .catch(err => console.log(err));
      } else {
          this.api.addLike(this._id)
            .then(data => {
              this._allLikes.textContent = data.likes.length;
              this._likeButton.classList.add('card__btn-like_active');
            })
            .catch(err => console.log(err));
        }    
      });

    this._cardImage.addEventListener('click', () => {this._handleCardClick.open(this._cardImage, this._cardTitle)});
  } 
}