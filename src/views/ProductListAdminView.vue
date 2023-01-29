<script setup>
    import ProductListItem from '../components/ProductListItem.vue';

    import { useFirestore, useCollection } from 'vuefire'
    import { collection, addDoc, deleteDoc, updateDoc, doc } from 'firebase/firestore'

    import { getStorage, ref, listAll } from "firebase/storage";
    import router from '../router';


    const db = useFirestore()
    const products = useCollection(collection(db, 'productos'))

    function deleteProduct(id) {
        deleteDoc(doc(db, 'productos', id))
    }

    function editProduct(id, title, category, description, price, image) {
        router.push('/admin-panel/editar-producto/' + id + '/' + title + '/' + category + '/' + description + '/' + price + '/' + image)
    }

</script>

<template>
    <h2>Lista de productos</h2>
    <div>
        <ProductListItem v-for="product in products" :key="product.id" :product="product"
            @deleteProduct="deleteProduct"
            @editProduct="editProduct"
        />
    </div>
</template>