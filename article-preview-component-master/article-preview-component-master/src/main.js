let d = document;
let $compartirLogo = d.querySelector('.logo__compartir');
let $perfil = d.querySelector('.perfil');
let $redesActive = d.querySelector('.redes__active');
let $containerShare = d.querySelector('.container__share');


$compartirLogo.addEventListener('click',()=>{

    $redesActive.classList.toggle('flex')
    $redesActive.classList.toggle('hidden')

})