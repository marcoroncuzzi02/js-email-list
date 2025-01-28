
let emailBlock = document.getElementById('email-block')


// axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
//     .then(response => {
//         console.log(response.data.response)
//         //codice da eseguire in caso di successo

//         emailBlock.innerHTML =`<span>${response.data.response}</span>` 

//         //    numero = response.data.response;
//     })
//     .catch(error => {
//         // codice da eseguire in caso di errore
//         console.error(error)
//     })


for (let i=0; i<10; i++){
    fetch("https://flynn.boolean.careers/exercises/api/random/mail", { method: "GET" })
    .then(response => response.json())
    .then(data => {
        // codice per far qualcosa con la risposta
        console.log(data.response);

        emailBlock.innerHTML += `<div>${data.response}</div>`

    })
    .catch(error => {
        // codice da eseguire in caso di errore
        console.error(error);
    });
}


