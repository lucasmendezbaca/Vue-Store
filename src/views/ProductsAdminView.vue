<script setup>
    import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <h2>Productos</h2>
    <ul>
        <li>
            <RouterLink to="/admin-panel">Lista productos</RouterLink>
        </li>
        <li>
            <RouterLink to="/admin-panel/crear-producto">Crear Producto</RouterLink>
        </li>
    </ul>

    <RouterView />
</template>