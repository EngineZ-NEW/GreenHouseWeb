function register() {
    Array.from(document.querySelectorAll(`#registrationForm input`)).reduce((acc, input)=> ({...acc, [input.id]: input.value}), {});
}