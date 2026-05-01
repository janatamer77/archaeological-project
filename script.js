const themeBtn = document.getElementById('theme-btn');
const bodyElement = document.body;
if (localStorage.getItem('theme') === 'dark') {
    bodyElement.classList.add('dark-mode');
}
themeBtn.addEventListener('click', () => {
    bodyElement.classList.toggle('dark-mode');
    if (bodyElement.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

let btn = document.querySelector(".search-btn");
let box = document.getElementById("search-box");
if (btn) {
    btn.addEventListener("click", function () {
        box.classList.toggle("active");
    });
}
let input = document.querySelector("#search-box input");

if (input) {
    input.addEventListener("keyup", function () {
        let value = input.value.toLowerCase();
        let items = document.querySelectorAll(".card, .museum");
        items.forEach(item => {
            let textToSearch = item.textContent.toLowerCase();
            if (textToSearch.includes(value)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });
}