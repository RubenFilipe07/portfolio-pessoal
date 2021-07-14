$('#carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    lazyLoad:true,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            dots:false
        },
        300:{
            items:4,
            dots:false
        },
        650:{
            items:5,
            dots:true
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

$(".owl-dot").attr('aria-label',"own-dot");