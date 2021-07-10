import Popup from './Popup.js';
export default class PopupWithSubmit extends Popup {
  constructor(popupSelector, deleteSubmitHandler) {
    super(popupSelector);
    this._deleteSubmitHandler = deleteSubmitHandler;
    this._button = this._popup.querySelector('.popup__btn-submit');
  }

  deleteConfig(card) {
    this._card = card;
}

  setEventListeners(){
    super.setEventListeners();
    this._button.addEventListener('click', () => {
      this._deleteSubmitHandler(this._card._id)
        .then(() => {
          this._card.deleteCard();
          this.close();
        })
        .catch(err => console.log(err));
    })
  };
}