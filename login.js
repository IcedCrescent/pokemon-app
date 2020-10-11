const username = document.getElementById('user')
const password = document.getElementById('pass')
const loginButton = document.getElementById('login-btn')

// Check if the key 'users' is already exist in the local storage, or if it's empty
// In the case of not having existed, or only an empty array, then populate it with the default account
if (localStorage.getItem('users') == null || localStorage.getItem('users') === '[]') {
    localStorage.setItem('users', JSON.stringify([
        {
            username: 'admin',
            password: '123456'
        }
    ]))
}

// Get the user accounts from the localStorage
let users = JSON.parse(localStorage.getItem('users'))

// Check if the user and password is correct
loginButton.onclick = () => {
    let valid = false
    for (let i = 0; i < users.length; i++) {
        if (username.value === users[i].username && password.value === users[i].password) {
            localStorage.setItem('logged-in', users[i].username)
            valid = true
            break
        }
    }
    if (!valid) {
        alert('Wrong username or password')
    } else {
        window.location = 'index.html'
    }
}