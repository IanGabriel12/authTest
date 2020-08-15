function handleLogout(){
    logout()
    window.location.href = './loginForm.html'
}

const h1 = document.querySelector('.home-content h1')
h1.innerHTML = "Olá " + localStorage.getItem('username')

const p = document.querySelector('.home-content p')
axios.get('http://localhost:3333/private', {
    headers:{
        Authorization: 'Bearer ' + getToken()
    }
})
.then(response => {
    p.innerHTML = response.data
})
.catch(error => {
    logout()
    window.location.replace('./loginForm.html')
})

const button = document.querySelector('.home-content button')
button.addEventListener('click', handleLogout)