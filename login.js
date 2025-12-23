// Показать/скрыть пароль
document.querySelectorAll('.show-password').forEach(btn => {
    btn.addEventListener('click', function() {
        const input = this.parentElement.querySelector('input');
        const icon = this.querySelector('i');
        
        if (input.type === 'password') {
            input.type = 'text';
            icon.className = 'fas fa-eye-slash';
        } else {
            input.type = 'password';
            icon.className = 'fas fa-eye';
        }
    });
});

// Переключение между учеником и родителем
document.querySelectorAll('input[name="role"]').forEach(radio => {
    radio.addEventListener('change', function() {
        const studentFields = document.querySelector('.student-fields');
        if (this.value === 'student') {
            studentFields.style.display = 'block';
        } else {
            studentFields.style.display = 'none';
        }
    });
});

// Валидация формы входа
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if (!email || !password) {
        alert('Заполните все поля');
        return;
    }
    
    alert('Вход выполнен! (демо-версия)');
    window.location.href = 'index.html';
});

// Валидация формы регистрации
document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('reg-email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('reg-password').value;
    const agreement = document.getElementById('agreement');
    
    if (!fullname || !email || !phone || !password) {
        alert('Заполните все обязательные поля');
        return;
    }
    
    if (password.length < 8) {
        alert('Пароль должен содержать минимум 8 символов');
        return;
    }
    
    if (!agreement.checked) {
        alert('Примите условия использования');
        return;
    }
    
    alert('Регистрация успешна! (демо-версия)');
    window.location.href = 'index.html';
});

// Маска для телефона
document.getElementById('phone').addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    
    if (value.length > 0) {
        if (!value.startsWith('7')) {
            value = '7' + value.substring(1);
        }
        
        let formatted = '+7';
        
        if (value.length > 1) {
            formatted += ' (' + value.substring(1, 4);
        }
        if (value.length >= 5) {
            formatted += ') ' + value.substring(4, 7);
        }
        if (value.length >= 8) {
            formatted += '-' + value.substring(7, 9);
        }
        if (value.length >= 10) {
            formatted += '-' + value.substring(9, 11);
        }
        
        e.target.value = formatted;
    }
});

// Забыли пароль
document.querySelector('.forgot-link').addEventListener('click', function(e) {
    e.preventDefault();
    const email = prompt('Введите ваш email для восстановления пароля:');
    if (email) {
        alert('Инструкция отправлена на ' + email);
    }
});

// Социальные кнопки
document.querySelectorAll('.social-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        alert('Вход через социальные сети (в демо-версии не работает)');
    });
});

// Инициализация
document.addEventListener('DOMContentLoaded', function() {
    // Показываем поля для ученика по умолчанию
    const studentFields = document.querySelector('.student-fields');
    studentFields.style.display = 'block';
    
    console.log('Страница входа загружена');
});