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
let b = document.querySelector(".search-b");
  let s = document.getElementById("search");
b.addEventListener("click", function () {
  s.classList.toggle("active");
      });
      let input = document.querySelector("#search input");
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


let pho=document.querySelectorAll('.gallery img');
let lightbox= document.getElementById('lightbox');
let lightboxImg= document.querySelector('.lightbox-img');
let closeImg= document.querySelector('.close-img');

pho.forEach(img => {
    img.addEventListener('click',function(){
        lightboxImg.src = this.src;
        lightbox.style.display = "flex";
    });
});
closeImg.addEventListener('click',function(){
    lightbox.style.display = "none";
});
lightbox.addEventListener('click',function(e){
    if (e.target !== lightboxImg){
        lightbox.style.display = "none";
    }
});

// Sign up & Login Validation

function signup() {
let email = document.getElementById('email').value;
let password = document.getElementById('password').value;
let password2 = document.getElementById('password2').value;

let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

if (!email.match(emailPattern)) {
error.innerText = "Please enter a valid email address!";
alert('Please enter a valid email address!');
return false;
}

if (email == '' || password == '') {
alert('All fields are required!');
return;
}

if (password != password2) {
alert('Password does not match');
return;
}

if (password.length < 6) {
alert('Password must be at least 6 characters!');
return;
}

localStorage.setItem('email', email);
localStorage.setItem('password', password);
alert('Succeful Register');
window.location.href = "login.html";
return false;
}

function login() {
let email = document.getElementById('email').value;
let password = document.getElementById('password').value;
let error = document.getElementById("error");


let savedEmail = localStorage.getItem('email');
let savedPassword = localStorage.getItem('password');

let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

if (email === "" || password === "") {
error.innerText = "All fields are required!";
return false;
}

if (!email.match(emailPattern)) {
error.innerText = "Please enter a valid email address!";
alert('Please enter a valid email address!');
return false;
}

if (password.length < 6) {
error.innerText = "Password must be at least 6 characters!";
return false;
}

if (email == savedEmail && password == savedPassword) {
alert('Welcome to Secret of Kemet');
window.location.href = "index.html";
return false;
} else {
alert('Wrong password or Email');
}
}
