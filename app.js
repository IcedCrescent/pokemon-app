// DOM constants of the container and login p tag
const container = document.querySelector('.pokemon-container')
const loginBanner = document.querySelector('.login')

// data copied from https://bit.ly/mindx-pokemon
let data = {
    "count": 12, "details": [{ "name": "bulbasaur", "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" },
    { "name": "ivysaur", "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png" },
    { "name": "venusaur", "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png" },
    { "name": "charmander", "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" },
    { "name": "charmeleon", "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png" }, { "name": "charizard", "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png" }, { "name": "squirtle", "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png" }, { "name": "wartortle", "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png" }, { "name": "blastoise", "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png" }, { "name": "caterpie", "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png" }, { "name": "metapod", "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png" }, { "name": "butterfree", "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png" }]
}

// boolean variable, true if user is logged in
let loggedIn = checkLoggedIn()

// loop through each opject, create a new pokemon div with the image and download button
// (Can use normal for loop instead)
data['details'].forEach(item => {
    let pokemonDiv = document.createElement('div')
    pokemonDiv.className = 'pokemon'
    let image = document.createElement('img')
    image.src = item.sprite
    let downloadBtn = document.createElement('input')
    downloadBtn.type = 'button'
    downloadBtn.value = 'Download'
    // the the user isn't logged in, the download button won't do anything
    if (loggedIn) {
        downloadBtn.onclick = () => {
            let a = document.createElement('a')
            a.href = item.sprite
            let splited = item.sprite.split('/')
            a.download = `pokemon-${splited[splited.length - 1]}`
            // create a fake a element, then click on it
            pokemonDiv.appendChild(a)
            a.click()
            pokemonDiv.removeChild(a)
        }
    }
    pokemonDiv.appendChild(image)
    pokemonDiv.appendChild(downloadBtn)
    container.appendChild(pokemonDiv)
})

/**
 * Check if the user is logged in through localStorage
 * Also change the login banner
 * @returns true if user is logged in
 */
function checkLoggedIn() {
    let currentUser = localStorage.getItem('logged-in')
    if (currentUser) {
        loginBanner.innerText = `Hello ${currentUser}`
        return true
    }
    loginBanner.innerHTML = 'You are not logged in. <a href="login.html">Log in</a> to download image'
    return false
}