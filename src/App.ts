import type {
    Ref,
} from 'vue';

import {
    ref as r,
    useCssModule,
    defineComponent,
} from 'vue';


import Preparation from './components/Preparation/Preparation.vue'
import Introduction from './components/Introduction/Introduction.vue'
import ContentArea from './components/ContentArea/ContentArea.vue'

export default defineComponent({
    name: 'App',
    components: {
        Preparation,
        Introduction,
        ContentArea,
    },
    setup() {
        const $style = useCssModule();
        const classList: Ref<string[]> = r([
            $style['App'],
        ]);

        return {
            classList,
        };
    },
});
