<script setup>
    import { ref } from 'vue'
    import router from '../router';
    import ProductCategory from '../components/ProductCategory.vue'

    import { useFirestore, useCollection } from 'vuefire'
    import { collection, addDoc, deleteDoc, updateDoc, doc } from 'firebase/firestore'

    // defineProps(['products'])
    const db = useFirestore()
    const products = useCollection(collection(db, 'productos'))

    const categoryName = ref(router.currentRoute.value.params.name)
</script>

<template>
    <div class="container">
        <h1>{{ categoryName }}</h1>
        <section class="grid_productos">
            <template v-for="product in products" :key="product.id">
                <ProductCategory :product="product" v-if="product.category == categoryName"/>
            </template>
        </section>
    </div>
</template>