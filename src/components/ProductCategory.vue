<script setup>
    import router from '../router';

    const props = defineProps(['product'])

    const verDetalle = () => {
        const id = props.product.id
        router.push(`/product-detail/${id}`)
    }
</script>

<template>
    <article @click="verDetalle" class="producto_categoria">
        <div class="producto_categoria__img_container">
            <img :src=props.product.image alt="">
        </div>
        <div class="producto_categoria__info">
            <h3>{{ props.product.title }}</h3>
            <p>{{ props.product.price }} €</p>
            <p class="producto_categoria__id" style="display: none;">{{ props.product.category }}</p>
        </div>
    </article>
</template>