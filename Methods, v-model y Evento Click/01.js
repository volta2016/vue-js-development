//pimer debemos intanciar a Vue para trabajar con el
const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Hola mundo con Vue',
        seen: false,
        message: `Cargaste esta pagina en ${new Date().toLocaleString()}`,
        numeroInicial: 00,
        frutas: ['Mazana', 'Uva', 'Platano'],
        frutasGrupo: [
            {nombre :'Kiwi', cantidad: 11},
            {nombre :'Naranja', cantidad: 0},
            {nombre :'Mango', cantidad: 13}
        ],
        nuevaFruta: '',
        nuevoNumero: '',
        total: '0'
    },
    methods: {
        agregarFruta () {
            this.frutasGrupo.push({
                nombre: this.nuevaFruta, cantidad: 0
            })
            this.nuevaFruta = '';//es el string vacio del instancia del data.
        },
    },
    computed: {
        sumarFrutas () {
            this.total = 0;//vamos a decirle que siempre parta en 0
            for(fruta of this.frutasGrupo) {
                this.total += this.total + fruta.cantidad;
            }
            return this.total;
        }
    }
})