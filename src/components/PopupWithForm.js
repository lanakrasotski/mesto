import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, formSubmitHandler) {
    super(popupSelector);
    this._formSubmitHandler = formSubmitHandler;
    this._form = this._popup.querySelector('.form');
  }

  _getInputValues() {
    this._inputs = this._form.querySelectorAll('.form__input');
    this._inputValues = {};
    this._inputs.forEach(input => this._inputValues[input.name] = input.value);

    return this._inputValues;


  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._formSubmitHandler(this._getInputValues());
    });
  }

  close() {
    super.close();
    this._form.reset(); 
  }
}

