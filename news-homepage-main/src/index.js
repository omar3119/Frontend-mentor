let d = document;
let $menu = d.querySelector('.menu');
let $bgmenu = d.querySelector('.bg-menu');
let $barmenu = d.querySelector('.menu-bar');
let $close = d.querySelector('.close');




$menu.addEventListener('click',()=>{
    $bgmenu.classList.remove('hidden');
    $barmenu.classList.add('translate-x-[0]')

})
$close.addEventListener('click',()=>{
    $bgmenu.classList.add('hidden');
    $barmenu.classList.remove('translate-x-[0]')

})