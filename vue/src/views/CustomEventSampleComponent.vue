<template>
    <section>
        <h3>Inline CKBox with custom event handler</h3>
        <div ref="ckbox" className="ckbox-container"></div>
        <ul>
            <li v-for="item in state.selectedItems">
                {{ item.id }} - {{ item.name }} -
                <a target="_blank" v-bind:href="item.url">{{ item.url }}</a>
            </li>
        </ul>
    </section>
</template>

<script setup lang="ts">
import * as CKBox from 'ckbox';
import { onMounted, reactive, ref } from 'vue';

const ckbox = ref();
const state = reactive({
    selectedItems: [] as { id: string; name: string; url?: string }[]
});

onMounted(() => {
    CKBox.mount(ckbox.value, {
        tokenUrl: 'https://your.token.url',
        assets: {
            onChoose: (assets) => {
                state.selectedItems = assets.map(({ data }) => ({
                    id: data.id,
                    name: data.name,
                    url: data.url
                }));
            }
        }
    });
});
</script>

<style scoped>
.ckbox-container {
    height: 600px;
    width: 800px;
}
</style>
