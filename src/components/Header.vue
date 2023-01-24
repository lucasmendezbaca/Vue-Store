<script setup>
    import { RouterLink } from 'vue-router';
</script>

<template>
    <header class="header container">
        <img class="header__logo" src="../assets/img/logo.svg" alt="logo">

        <div class="header__user_menu">
            <a class="user_menu--login user_menu_link elemento_header" href="#"><i><img src="../assets/img/user.svg" alt="icono de usuario"></i>INICIAR SESIÓN</a>
            <a class="user_menu--cart user_menu_link" href="#"><i><img src="../assets/img/cart.svg" alt="icono de carrito"></i><i id="carrito_contador"></i></a>
        </div>

        <div id="menu__hamburguesa">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
        </div>

        <div class="header__secondary_menu">
            <router-link to="/category/electronics" class="header__secondary_menu__link elemento_header">ELECTRONICS</router-link>
            <a href="" class="header__secondary_menu__link elemento_header">JEWELERY</a>
            <a href="" class="header__secondary_menu__link elemento_header">MEN'S CLOTHING</a>
            <a href="" class="header__secondary_menu__link elemento_header">WOMEN'S CLOTHING</a>
        </div>
    </header>
</template>