import Popup from './Popup.js';

export default class PopupWithImage extends Popup{
  constructor(popupSelector) {
    super(popupSelector);
    this._cardImage = this._popup.querySelector('.popup__image');
    this._cardTitle = this._popup.querySelector('.popup__image-title');
  }

  open(link, name) {
    super.open();
    this._cardImage.src = link.src;
    this._cardImage.alt = name.textContent;
    this._cardTitle.textContent = name.textContent;
  }
}