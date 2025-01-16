let botao = document.getElementById('botao');


function logar () {
    var log = document.getElementById("login").value;
    var senha = document.getElementById("senha").value;

    if (log === "aland" && senha === "12345") {
        alert("Login feito com sucesso")
    } else {
        alert("Login ou senha incorretos")
    };

}
