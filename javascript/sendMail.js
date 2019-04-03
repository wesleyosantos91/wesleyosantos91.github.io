function submitForm(e){


    e.preventDefault();
    var nome = document.getElementById("entry.1317500699").value;
    var assunto = document.getElementById("entry.445161768").value;
    var email = decodeURIComponent(document.getElementById("entry.593498457").value);
    var mensagem = document.getElementById("entry.1719154220").value;

    var urlBase = 'https://docs.google.com/forms/d/e/1FAIpQLSdvZ3AFXDl7haYRntVvmt3h4zq6IVuIl58RkYTWNy7pGMm4Cw/formResponse?';

    urlBase = urlBase + "entry.1317500699=" + nome;
    urlBase = urlBase + "&entry.445161768=" + assunto;
    urlBase = urlBase + "&entry.593498457=" + email;
    urlBase = urlBase + "&entry.1719154220=" + mensagem;

    document.getElementById("entry.1317500699").value = null;
    document.getElementById("entry.445161768").value = null;
    document.getElementById("entry.593498457").value = null;
    document.getElementById("entry.1719154220").value = null;

    console.log(urlBase)

    fetch(urlBase,  {mode: 'no-cors'})
        .then(function(data) {
            console.log(data);
            Materialize.toast('Obrigado pelo contato. Retornarei o mais breve possível. ' +
                '<br> Se preferir, entre em contato pelo número (61) 99203-1236.', 10000, 'green rounded');
        })
        .catch(function(error) {
            console.log(error);
            Materialize.toast('Erro ao enviar o e-mail tente novamente', 3000, 'red');
        });
}