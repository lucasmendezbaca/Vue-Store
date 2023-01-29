<script setup>
    const props = defineProps({
        product: {
            type: Object,
            required: true
        }
    })

    const emit = defineEmits(['deleteProduct', 'editProduct'])

    function deleteProduct() {
        emit('deleteProduct', props.product.id)
    }

    function editProduct() {
        emit('editProduct', props.product.id, props.product.title, props.product.category, props.product.description, props.product.price, props.product.image)
    }

</script>

<template>
    <!-- Maquetar el producto en la lista -->
    <div class="product-list-item">
        <img class="product-list__img" :src=props.product.image alt="">
        <p>{{ props.product.title }}</p>
        <p>{{ props.product.price }} €</p>
        <button @click="deleteProduct">Eliminar</button>
        <button @click="editProduct">Editar</button>
    </div>
    <!-- <h3>{{ props.product.title }}</h3>
    <img :src=props.product.image alt=""> -->
</template>