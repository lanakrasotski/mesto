import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, formSubmitHandler) {
    super(popupSelector);
    this._formSubmitHandler = formSubmitHandler;
    this._form = this._popup.querySelector('.form');
    this._button =this._form.querySelector('.form__submit-btn');
    this._buttonText = this._button.textContent;
  }

  _getInputValues() {
    this._inputs = this._form.querySelectorAll('.form__input');
    this._inputValues = {};
    this._inputs.forEach(input => this._inputValues[input.name] = input.value);

    return this._inputValues;
  }

  loading(isLoading){
    if (isLoading) {
      this._button.textContent = 'Сохранение...'
    } else {
      this._button.textContent = this._buttonText;
    }
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this.loading(true);
      this._formSubmitHandler(this._getInputValues());
    });
  }

  close() {
    super.close();
    this._form.reset(); 
  }
}

