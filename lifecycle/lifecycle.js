const app = new Vue ({
    el: '#app',
    data: {
        saludo: 'soy ciclo de vida de vue'
    },
    beforeCreate() {
        //esto se ejecuta ante o el momento que se crea vue
        console.log('beforeCreate');
    },
    created() {
        //al crear los metodos y observadores de eventos, pero aún no accede al DOM.
        //Aun no se puede acceder a 'el'
        console.log('created');
    },
    beforeMount() {
        //se crearan los métodos observadores y eventos, pero aún no accede al DOM.
        //Aún no se puede acceder al 'el'
        console.log('beforeMount');
    },
    mounted() {
        //se ejecuta al insertar al dom lee los observadores
        console.log('mounted')
    },
    beforeUpdate() {
        //al detecatar los cambios
        console.log('beforeUpdate')
    },
    updated() {
        //al realizar los cambios
        console.log('updated')
    },
    beforeDestroy() {
        //antes de destruir la instacia
        console.log('beforeDestroy')
    },
    destroyed() {
        //se destruye toda la instacia
        console.log('destroyed')
    },
    methods: {
        destruir() {
            this.$destroy()
        }
    }


});