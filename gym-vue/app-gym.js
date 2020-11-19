
const  app = new Vue ({
    el: '#app',
    data: {
        titulo: 'Gym con Vue',
        arrayActividades: [],
        nuevaActividad: ''
    },
    methods: {
        agregarActividad: function() {
            // console.log('diste click', this.nuevaActividad);
            this.arrayActividades.push({
                nombre: this.nuevaActividad,
                estado: false
            });
            this.nuevaActividad = '';
            localStorage.setItem('gym-local', JSON.stringify(this.arrayActividades));
        },
        editarActividad: function(index) {
          this.arrayActividades[index].estado = true;
          localStorage.setItem('gym-local', JSON.stringify(this.arrayActividades));;
        },
        eliminarActividad: function(index) {
            this.arrayActividades.splice(index, 1);
            localStorage.setItem('gym-local', JSON.stringify(this.arrayActividades));
        }
    },
    created: function() {
        let datosDB = JSON.parse(localStorage.getItem('gym-local'));
        console.log(datosDB);
        if(datosDB === null) {
            this.arrayActividades;
        } else {
            this.arrayActividades = datosDB;
        }
    }
});