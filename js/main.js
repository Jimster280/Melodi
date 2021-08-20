$(document).ready(function () {
  var currentfloor = 2; // переменная где хранится текущий этаж
  var floorPath = $(".home__image path"); // каждый отдельный этаж в svg
  var counterUp = $(".counter__up");
  var counterDown = $(".counter__down");
  var modal = $(".model");
  var modalColeButton = $(".model__close__button");
  var viewFlatsButton = $(".view__flats");


  // функция при наведении
  floorPath.on('mouseover', function() {
    floorPath.removeClass("current__floor"); // удаляем активный класс этажей
    currentfloor = $(this).attr("data-floor"); // получаем значение текущего этажа
    $(".counter").text(currentfloor); // записываем значение этажа в сётчик справа
  });

  floorPath.on("click", toggleModal); // рпри клике на этаж всплывет окно
  modalColeButton.on("click", toggleModal); //  при клике на крест убрать окно

  viewFlatsButton.on("click",toggleModal)

  

  counterUp.on("click", function() { // отслеживаем клик по кнопке вверх
    if (currentfloor < 18) { // проверяем значение этажа
      currentfloor++; // прибавляем один этаж
      usCurrentfloor = currentfloor.toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false }); // форматируем переменную с этажём что бы было 01 а не 1
      $(".counter").text(usCurrentfloor); // записываем значение этажа в счётчик справа
      floorPath.removeClass("current__floor"); // удаляем активный класс этажей
      $(`[data-floor=${usCurrentfloor}]`).toggleClass("current__floor"); // подсвечиваем текущий этаж
    }
  });

  counterDown.on("click", function() {
    if (currentfloor > 2) {
      currentfloor--;
      usCurrentfloor = currentfloor.toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false });
      $(".counter").text(usCurrentfloor);
      floorPath.removeClass("current__floor");
      $(`[data-floor=${usCurrentfloor}]`).toggleClass("current__floor");
    }
  });
function toggleModal() { // функция открыть закрыть окно
    modal.toggleClass('is__open');
  }

});