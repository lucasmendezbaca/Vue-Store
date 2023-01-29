<script setup>
    import { useFirestore, useCollection } from 'vuefire'
    import { collection, addDoc, deleteDoc, updateDoc, doc } from 'firebase/firestore'
    import { ref } from 'vue'
    import router from '../router';

    import { getStorage, ref as ref2, uploadBytes, getDownloadURL } from "firebase/storage";

    const name = ref('')
    const category = ref('')
    const description = ref('')
    const price = ref(0)
    const image = ref('')

    const db = useFirestore()
    const categorys = useCollection(collection(db, 'categorias'))

    function createProduct() {
        addDoc(collection(db, 'productos'), {
            title: name.value,
            category: category.value,
            description: description.value,
            price: price.value,
            image: image.value
        })

        router.push('/admin-panel')
    }

    const storage = getStorage();
    const storageRef = ref2(storage, 'images');

    const fileInput = ref();
    function subidaArchivo() {
        // console.log(fileInput.value.files[0])
        const file = fileInput.value.files[0];
        const fileRef = ref2(storageRef, file.name);
        uploadBytes(fileRef, file).then((snapshot) => {
            getDownloadURL(fileRef).then((url) => {
                image.value = url;
                console.log(image.value)
            });
        });
    }
</script>

<template>
    <h2>Crear producto</h2>
    <form @submit.prevent="createProduct">
        <label for="name">Nombre</label>
        <input type="text" id="name" v-model="name" />

        <label for="category">Categoria</label>
        <select id="category" v-model="category">
            <option v-for="category in categorys" :key="category.id" :value="category.id">{{ category.name }}</option>
        </select>
        <br>

        <label for="description">Descripcion</label>
        <textarea id="description" v-model="description"></textarea>
        <br>

        <label for="price">Precio</label>
        <input type="number" id="price" step="0.01" v-model="price" />
        <br>

        <label for="file">Imagen</label>
        <input type="file" name="file" ref="fileInput" @change="subidaArchivo" />

        <button type="submit">Crear producto</button>
    </form>
</template>