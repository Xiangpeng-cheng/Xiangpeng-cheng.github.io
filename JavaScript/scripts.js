// Show login form
document.querySelector('.login-button').addEventListener('click', function () {
    document.getElementById('loginForm').style.display = 'flex';
});

// Validate password and handle login
function validatePassword() {
    var password = document.getElementById('passwordInput').value;
    if (password === '071120') {
        alert('登录成功！');
        window.location.href = 'AIXIN/爱心代码.html';
    } else {
        alert('密码错误，请重试。');
    }
}

// Close login form
function closeLoginForm() {
    document.getElementById('loginForm').style.display = 'none';
}
