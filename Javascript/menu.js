

const Menu = document.querySelector('.Menu');
const Menu2 = document.querySelector('.menu-navegacion');

//console.log(Menu)
//console.log(Menu2)

Menu.addEventListener('click' ,()=>{
    Menu2.classList.toggle("spread")
})


/** para hacer que marque en la consola 
window.addEventListener('click' , e=>{
    console.log(e.target)
}) */

window.addEventListener('click',e=>{
    if(Menu2.classList.contains('spread')
       && e.target !=Menu2 && e.target != Menu  ){
        Menu2.classList.toggle("spread")
    }
})

