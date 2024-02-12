document.addEventListener("DOMContentLoaded", function () {
  // Burger
  const burger = document.querySelector(".burger");
  const menu = document.querySelector("#menu");
  const bodyEl = document.body;

  burger.addEventListener("click", function () {
    if (this.classList.contains("burger--active")) {
      this.classList.remove("burger--active");
      bodyEl.classList.remove("lock");
      menu.classList.remove("nav--active");
    } else {
      this.classList.add("burger--active");
      bodyEl.classList.add("lock");
      menu.classList.add("nav--active");
    }
  });

  menu.addEventListener("click", () => {
    burger.classList.remove("burger--active");
    bodyEl.classList.remove("lock");
    menu.classList.remove("nav--active");
  });

  //Animation
  const flagItems = document.querySelectorAll(".img-flag");
  const circleContainer = document.querySelector(".hero__img-circle");

  setTimeout(() => {
    for (let i = 0; i < flagItems.length; i++) {
      setTimeout(() => {
        flagItems[i].classList.remove("img__flag--hidden");
      }, i * 400);
    }
  }, 3000);

  setTimeout(() => {
    circleContainer.classList.add("animate");
  }, 6000);

  //Input check
  const inputElement = document.querySelector("#searchInput");

  inputElement.addEventListener("input", (event) => {
    const inputValue = event.target.value;
    const containsInvalidCharacter = /[!@#$%^&*()]/.test(inputValue); // Проверяем наличие недопустимых символов

    if (containsInvalidCharacter) {
      inputElement.classList.add("invalid-input"); // Добавляем класс для выделения красным цветом
    } else {
      inputElement.classList.remove("invalid-input"); // Удаляем класс, если символы стали допустимыми
    }

    const sanitizedValue = inputValue.replace(/[!@#$%^&*()]/g, ""); // Удаляем запрещенные символы
    event.target.value = sanitizedValue;
  });

  //Ajax
  const descriptionElement = document.querySelector(".hero__content-text");

  fetch("https://baconipsum.com/api/?type=lucky")
    .then((response) => response.json())
    .then((data) => {
      const description = data[0];
      descriptionElement.textContent = description;
    })
    .catch((error) => {
      console.log("Error:", error);
    });
});
