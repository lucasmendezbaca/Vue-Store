<script setup>
    defineProps(['product'])
</script>

<template>
    <article class="producto_categoria">
        <div class="producto_categoria__img_container">
            <img :src=product.image alt="">
        </div>
        <div class="producto_categoria__info">
            <h3>{{ product.title }}</h3>
            <p>{{ product.price }} €</p>
            <p class="producto_categoria__id" style="display: none;">{{ product.category }}</p>
        </div>
    </article>
</template>