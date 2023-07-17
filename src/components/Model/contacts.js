//banco para os registros
var contactList = []


class Contact {
    firstName = ""
    password = ""
    userName = ""

    constructor(firstName, password, userName) {
        this.firstName = firstName
        this.password = password
        this.userName = userName
    }

}


function newContact() {
    const firstName = document.getElementById('name').value
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value

    const newContact = new Contact(firstName, password, username)
    console.log(newContact)

    contactList.push(newContact)
}

function login() {
    let flag = false
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value

    contactList.forEach(contato => {
        if (contato.userName === username && contato.password === password) {
            flag = true
        }
    })
    flag === true ? alert("Login realizado com sucesso!") : alert("ERRO!\nVerifique os dados e tente novamente")
}

function cleanInputs(tela) {
    switch (tela) {

        case 'RegisterScreen':
            document.getElementById('name').value = ""
            document.getElementById('username').value = ""
            document.getElementById('password').value = ""
            break

        case 'LoginScreen':
            document.getElementById('username').value = ""
            document.getElementById('password').value = ""
            break

    }
}


export { contactList, newContact, login }