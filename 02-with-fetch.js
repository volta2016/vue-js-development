//aplicamos un arreglo de productos 
const app = new Vue ({
    el: '#app',
    data: {
        products: []
    },
    computed: {
        totalProducts () {
            return this.products.reduce((sum, products) => {
                return sum + products.quantity
            },0)
        }
    },
    created () {
        fetch('https://api.myjson.com/bins/74l63')
            .then(response => response.json())
            .then(json => {
                this.products = json.products
            })
    }
})