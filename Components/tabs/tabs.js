//Обернутая фунция для скрытия данных
// используется техника вынесение на модули (Обернутая фунция вызываювая себя)

(function () {
    const tabs = document.querySelectorAll(".tab-head__item");
    const contents = document.querySelectorAll(".tab-content__item");

    tabs.forEach( (tab, index) => {
        tab.onclick = () => {
            changeTab(index);
        };
    });

    function changeTab(index) {
        setActiveClass(tabs, index);
        setActiveClass(contents, index);
    }

    function setActiveClass(arr, index) {
        for(let el of arr) {
            el.classList.remove("active");
        }
        arr[index].classList.add("active");
    }
}) ();


// The code before Refactoring >>
// function changeTab(index) {
//     for (let tab of tabs) {
//         tab.classList.remove("active");
//     }
//     tabs[index].classList.add("active");
//
//     for (let element of contents) {
//         element.classList.remove("active");
//     }
//     contents[index].classList.add("active");
// };

// First attemp >> was using just for loops withoyt item indexes
// tabs.forEach(function (element) {
//     element.addEventListener("click", function () {
//         for (let element of tab) {
//             element.classList.remove("active");
//         }
//         element.classList.add("active");
//
//         contents.forEach(function (el) {
//             for (let el of contents) {
//                 el.classList.remove("active");
//             }
//             el.classList.add("active");
//         });
//     });
// });
