// первый вариант: открытие артиклей при нажатии btn+ и закрытие при нажатии btn -

// const btnPlus = document.querySelectorAll(".plus-icon");
// const btnMinus = document.querySelectorAll(".minus-icon");
// перебираем все кнопки в Дом
// btnPlus.forEach(function(buttn){
// добавляем event при нажатии btn 1> определить родителя
// 2> добавить всем дочеркам новый класс ACTIVE
//
//     buttn.addEventListener("click", function(e){
//         const hiddenObj = e.currentTarget.parentElement.parentElement.parentElement;
//         console.log(e.currentTarget);
//         console.log(hiddenObj);
//         hiddenObj.classList.toggle("active");
//     });
// });
//
// btnMinus.forEach(function(buttn){
//     buttn.addEventListener("click", function(e){
//         const hiddenObj = e.currentTarget.parentElement.parentElement.parentElement;
//         console.log(e.currentTarget);
//         console.log(hiddenObj);
//         hiddenObj.classList.toggle("active");
//     });
// });

// второй вариант: открытие артиклей при нажатии btn+ и закрытие при нажатии btn -
// при открытии одного остальные закрываются
const articles = document.querySelectorAll(".article");

//перебор всех артиклей
articles.forEach(function (article) {
    const btn = article.querySelector(".question-btn");

    btn.addEventListener("click", function () {

        // при открытии одного остальные закрываются
        articles.forEach(function (item) {
            // условие: ЕСЛИ не для текущего открытого элемента
            // удали класс Active для остальных
            if (item !== article) {
                item.classList.remove("active");
            }
        });
        //добавляем или удаляем класс: Active
        article.classList.toggle("active");
    })
});