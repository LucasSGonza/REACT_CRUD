//banco para os registros
var userList = []


class User {
    firstName = ""
    password = ""
    userName = ""

    constructor(firstName, password, userName) {
        this.firstName = firstName
        this.password = password
        this.userName = userName
    }

}


function newUser() {
    const firstName = document.getElementById('name').value
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value

    const newUser = new User(firstName, password, username)
    console.log(newUser)

    if (firstName !== "" && username !== "" && password !== "") {
        if (!validateIfUserAlreadyExist(newUser)) {
            userList.push(newUser)
            alert("Registro realizado com sucesso!")
            cleanInputs("RegisterScreen")
        } else {
            alert("'Username' já em uso!")
            cleanInputs("RegisterScreen")
        }

    } else {
        alert("Para realizar um registro preencha todos os campos requisitados!")
        cleanInputs("RegisterScreen")
    }

}

function login() {
    let flag = false
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value

    userList.forEach(user => {
        if (user.userName === username && user.password === password) {
            flag = true
        }
    })

    if (flag === true) {
        alert("Login realizado com sucesso!")
        cleanInputs("LoginScreen")
        //redireciona pra tela para os cadastrados
    } else {
        alert("ERRO!\nVerifique os dados e tente novamente")
        cleanInputs("LoginScreen")
    }
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

        default:
        break

    }
}

function validateIfUserAlreadyExist(newUser) {
    let flag = false
    userList.forEach(user => {
        if (user.userName === newUser.userName) {
            flag = true
        }
    })
    return flag
}


export { userList, newUser, login, cleanInputs }