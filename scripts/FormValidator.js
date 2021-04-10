export class FormValidator {
  constructor (selectorsSet, formElement) {
    this._selectorsSet = selectorsSet;
    this._formElement = formElement;
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

  _toggleButtonState (inputList, buttonElement) {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(this._selectorsSet.inactiveButtonClass);
      buttonElement.setAttribute('disabled', true);
    } else {
      buttonElement.classList.remove(this._selectorsSet.inactiveButtonClass);
      buttonElement.removeAttribute('disabled');
    };
  };

   _checkInputValidity (inputElement) {
    if(!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else
      this._hideInputError(inputElement);
  };

   _setInputListeners () {
    const inputList = Array.from(this._formElement.querySelectorAll(this._selectorsSet.inputSelector));
    const buttonElement = this._formElement.querySelector(this._selectorsSet.submitButtonSelector);
    this._toggleButtonState(inputList, buttonElement);
  
    inputList.forEach(inputElement => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(inputList, buttonElement);
      });
    });
  };

  enableValidation() {
    this._setInputListeners();
  };
}
