export default class UserInfo{
  constructor({ name, subline }) {
    this._profileName = document.querySelector(name);
    this._profileSubline = document.querySelector(subline);
  }

  getUserInfo() {
    return {
      name: this._profileName.textContent,
      subline: this._profileSubline.textContent
    }
  }

  setUserInfo(data) {
    this._profileName.textContent = data.name;
    this._profileSubline.textContent = data.subline;
  }
}