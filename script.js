const loginKey = 'key'
const loginPassword = '1234'

/** Reference til loginknappen */
const loginButton = document.getElementById('loginbutton')
const logoutButton = document.getElementById('logoutButton')
const loginDiv = document.getElementById('loginDiv')
const logoutDiv = document.getElementById('logoutDiv')
const loginChecker = document.getElementById('loginChecker')

// Hvis siden har en loginchecker id så bliver der checket om man er logget på eller ej, og ellers bliver man viderestillet til loginsiden 
if (loginChecker) {
    if (!isLoggedIn()) document.location.replace('login.html')
}

if (loginDiv) {
    if (isLoggedIn()) loginDiv.style.display = 'none'
    else logoutDiv.style.display = 'none'
}


if (loginButton) {
    const password = document.getElementById('password')
    loginButton.addEventListener("click", () => {
        if (logIn(password.value)) document.location.replace('index.html')
    })
}

if (logoutButton) {
    logoutButton.addEventListener("click", () => {
        logOut()
          loginDiv.style.display = ''
         logoutDiv.style.display = 'none'
    })
}

function isLoggedIn () {
    return localStorage.getItem(loginKey) === loginPassword
}

/** Login gemmer password i browserens local storage */ 
function logIn (password) {
    localStorage.setItem(loginKey, password)
    return isLoggedIn()
}

function logOut () {
    localStorage.removeItem(loginKey)
}