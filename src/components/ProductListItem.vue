<script setup>
    const props = defineProps({
        product: {
            type: Object,
            required: true
        }
    })
</script>

<template>
    <!-- Maquetar el producto en la lista -->
    <div class="product-list-item">
        <img class="product-list__img" :src=props.product.image alt="">
        <p>{{ props.product.title }}</p>
        <p>{{ props.product.price }} €</p>
    </div>
    <!-- <h3>{{ props.product.title }}</h3>
    <img :src=props.product.image alt=""> -->
</template>