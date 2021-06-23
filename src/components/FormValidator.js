export default class FormValidator {
  constructor (selectorsSet, formElement) {
    this._selectorsSet = selectorsSet;
    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._selectorsSet.inputSelector));
    this._buttonElement = this._formElement.querySelector(this._selectorsSet.submitButtonSelector);
  }
  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._selectorsSet.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._selectorsSet.errorClass);
  };

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._selectorsSet.inputErrorClass);
    errorElement.classList.remove(this._selectorsSet.errorClass);
    errorElement.textContent = '';
  };

  _hasInvalidInput(inputList) {
    return inputList.some(inputElement => !inputElement.validity.valid);
  };

  _toggleButtonState() {
    if (this._hasInvalidInput(this._inputList)) {
      this._buttonElement.classList.add(this._selectorsSet.inactiveButtonClass);
      this._buttonElement.setAttribute('disabled', true);
    } else {
      this._buttonElement.classList.remove(this._selectorsSet.inactiveButtonClass);
      this._buttonElement.removeAttribute('disabled');
    };
  };

   _checkInputValidity(inputElement) {
    if(!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else
      this._hideInputError(inputElement);
  };

  resetValidation() {
    this._inputList.forEach(inputElement => {
      this._hideInputError(inputElement);
    })
    
    this._toggleButtonState();
  };

   _setInputListeners() {
    this._toggleButtonState();
  
    this._inputList.forEach(inputElement => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  };

  enableValidation() {
    this._setInputListeners();
  };
}