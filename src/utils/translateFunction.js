const translateFunction = message => {
  let translatedText = "";
  if (message !== "") {
    switch (message) {
      case "Value is required":
      case " The value is required":
        translatedText = "Поле не может быть пустым";
        break;
      case "Value is not a valid email address":
        translatedText = "Электронная почта недействительна";
        break;
      case "The value does not match the provided validator":
        translatedText = "Допустимы только буквы";
        break;
      case "The value must be alpha-numeric":
        translatedText = "Допустимы только буквы и цифры";
        break;
      case "The value is not a valid URL address":
        translatedText = "Неверный URL";
        break;
      case "The value must be between 1 and 31":
        translatedText = "Значение в диапазоне от 1 до 31";
        break;
      case "The minimum value allowed is 1900":
        translatedText = "Минимальное значение - 1900 ";
        break;
      case "This field should be at least 9 long.":
        translatedText = "Требуется минимум 9 символов";
        break;
      default:
        translatedText = "Ошибка заполнения поля";
        break;
    }
  }
  return translatedText;
};

export { translateFunction };
