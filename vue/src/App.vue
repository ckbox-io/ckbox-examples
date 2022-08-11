<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import 'ckbox/dist/styles/ckbox.css';
</script>

<template>
    <div id="app">
        <h1>CKBox – Vue.js Development Sample</h1>

        <ul className="route__list">
            <li className="route__list-item">
                <RouterLink to="/inline">Inline</RouterLink>
            </li>
            <li className="route__list-item">
                <RouterLink to="/dialog">Dialog</RouterLink>
            </li>
            <li className="route__list-item">
                <RouterLink to="/custom-event">With custom event</RouterLink>
            </li>
        </ul>

        <RouterView></RouterView>
    </div>
</template>

<style scoped>
body {
    max-width: 800px;
    margin: 20px auto;
}

.route__list {
    list-style-type: none;
}
</style>
