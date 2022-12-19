let allContent = [];
let currentContent = [];

const getLocalData = key => localStorage.getItem(key);


const orderUrl = 'https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders'
const productUrl = 'https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products'
const userUrl = 'https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users'
const searchUserUrl ='https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users?fullName='

const setLocalData = (key, val) => localStorage.setItem(key, JSON.stringify(val));

const checkLogin = () => {
    if (!getLocalData('login')) {
        window.location.href = "../html/main_login.html"
    }
}

const logout = () => {
    localStorage.clear()
    window.location.href = '../html/main_login.html'
}

let menu = document.querySelectorAll('.nav_link');
console.log(menu);
menu.forEach(menu => {
    menu.addEventListener('click', function() {
        menu.forEach(btn => btn.classList.remove('activeNav'));
        this.classList.add('activeNav');
    })
})