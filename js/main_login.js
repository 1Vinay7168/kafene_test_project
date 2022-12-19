const setLoginContents = () => getLocalData('login') && window.location.replace('../html/order_list.html');

$(document).ready(function(e) {
    setLoginContents();

    $('#loginForm').submit((e) => {
        e.preventDefault();
        let userName = $('#username').val();
        let password = $('#password').val();
        if (userName === password) {
            setLocalData('login', true);
            alert('Login Successful!');
            window.location.href = '../html/order_list.html'
        } else {
            alert('Please enter the valid credential!');
        }
    })
});