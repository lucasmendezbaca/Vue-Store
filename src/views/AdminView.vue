<script setup>
    import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <div class="container">
        <h1>Administración</h1>
        <!-- <ul>
            <li>
                <RouterLink to="/admin-panel">Productos</RouterLink>
            </li>
            <li>
                <RouterLink to="/admin-panel/categorys">Categorias</RouterLink>
            </li>
        </ul> -->

        <RouterView />
    </div>
</template>