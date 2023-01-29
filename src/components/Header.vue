<script setup>
    import { RouterLink } from 'vue-router';

    import { onAuthStateChanged } from "firebase/auth";
    import { auth } from "../firebase";

    // import { useFirestore, useCollection } from 'vuefire'
    // import { collection, addDoc, deleteDoc, updateDoc, doc } from 'firebase/firestore'

    var estaAutenticado = false;

    onAuthStateChanged(auth, (user) => {
        if (user) {
            estaAutenticado = true;
        } else {
            estaAutenticado = false;
        }
        console.log(estaAutenticado + " desde el onAuthStateChanged")
    });
    console.log(estaAutenticado + " desde el script setup")


    // const db = useFirestore()
    // const products = useCollection(collection(db, 'productos'))
</script>

<template>
    <header class="header container">
        <router-link to="/"><img class="header__logo" src="../assets/img/logo.svg" alt="logo"></router-link>

        <div class="header__user_menu">
            <router-link to="/login" class="user_menu--login user_menu_link elemento_header"><i><img src="../assets/img/user.svg" alt="icono de usuario"></i>
                <template v-if="estaAutenticado">
                    CERRAR SESIÓN
                </template>
                <template v-else>
                    INICIAR SESIÓN
                </template>
            </router-link>
            <a class="user_menu--cart user_menu_link" href="#"><i><img src="../assets/img/cart.svg" alt="icono de carrito"></i><i id="carrito_contador"></i></a>
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