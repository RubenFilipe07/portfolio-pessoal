$('#carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        300:{
            items:4
        },
        650:{
            items:5
        }
     }
});

function mostrarNome(title){
    document.querySelector(".nome-tecnologias").style.opacity =  "1" 
    document.querySelector(".nome-tecnologias").innerText =  title 
}

function limparNome(){
    document.querySelector(".nome-tecnologias").style.opacity =  "0" 
}

$('.owl-dots').attr('aria-hidden', 'true');