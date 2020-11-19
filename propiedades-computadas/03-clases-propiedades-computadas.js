 const app = new Vue ({
     el: '#app',
     data: {
        fondo: 'bg-warning',
        // color: true,
        title: 0,
        message: 'Hola Mundo',
        contador: 0
     },
     methods: {

     },
     computed: {
        invertido () {
            return this.message.split('').reverse().join('-');
        },
        color(){
            return {
                'bg-success' : this.contador <= 10,
                'bg-warning' : this.contador > 10 && this.contador < 20,
                'bg-danger' : this.contador >= 20       
            }
        }
    }
 });