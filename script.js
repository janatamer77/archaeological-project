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
