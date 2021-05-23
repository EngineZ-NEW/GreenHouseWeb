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
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    for(let i = 0; i < objPeople.length; i++) {
        if(username === objPeople[i].username && password === objPeople[i].password) {
            window.location.href="home.html"
            return
        }
    }
    document.getElementById("error").innerHTML = "Wrong username or password."
}