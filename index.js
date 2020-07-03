const h1 = document.getElementById('welcomeSign')


// const name = prompt('ENTER YOUR NAME!')
// if(name.length <3){
//     alert('Nama harus lebih panjang dari 3 huruf')
// }a

h1.innerText = `Welcome ${name} ENJOY THE MOVIE :)`
h1.style.color = 'white'

const button = document.getElementsByClassName('text')
const nama = document.getElementsByTagName('p')
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function(){
        console.log( nama[i].innerText ,'aku ke click mas');
    })
}
