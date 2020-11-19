Vue.component('saludo',{
    template: `
    <div>
        <h3>{{saludo}}</h3>
        <h4>{{valor}}</h4>
    </div>
    `,
    data(){
        return {
            saludo: 'Hola saludos desde Vue js components',
            valor: 2
        }
    }
});