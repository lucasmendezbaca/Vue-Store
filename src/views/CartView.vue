<script setup>
    import { ref } from 'vue'
    const products = ref(JSON.parse(localStorage.getItem('carrito')) || []);

    function addProduct(id, talla) {
        const product = products.value.find(product => product.id == id && product.talla == talla);
        product.cantidad++;

        localStorage.setItem('carrito', JSON.stringify(products.value));
    }

    function subProduct(id, talla) {
        const product = products.value.find(product => product.id == id && product.talla == talla);
        if (product.cantidad > 1) {
            product.cantidad--;
        }else {
            products.value.splice(products.value.indexOf(product), 1);
        }

        localStorage.setItem('carrito', JSON.stringify(products.value));
    }

    function deleteCart() {
        localStorage.removeItem('carrito');
        products.value = false;
    }

</script>

<template>
    <div class="container carrito">
        <template v-if="products">
            <div class="carrito__header">
                <h1 class="carrito__titulo">Carrito</h1>
                <button @click="deleteCart" class="button--fino carrito__vaciar_carrito">Vaciar carrito</button>
            </div>
            <div class="carrito__productos">
                <div v-for="product in products" class="carrito__producto">
                    <div class="carrito__imagen__container">
                        <img class="carrito__imagen" :src=product.image :alt=product.title>
                    </div>
                    <div class="carrito__info">
                        <h3 class="carrito__nombre">{{ product.title }}</h3>
                        <span class="carrito__id">{{ product.id }}</span>
                        <p class="carrito__precio">{{ product.price }} €</p>
                        <p class="carrito__talle_p">Talla: <span class="carrito__talle">{{ product.talla }}</span></p>
                        <p class="carrito__cantidad">Cantidad: {{ product.cantidad }} <span @click="subProduct(product.id, product.talla)"><i class="carrito__quitar_producto carrito__opciones fa-solid fa-minus"></i></span><span @click="addProduct(product.id, product.talla)"><i class="carrito__agregar_producto  carrito__opciones fa-solid fa-plus"></i></span></p>
                        <p class="carrito__subtotal">Subtotal: {{ Math.round((product.price * product.cantidad) * 100) / 100 }} €</p>
                    </div>
                </div>
            </div>
            <div class="carrito__footer">
                <p class="carrito__total">Total: <span>{{Math.round((products.reduce((acc, product) => acc + product.price * product.cantidad, 0)) * 100) / 100 }} €</span></p>
                <p class="carrito__precio_envio">Precio de envío: <span>Gratis</span></p>
                <button class="boton--comprar">Finalizar Compra</button>
            </div>
        </template>

        <template v-else>
            <h1 class="carrito__titulo">Carrito</h1>
            <p class="carrito__vacio">El carrito está vacío</p>
        </template>
    </div>
</template>