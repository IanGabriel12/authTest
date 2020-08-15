function login(username, token){
    localStorage.setItem('username', username)
    localStorage.setItem('token', token)
}

function logout(){
    localStorage.removeItem('username')
    localStorage.removeItem('token')
}

function isLoggedIn(){
    return localStorage.getItem('token') !== null
}

function getToken(){
    return localStorage.getItem('token')
}