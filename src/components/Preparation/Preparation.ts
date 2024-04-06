import type {
    Ref,
} from 'vue';

import {
    ref as r,
    useCssModule,
    defineComponent,
} from 'vue';

export default defineComponent({
    name: 'Preparation',
    setup() {
        const $style = useCssModule();
        const classList: Ref<string[]> = r([
            $style['Preparation'],
        ]);

        return {
            classList,
        };
    },
});
