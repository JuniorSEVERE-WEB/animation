const btn = document.querySelector('.div-click button');
const sidebar = document.querySelector('.sidebar');
const body = document.body;

btn.addEventListener('click', () => {
    sidebar.classList.toggle('hide');
    if (sidebar.classList.contains('hide')) {
        body.style.backgroundColor = '#F5F5DC';
    } else {
        body.style.backgroundColor = '';
    }
});