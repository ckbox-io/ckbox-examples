<template>
    <section>
        <h3>Inline CKBox</h3>
        <div ref="ckbox" className="ckbox-container"></div>
    </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import * as CKBox from 'ckbox';

const ckbox = ref();

onMounted(() => {
    CKBox.mount(ckbox.value, {
        tokenUrl: 'https://your.token.url/'
    });
});
</script>

<style scoped>
.ckbox-container {
    height: 600px;
    width: 800px;
}
</style>
