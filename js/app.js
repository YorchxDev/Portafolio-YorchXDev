
const seccionesTodas = document.querySelector('.contenido-principal');
const seccion = document.querySelectorAll('.seccion');
const navegacion = document.querySelector('.navegacion');
const enlace = document.querySelectorAll('.enlace');


function cambiarSecciones() {
    // Seccion activa btn
    for(let i = 0; i < enlace.length; i++) {
        enlace[i].addEventListener('click', function() {
            let seccionActual = document.querySelectorAll('.btn-activo');
            seccionActual[0].className = seccionActual[0].className.replace('btn-activo', '');
            
            this.className += ' btn-activo';
        })
    }

    // Seccion activa clase

    seccionesTodas.addEventListener('click', (e) => {
        const id = e.target.dataset.id;

        if(id) {
            // enlace.forEach((btn) => {
            //     btn.classList.remove('activa');
            // });
            // e.target.classList.add('activa');

            seccion.forEach((sec) => {
                sec.classList.remove('activa');
            });

            const elemento = document.getElementById(id);
            elemento.classList.add('activa');
        };

    });

};


cambiarSecciones();