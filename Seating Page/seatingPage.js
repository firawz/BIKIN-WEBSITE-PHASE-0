
const row = document.getElementsByClassName('row')

let angka = 0
const kursi = document.getElementsByClassName('kursi')
let status = false
for (let i = 0; i < row.length; i++) {
    row[i].addEventListener('mouseenter', function(){
        if(status == false){
        row[i].style.background = 'lightblue';   
    }
    })
    row[i].addEventListener('mouseleave', function(){    
        if(status == false){
        row[i].style.background = '';   
    }
    })
    row[i].onclick = function(){
        if(status == false){
        row[i].classList.toggle('kursi')
        // console.log(row[i])
        console.log(status)
        }
    }
}

const beliKursi = document.getElementsByClassName('beliKursi')

beliKursi[0].addEventListener('click', function(){
    status = true
    alert(`kamu sudah beli kursi sebanyak ${kursi.length} dan kamu harus bayar sebanyak ${kursi.length * 50000}`)
    for (let i = 0; i < kursi.length; i++) {
        kursi[i].removeEventListener('mouseenter',function(){
            return false
        })
        kursi[i].removeEventListener('mouseleave',function(){
            return false
        })
        const harga = document.getElementById('total')
        harga.innerHTML = `Mohon bayar sebanyak  ${kursi.length * 50000}`
        const sisaKursi = document.getElementById('KURSI')
        let sisa = row.length - kursi.length
        sisaKursi.innerText = `SISA KURSI ADALAH ${sisa}`
    }
})


// https://stackoverflow.com/questions/19353331/getting-or-changing-css-class-property-with-javascript-using-dom-style