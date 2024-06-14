// Функция для получения имени пользователя и отображения его на странице
function askUserName() {
    let name = prompt("Введите ваше имя:");
    if (name) {
        document.getElementById('userName').textContent = name;
    }
}

// Вызов функции при загрузке страницы
window.onload = askUserName;
