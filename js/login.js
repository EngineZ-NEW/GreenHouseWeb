let objPeople = [
    {
        username: "nazardzhura",
        password: "45synth"
    },
    {
        username: "exampleuser1",
        password: "12345"
    }
]

function getInfo() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    for(let i = 0; i < objPeople.length; i++) {
        if(username === objPeople[i].username && password === objPeople[i].password) {
            console.log(username + " has been logged in")
            return
        }
    }
    console.log("Incorrect username or password.")
}