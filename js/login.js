let objPeople = [
    {
        name: "Nazar Dzhura",
        username: "nazardzhura",
        email: "nazar_dzhura@ukr.net",
        phone: "380632071464",
        password: "45synth"
    }
]

function signIn() {
    const usernameOrEmail = document.getElementById('usernameOrEmail').value;
    const password = document.getElementById('password').value;

    for(let i = 0; i < objPeople.length; i++) {
        if((usernameOrEmail === (objPeople[i].email)) || (usernameOrEmail === (objPeople[i].username)) && password === objPeople[i].password) {
            window.location.href="home.html"
            return
        }
    }
    document.getElementById("error").innerHTML = "Wrong username or password"
}