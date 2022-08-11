import { createRouter, createWebHistory } from 'vue-router';
import InlineSampleComponent from '../views/InlineSampleComponent.vue';
import DialogSampleComponent from '../views/DialogSampleComponent.vue';
import CustomEventSampleComponent from '../views/CustomEventSampleComponent.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/inline',
            component: InlineSampleComponent
        },
        {
            path: '/dialog',
            component: DialogSampleComponent
        },
        {
            path: '/custom-event',
            component: CustomEventSampleComponent
        },
        {
            path: '/:pathMatch(.*)*',
            redirect: '/inline'
        }
    ]
});

export default router;
