
const themeBtn = document.getElementById('theme-b');
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
    card.classList.remove("hidden");
    } else {
    card.classList.add("hidden");
    }
   });
});

const layoutBtn = document.querySelector(".layout");
const rowS = document.querySelector(".row-s");
let isReversed = localStorage.getItem("layout") === "reversed";
if (isReversed) {
  const rows = document.querySelectorAll(".row");
  rowS.insertBefore(rows[1], rows[0]);
}
layoutBtn.onclick = function () {
  const rows = document.querySelectorAll(".row");
  if (!isReversed) {
    rowS.insertBefore(rows[1], rows[0]);
    localStorage.setItem("layout", "reversed");
  } else {
    rowS.insertBefore(rows[1], rows[0]); 
    localStorage.setItem("layout", "normal");
  }
  isReversed = !isReversed;
};




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
sessionStorage.setItem('isLoggedIn', 'true');
alert('Welcome to Secret of Kemet');
window.location.href = "index.html";
return false;
} else {
alert('Wrong password or Email');
}
}
const form = document.getElementById('form');
const nam = document.getElementById('textt');
const emai = document.getElementById('emai');
const phon = document.getElementById('num');
const mess = document.getElementById('area');
const errorElement = document.getElementById('err');

form.addEventListener('submit', function(e)  {
    let messages = [];
    if (nam.value === '' || nam.value == null) {
        messages.push("please enter your name");
    }

    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emai.value)) {
        messages.push("write the correct  EMAIL");
    }

    
    if (phon.value.length < 11) {
        messages.push(" The phone number must be at least 11 digits");
    }

    if (mess.value.length <= 10) {
        messages.push("please enter your message");
    }

    if (messages.length > 0) {
        e.preventDefault();
        errorElement.style.color = "red";
        errorElement.style.marginBottom = "15px";
        errorElement.innerText = messages.join(', ');
    }
});

nam.oninput = function() {
    localStorage.setItem('user_name', nam.value);
};

emai.oninput = function() {
    localStorage.setItem('user_email', emai.value);
};

phon.oninput = function() {
    localStorage.setItem('user_phone', phon.value);
};

mess.oninput = function() {
    sessionStorage.setItem('temp_message', mess.value);
};

window.onload = function() {
    if (localStorage.getItem('user_name')) {
        nam.value = localStorage.getItem('user_name');
    }
    
    if (localStorage.getItem('user_email')) {
        emai.value = localStorage.getItem('user_email');
    }
    
    if (localStorage.getItem('user_phone')) {
        phon.value = localStorage.getItem('user_phone');
    }

    if (sessionStorage.getItem('temp_message')) {
        mess.value = sessionStorage.getItem('temp_message');
    }
};

const form = document.getElementById('form');
const nam = document.getElementById('textt');
const emai = document.getElementById('emai');
const phon = document.getElementById('num');
const mess = document.getElementById('area');
const errorElement = document.getElementById('err');

form.addEventListener('submit', function(e)  {
    let messages = [];
    if (nam.value === '' || nam.value == null) {
        messages.push("please enter your name");
    }

    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emai.value)) {
        messages.push("write the correct  EMAIL");
    }

    
    if (phon.value.length < 11) {
        messages.push(" The phone number must be at least 11 digits");
    }

    if (mess.value.length <= 10) {
        messages.push("please enter your message");
    }

    if (messages.length > 0) {
        e.preventDefault();
        errorElement.style.color = "red";
        errorElement.style.marginBottom = "15px";
        errorElement.innerText = messages.join(', ');
    }
});

nam.oninput = function() {
    localStorage.setItem('user_name', nam.value);
};

emai.oninput = function() {
    localStorage.setItem('user_email', emai.value);
};

phon.oninput = function() {
    localStorage.setItem('user_phone', phon.value);
};

mess.oninput = function() {
    sessionStorage.setItem('temp_message', mess.value);
};

window.onload = function() {
    if (localStorage.getItem('user_name')) {
        nam.value = localStorage.getItem('user_name');
    }
    
    if (localStorage.getItem('user_email')) {
        emai.value = localStorage.getItem('user_email');
    }
    
    if (localStorage.getItem('user_phone')) {
        phon.value = localStorage.getItem('user_phone');
    }

    if (sessionStorage.getItem('temp_message')) {
        mess.value = sessionStorage.getItem('temp_message');
    }
    
};

const form = document.getElementById('form');
const nam = document.getElementById('textt');
const emai = document.getElementById('email');
const phon = document.getElementById('num');
const mess = document.getElementById('area');
const errorElement = document.getElementById('err');

form.addEventListener('submit', function(e)  {
    let messages = [];
    if (nam.value === '' || nam.value == null) {
        messages.push("please enter your name");
    }

    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emai.value)) {
        messages.push("write the correct  EMAIL");
    }

    
    if (phon.value.length < 11) {
        messages.push(" The phone number must be at least 11 digits");
    }

    if (mess.value.length <= 10) {
        messages.push("please enter your message");
    }

    if (messages.length > 0) {
        e.preventDefault();
        errorElement.style.color = "red";
        errorElement.style.marginBottom = "15px";
        errorElement.innerText = messages.join(', ');
    }
});

nam.oninput = function() {
    localStorage.setItem('user_name', nam.value);
};

emai.oninput = function() {
    localStorage.setItem('user_email', emai.value);
};

phon.oninput = function() {
    localStorage.setItem('user_phone', phon.value);
};

mess.oninput = function() {
    sessionStorage.setItem('temp_message', mess.value);
};

window.onload = function() {
    if (localStorage.getItem('user_name')) {
        nam.value = localStorage.getItem('user_name');
    }
    
    if (localStorage.getItem('user_email')) {
        emai.value = localStorage.getItem('user_email');
    }
    
    if (localStorage.getItem('user_phone')) {
        phon.value = localStorage.getItem('user_phone');
    }

    if (sessionStorage.getItem('temp_message')) {
        mess.value = sessionStorage.getItem('temp_message');
    }
};




