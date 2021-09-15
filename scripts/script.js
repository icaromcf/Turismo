function openNav() {
    document.getElementsByClassName('sidenav')[0].style.width = "250px";
}
  
  function closeNav() {
    document.getElementsByClassName('sidenav')[0].style.width = "0";
}

//https://coolors.co/0a0908-49111c-f2f4f3-a9927d-5e503f

function showModal(e){
  //funçao que ao ser ativada mostra model box
  e.nextElementSibling.style.display='grid';
}
 
 function closeModal(e){
   //funçao que ao ser ativada mostra model box
   e.parentNode.parentNode.style.display='none';
}

// Chamando email

document.getElementById('send-form').addEventListener('submit', function () {
 
});

const sendButton = document.getElementById('sendForm').addEventListener('click', function(e){
  e.preventDefault()
  var nome = document.querySelector('.name').value
  var email = document.querySelector('.email').value
  var tel = document.querySelector('.tel').value
  var texto = document.querySelector('.desc').value
  console.log(nome)
  window.location.href=`mailto:${email}?Subject=Reservas%20Turismo%20o%Fortaleza&Body=${nome}%20${email}%20${tel}%20${'Descrição'+texto}`
})