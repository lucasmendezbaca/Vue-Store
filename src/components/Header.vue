<script setup>
    import { RouterLink } from 'vue-router';
    import { router } from "../router";
    import { ref } from 'vue';

    import { onAuthStateChanged } from "firebase/auth";
    import { auth } from "../firebase";
    import { checkAuth } from "../router/index";

    var isAuthenticated = false;
    checkAuth().then((result) => {
        isAuthenticated = result;
        console.log("dentro " + isAuthenticated)
    });
    console.log("fuera " + isAuthenticated)

    function cerrarSesion() {
        auth.signOut().then(() => {
            console.log("Sesión cerrada")
        }).catch((error) => {
            console.log(error)
        });

        isAuthenticated = false;
        router.push("/");
    }

    const cartProducts = ref(JSON.parse(localStorage.getItem('carrito')) || []);
    function countNumProductsCart() {
        let numProductsCart = 0;
        cartProducts.value.forEach(product => {
            numProductsCart += product.cantidad;
        });
        return numProductsCart;
    }
</script>

<template>
    <header class="header container">
        <router-link to="/"><img class="header__logo" src="../assets/img/logo.svg" alt="logo"></router-link>

        <div class="header__user_menu">
            <router-link v-if="isAuthenticated == false" to="/login" class="user_menu--login user_menu_link elemento_header"><i><img src="../assets/img/user.svg" alt="icono de usuario"></i>INICIAR SESIÓN</router-link>
            <span v-if="isAuthenticated == true" @click="cerrarSesion()" class="user_menu--login user_menu_link elemento_header"><i><img src="../assets/img/user.svg" alt="icono de usuario"></i>CERRAR SESIÓN</span>
            <router-link v-if="isAuthenticated == true" to="/admin-panel" class="user_menu--login user_menu_link elemento_header"><i><img src="../assets/img/user.svg" alt="icono de usuario"></i>Administración</router-link>
            <router-link to="/cart" class="user_menu--cart user_menu_link"><i><img src="../assets/img/cart.svg" alt="icono de carrito"></i><i id="carrito_contador">{{ countNumProductsCart() }}</i></router-link>
        </div>

        <div id="menu__hamburguesa">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
        </div>

        <div class="header__secondary_menu">
            <router-link to="/category/electronics" class="header__secondary_menu__link elemento_header">ELECTRONICS</router-link>
            <router-link to="/category/jewelery" class="header__secondary_menu__link elemento_header">JEWELERY</router-link>
            <router-link to="/category/men's clothing" class="header__secondary_menu__link elemento_header">MEN'S CLOTHING</router-link>
            <router-link to="/category/women's clothing" class="header__secondary_menu__link elemento_header">WOMEN'S CLOTHING</router-link>
        </div>
    </header>
</template>