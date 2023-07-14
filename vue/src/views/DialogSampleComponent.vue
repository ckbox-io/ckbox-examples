<template>
    <section>
        <h3>Dialog CKBox</h3>
        <button @click="toggleDialog">Toggle dialog</button>
        <div ref="ckbox"></div>
    </section>
</template>

<script setup lang="ts">
import * as CKBox from 'ckbox';
import { reactive, ref } from 'vue';

const ckbox = ref();
const state = reactive({ isOpen: false, unmountCallback: () => {} });

function toggleDialog() {
    if (state.isOpen) {
        state.isOpen = false;
        state.unmountCallback();
    } else {
        const { unmount } = CKBox.mount(ckbox.value, {
            tokenUrl: 'https://dev.ckbox.io/demo/token/',
            dialog: {
                height: 600,
                width: 800,
                onClose: () => {
                    state.isOpen = false;
                }
            }
        });

        state.isOpen = true;
        state.unmountCallback = unmount;
    }
}
</script>

<style scoped></style>
