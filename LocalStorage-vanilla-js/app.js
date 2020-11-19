console.log('funcionando')
//variables globales
const formularioUI = document.querySelector('#formulario')
const listasUI = document.getElementById('listaActividades')
let arregloActividades = []

//funciones

const crearItem = (actividad)  => {
    let item = {
        actividad: actividad,
        estado: false
    }
    arregloActividades.push(item);    
    return item
}

const guardarDB = () => {
    localStorage.setItem('rutina', JSON.stringify(arregloActividades));
    PintarDB();
}

//el programa parte con la rutina del array null
const PintarDB = () => {
    listasUI.innerHTML = '';//ahora esta limpiando toda esa información que quiero que partar d 0
    arregloActividades = JSON.parse(localStorage.getItem('rutina'));

    if(arregloActividades === null) {
        arregloActividades = [];
    } else {
        arregloActividades.forEach(element => {
            if (element.estado) {
                listasUI.innerHTML += `<div class="alert alert-success" role="alert"><i class="material-icons float-left mr-2">accessibility</i><b>${element.actividad}</b> - ${element.estado}<span class="float-right"><i class="material-icons">done</i><i class="material-icons">delete</i></span></div>`;
            } else {
                listasUI.innerHTML += `<div class="alert alert-danger" role="alert"><i class="material-icons float-left mr-2">accessibility</i><b>${element.actividad}</b> - ${element.estado}<span class="float-right"><i class="material-icons">done</i><i class="material-icons">delete</i></span></div>`;
            }

        });
    }
}

const EliminarDB = (actividad) => {
    console.log(actividad);
    let indexArray;
    arregloActividades.forEach((element, index) => {
        if(element.actividad === actividad) {
            indexArray = index;
        }
    });

    arregloActividades.splice(indexArray, 1 ) 
    guardarDB();

}

const EditarDB = (actividad) => {
    let indexArray = arregloActividades.findIndex((element) => element.actividad === actividad);
    console.log(arregloActividades[indexArray]);
    arregloActividades[indexArray].estado = true;
    guardarDB();
} 

//lo logica que hay que aplicar es que cuando presionemos el botón de guardar vamos agregar 
//una actividad

//EventListener
//acá detectamos el boton submit y el input creamos el item con la actividad del User
formularioUI.addEventListener('submit', (e) => {
    //aplicamos (e) para hacer una configuraciones previas
    e.preventDefault()
    let actividadUI = document.getElementById('actividad').value;
    // console.log(actividadUI);
    crearItem(actividadUI);
    guardarDB();

    formularioUI.reset();
})

document.addEventListener('DOMContentLoaded', PintarDB);

listasUI.addEventListener('click', (e) => {
    e.preventDefault();
    
    console.log(e.target.innerHTML);
    if(e.target.innerHTML === 'done' || e.target.innerHTML === 'delete') {
        // console.log('accion de done');
    let texto = e.path[2].childNodes[1].innerHTML;//con esto obtenemos un mouse event
    if(e.target.innerHTML === 'delete'){
      // Accción de eliminar
      EliminarDB(texto);
    }
    if(e.target.innerHTML === 'done'){
      // Accción de editar
      EditarDB(texto);
    }
    }
});