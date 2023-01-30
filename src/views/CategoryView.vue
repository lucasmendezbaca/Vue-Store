<script setup>
    import { ref } from 'vue'
    import router from '../router';
    import ProductCategory from '../components/ProductCategory.vue'

    import { products } from '../main'

    const categoryName = ref(router.currentRoute.value.params.name)
    const categoryProducts = products.value.filter(product => product.category == categoryName.value)

    // const productWithId = categoryProducts.find(product => product.id == "4y9SnUtxbiXFLMknFvbX")
    // console.log(productWithId)
</script>

<template>
    <div class="container">
        <h1>{{ categoryName }}</h1>
        <section class="grid_productos">
            <template v-for="product in categoryProducts" :key="product.id">
                <ProductCategory :product="product" />
            </template>
        </section>
    </div>
</template>