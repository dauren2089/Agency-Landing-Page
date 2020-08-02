//инициализация доступа к элементам btns и contents
const btns = document.querySelectorAll(".filter-btns__item");
const contents = document.querySelectorAll(".filter-contents div");

// Select для мобильной версии
//инициализация массива селект
const select = document.getElementById("filter-options");

// получаем доступ к элементам массив путем перебора массива
for (let btn of btns) {
    btn.onclick = function () {
        //получаем доступ к датасету в элементах filter
        //путем >> this.dataset.filter
        filterImage(this.dataset.filter);
    };
}
//функция для операции фильтарции
function filterImage(filter) {
    // проходимся по массиву картинок
    for (let item of contents) {
        //удаляем не соотвествующие
        item.style.display = "none";
        // проверяем содержит ли выбранный элемент массива необходимый фильтр
        if (item.classList.contains(filter)) {
            // ставим заддержку для праввильного отображения анимации
            setTimeout(() => {
                // оставляем только элементы соответсвтующие фильтру
                item.style.display = "block";
            }, 0);
        }
    }
    // находим и помечаем активный выбранный элемент
    // проходимся по массиву для каждого элемента массива
    for (let border of btns) {
        // проверяем содержит ли аттрибут filter == filter
        if (border.dataset.filter == filter) {
            // добавляем класс active для выделения текста
            border.classList.add("active");
        } else {
            // удаляем класс active для выделения текста
            border.classList.remove("active");
        }
    }
    // добавляем соответствие выбранным фильтрам при изменении вида
    //что сохранялся выбранный параметр фильтра
    select.value = filter;
}
// проверять изменилось ли значение SELECT
select.addEventListener("change", ()=> {
    // запускаем функцию фильтрации,
    // передав необходимый атрубит фильтра (SELECT.VALUE)
    // к примеру: Animals
    filterImage(select.value);
});