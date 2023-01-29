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
    <div class="main_create-product">
        <h2>Crear producto</h2>
        <form class="form">
            <div class="form__input_div--admin">
                <label for="name">Nombre</label>
                <input type="text" id="name" v-model="name" />
            </div>

            <div class="form__input_div--admin">
                <label for="category">Categoria</label>
                <select id="category" v-model="category">
                    <option v-for="category in categorys" :key="category.id" :value="category.id">{{ category.name }}</option>
                </select>
            </div>

            <div class="form__input_div--admin">
                <label for="description">Descripcion</label>
                <br>
                <textarea cols="40" rows="5" id="description" v-model="description"></textarea>
            </div>

            <div class="form__input_div--admin">
                <label for="price">Precio</label>
                <input type="number" id="price" step="0.01" v-model="price" />
            </div>

            <div class="form__input_div--admin">
                <label for="file">Imagen</label>
                <input type="file" name="file" ref="fileInput" @change="subidaArchivo" />
            </div>

            <button class="button" type="button" @click="createProduct">Crear producto</button>
        </form>
    </div>
</template>