<script setup>
    import ProductListItem from '../components/ProductListItem.vue';

    import { useFirestore, useCollection } from 'vuefire'
    import { collection, addDoc, deleteDoc, updateDoc, doc } from 'firebase/firestore'

    import { getStorage, ref, listAll } from "firebase/storage";


    const db = useFirestore()
    const products = useCollection(collection(db, 'productos'))

</script>

<template>
    <h2>Lista de productos</h2>
    <div>
        <ProductListItem v-for="product in products" :key="product.id" :product="product" />
    </div>
</template>