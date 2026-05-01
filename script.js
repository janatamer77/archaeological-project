//  theme 
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
// search
 let btn = document.querySelector(".search-btn");
  let box = document.getElementById("search-box");
 btn.addEventListener("click", function () {
  box.classList.toggle("active");
      });
      let input = document.querySelector("#search-box input");
      let cards = document.querySelectorAll(".card");
      input.addEventListener("keyup", function () {
      let value = input.value.toLowerCase();
      cards.forEach(card => {
     let name = card.querySelector(".name").textContent.toLowerCase();
      if (name.includes(value)) {
      card.style.display = "block";
     } else {
      card.style.display = "none";
     }
   });
 });
