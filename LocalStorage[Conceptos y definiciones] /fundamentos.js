// LocalStorage: Guarda cadenas de textos, clave => valor 
//el valor recuerda que es una cadena de texto.
/*
SET => Guardando
GET => Obtener
guarda cadenas de texto donde las guarda en el navegador. pero en el navegador
del usuario esto quiere decir que no se guardan en ningun servidor, es muy impotante
que lo que guardemos no sea delicado por otros sitios web podrían acceder al localStorage
del usuario y obtener información delicada.
MUY importante no vayan a guar información delicada en el localStorage como usuario y contraseñas.
el localStorage se guarda en el navegador, y el navegador es del cliente, por lo tanto cada
cambio que hacemos en el site web lo vamos ver nosotros y no el resto
*/

// guarda cadena de texto
const name = 'Kyo';
// para guardar esa cadena de texto en nuestro localStorage (set guardar algo nuevo)
// la estamos relacionando con una clave que se llama nameUser.
// key(clave) = nameUser - value(valor) = 'kyo'
// localStorage.setItem('nameUser', name);

const nameLocalStorage = localStorage.getItem('nameUser');
console.log(nameLocalStorage);
localStorage.removeItem('nameUser');


// Session Storage la unica diferencia es que al cerrar el navegador "todo se pierde"
// En cambio el localStorage "no" mientra el navegador no limpie la cache, no limpie los
// datos del navegador esto va estar vigente, como nosotros lo tenemos en nuestro js
// si actualizamos debería aparecer nuevamente.
// indexDB una base de datos mucho mas compleja.




