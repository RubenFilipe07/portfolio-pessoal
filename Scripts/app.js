function teste(title){
    document.getElementById("conhecimentos").style.opacity =  "1" 
    document.getElementById("conhecimentos").innerText =  title 

}

function limpar(){
    document.getElementById("conhecimentos").style.opacity =  "0" 
}

if(screen.width <=620){
document.getElementById("css").href = "Estilo/mobile.css"
}