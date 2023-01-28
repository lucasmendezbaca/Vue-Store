<script setup>
    import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <h1>Administración</h1>
    <ul>
        <li>
            <RouterLink to="/admin-panel">Productos</RouterLink>
        </li>
        <li>
            <RouterLink to="/admin-panel/categorys">Categorias</RouterLink>
        </li>
    </ul>

    <RouterView />

</template>