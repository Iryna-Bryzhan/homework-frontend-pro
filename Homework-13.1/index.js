const name = document.forms.form.elements.name;

const errorName = document.querySelector(".error-name");

function validateName() {
  const nameValue = document.forms.form.elements.name.value;
  if (nameValue === "") {
    showError(errorName, "Введіть своє ім'я");
    return false;
  } else {
    showError(errorName, "");
    return true;
  }
}

name.addEventListener("blur", validateName);

const message = document.forms.form.elements.message;

const errorMessage = document.querySelector(".error-message");

function validateMessage() {
  const messageValue = document.forms.form.elements.message.value;
  if (messageValue.length < 5) {
    showError(errorMessage, "Повідомлення має бути не менше 5 символів");
    return false;
  } else {
    showError(errorMessage, "");
    return true;
  }
}

message.addEventListener("blur", validateMessage);

const phone = document.forms.form.elements.phone;

const errorPhone = document.querySelector(".error-phone");

function validatePhone() {
  const phoneValue = document.forms.form.elements.phone.value;
  const phoneRegex = /^\+380\d{9}$/;

  if (phoneValue === "") {
    showError(errorPhone, "Введіть номер телефону");
    return false;
  } else if (!phoneRegex.test(phoneValue)) {
    showError(errorPhone, "Введіть коректний номер телефону");
    return false;
  } else {
    showError(errorPhone, "");
    return true;
  }
}

phone.addEventListener("blur", validatePhone);

const email = document.forms.form.elements.email;

const errorEmail = document.querySelector(".error-email");

function validateEmail() {
  const emailValue = document.forms.form.elements.email.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailValue === "") {
    showError(errorEmail, "Введіть email");
    return false;
  } else if (!emailRegex.test(emailValue)) {
    showError(errorEmail, "Введіть коректний email");
    return false;
  } else {
    showError(errorEmail, "");
    return true;
  }
}

email.addEventListener("blur", validateEmail);

function showError(element, mesage) {
  element.textContent = mesage;
}

const form = document.forms.form;
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const isValidName = validateName();
  const isValidMessage = validateMessage();
  const isValidPhone = validatePhone();
  const isValidEmail = validateEmail();

  if (isValidName && isValidMessage && isValidPhone && isValidEmail) {
    const formData = {};
    Array.from(form.elements).forEach((input) => {
      formData[input.name] = input.value;
    });
    console.log(formData);
    form.reset();
  }
});
