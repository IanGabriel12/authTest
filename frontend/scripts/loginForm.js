async function handleLogin(event) {
    event.preventDefault()

    const username = document.querySelector('input[name=username]').value
    const password = document.querySelector('input[name=password]').value

    try{
        const response = await axios.post('http://localhost:3333/login', {
            username,
            password
        })

        login(username, response.data.token)

        window.location.href = './homePage.html'
    } catch(err) {
        console.log(err)
    }
}

const form = document.querySelector('form')

form.addEventListener('submit', handleLogin)