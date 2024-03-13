import type {
    Ref,
} from 'vue';

import {
    ref as r,
    useCssModule,
    defineComponent,
} from 'vue';

export default defineComponent({
    name: 'HelloWorld',
    setup() {
        const $style = useCssModule();
        const classList: Ref<string[]> = r([
            $style['HelloWorld'],
        ]);

        return {
            classList,
        };
    },
});
