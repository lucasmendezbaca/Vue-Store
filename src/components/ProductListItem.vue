<script setup>
    const props = defineProps({
        product: {
            type: Object,
            required: true
        },
        files: {
            type: Array,
            required: true
        }
    })

    // for (const image of images) {
    //     console.log(image)
    // }
    // console.log(props.files)
</script>

<template>
    <h3>{{ props.product.title }}</h3>
    <img :src=props.product.image alt="">
</template>