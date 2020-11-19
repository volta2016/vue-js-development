/*Pensar como guardar la cadena de texto que es el color de la clase y que cuando
actualizemos el sitio web este lo recuerde

2-. cuando nostros refrescamos el sitio web fijemonos que va estar de color blanco
no le hemos dicho que lea la información del local Storage y cambie efectivamente el color
que el usuario ha registrado entonces como podriamos leer la información podriamos hacerlo
directamente en esta function auto ejecutable o podemos hacer otra así queda todo ordenado
*/



e.preventEventDefault();

const colorButton = e.target.classList[1];
  
// actualizacion del value en el localStorage
  switch (colorButton) {
    case "btn-primary":
      fondo.className = "bg-primary";
      localStorage.setItem('colorFondo', "btn-primary");
      break;
    case "btn-danger":
      fondo.className = "bg-danger";
      localStorage.setItem('colorFondo', "bg-danger");
      break;
    case "btn-warning":
      fondo.className = "btn-warning";
      localStorage.setItem('colorFondo', "btn-warning");
      break;
    case "btn-sencudary":
      fondo className = "btn-sencudary"
      localStorage.setItem('colorFondo', "btn-sencudary");
      break
    case "btn-success":
      fondo className = "btn-success"
      localStorage.setItem('colorFondo', "btn-success");
      break

    

  }




// guarda cadena de texto
// const class = 'primary';


// localStorage.setItem('class', class);
// const nameLocalStorage = localStorage.getItem('class');
// console.log(nameLocalStorage);
// localStorage.removeItem('nameUser');






