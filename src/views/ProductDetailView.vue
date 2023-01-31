<script setup>
    import { ref } from 'vue'
    import router from '../router';
    import { products } from '../main'
    import { auth } from "../firebase";

    const productId = ref(router.currentRoute.value.params.id)
    const arrProducts = products.value.filter(product => product.id != null)
    const product = arrProducts.find(product => product.id == productId.value)

    // const userId = ref(auth.currentUser.uid)
    const talla = ref('M')
    const cantidad = ref(1)

    function addCarrito() {
        const productoCarrito = {
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            cantidad: cantidad.value,
            talla: talla.value,
            // userId: userId.value
        }
        const carrito = JSON.parse(localStorage.getItem('carrito'))
        if (carrito == null) {
            localStorage.setItem('carrito', JSON.stringify([productoCarrito]))
        } else {
            let cartProducts = JSON.parse(localStorage.getItem('carrito'))
            let productExists = cartProducts.find(product => product.id == productoCarrito.id && product.talla == productoCarrito.talla)
            if (productExists) {
                productExists.cantidad = parseInt(productExists.cantidad) + parseInt(productoCarrito.cantidad)
                localStorage.setItem('carrito', JSON.stringify(cartProducts))
            } else {
                cartProducts.push(productoCarrito)
                localStorage.setItem('carrito', JSON.stringify(cartProducts))
            }
        }
    }

</script>

<template>
    <article class="detalle_producto">
        <div class="detalle_producto__img">
            <img :src=product.image :alt=product.title>
        </div>
        <div class="detalle_producto__descripcion">
            <h1 class="detalle_producto__nombre">{{ product.title }}</h1>
            <p class="detalle_producto__descr">{{ product.description }}</p>
            <div class="detalle_producto__tallas">
                <p>Tallas:</p>
                <select name="talla" id="talla" v-model="talla">
                    <option value="XL">XL</option>
                    <option value="L">L</option>
                    <option value="M">M</option>
                    <option value="S">S</option>
                    <option value="XS">XS</option>
                </select>
            </div>
            <p class="detalle_producto__precio">Precio: <span>{{ product.price }}</span> €</p>
            <p class="detalle_producto__categoria">Categoria: <span>{{ product.category }}</span></p>
            <p>Cantidad: <input type="number" name="cantidad" id="cantidad" v-model="cantidad"></p>
            <button @click="addCarrito" class="boton boton--add_carrito">AÑADIR AL CARRITO<img class="animacion_carrito" src="../assets/img/cart.svg"></button>
        </div>
    </article>
</template>