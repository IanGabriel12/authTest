function showModal(message){
    const modalContainer = document.querySelector('.modal')
    const modalMessage = document.querySelector('.modal-content h1')
    const modalButton = document.querySelector('.modal-content button')

    modalMessage.innerHTML = message

    modalContainer.classList.add('modal-activated')

    console.log(modalContainer)

    modalButton.addEventListener('click', () => {
        modalContainer.classList.remove('modal-activated')
    })
}

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
        showModal(err)
    }
}

const form = document.querySelector('form')

form.addEventListener('submit', handleLogin)