const emailList = document.getElementById('email');
// dichiaro la costante email preso l'id all'interno della DOM
const fetchNew = document.getElementById('fetchNew')

const fetchemail = () => {

    emailList.innerHTML = '';

    for (let i = 0; i < 10; i++) {
        //ciclo per creare 10 email
        fetch('https://flynn.boolean.careers/exercises/api/random/mail')
            //fetch invia richiesta API
            .then(response => response.json())
            .then(data => {
                //creaiamo un nuovo elemento list item e lo aggiungiamo alla lista
                const email = data.response;
                const listItem = document.createElement('li');
                listItem.textContent = email;
                emailList.appendChild(listItem);
            })
    }
}
//aggiungo un event listener per richiamare le la funzione al click e sistituire le email precedenti
fetchNew.addEventListener('click', fetchemail)



fetchemail();

