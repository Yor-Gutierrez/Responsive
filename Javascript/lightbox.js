const imagenes = document.querySelectorAll('.img-galeria')
const imagenesLight = document.querySelector('.agregar-imagen')
const contenedorlight = document.querySelector('.imagen-light')
const Menu1 = document.querySelector('.Menu');


imagenes.forEach(imagen =>{
    imagen.addEventListener('click',()=>{
        aparecerImagen(imagen.getAttribute('src'))
    })
})

contenedorlight.addEventListener('click',(e)=>{
    if(e.target !==imagenesLight){
        contenedorlight.classList.toggle('show')
        imagenesLight.classList.toggle('showImage')  
        Menu1.style.opacity = '1'
    }
})

const aparecerImagen = (imagen)=>{
    imagenesLight.src = imagen;
    contenedorlight.classList.toggle('show')
    imagenesLight.classList.toggle('showImage')
    Menu1.style.opacity = '0'
}