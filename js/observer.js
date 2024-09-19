const edu1 = document.getElementById('2020')
const edu2 = document.getElementById('2021')
const edu3 = document.getElementById('2022')
const edu4 = document.getElementById('2023')

const pro1 = document.getElementById('mascotas')
const pro2 = document.getElementById('drivedoctor')
const pro3 = document.getElementById('sabiondos')
const pro4 = document.getElementById('ecommerce')


const hacerAnimacion= (entradas, observador)=>{
  entradas.forEach(entrada => {
        if (entrada.isIntersecting) { // se entro completamente al viewPort
            entrada.target.classList.add('visible');
        }else{
            entrada.target.classList.remove('visible');
        }
  });
}

// se va a ejecutar cada vez que entra y sale
const observador = new IntersectionObserver(hacerAnimacion,{
    root: null,  //--> viewport
    rootMargin: "20%",
    threshold: 0.8 //--> 0.0 a 1.0 (todo el elemento dentro del viewPort)
})

// que elementos queremos que observe
//ENTRADAS
observador.observe(edu1)
observador.observe(edu2)
observador.observe(edu3)
observador.observe(edu4)

observador.observe(pro1)
observador.observe(pro2)
observador.observe(pro3)
observador.observe(pro4)

// observer para habilidades
const habilidadesObserver = new IntersectionObserver((entradas, observer) => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add('visible');
        }else{
            entrada.target.classList.remove('visible');
        }
    });
}, { threshold: 0.3 }); // Umbral ajustado para que se active antes de que el elemento esté completamente visible

const habilidades = document.querySelectorAll('.lista-habilidades li');
habilidades.forEach(habilidad => {
    habilidadesObserver.observe(habilidad);
});

