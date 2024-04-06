import type {
    Ref,
    PropType,
} from 'vue';

import {
    ref as r,
    useCssModule,
    defineComponent,
} from 'vue';

export default defineComponent({
    name: 'ContentArea',
    props: {
        headline: {
            type: String as PropType<string>,
            required: true,
        }
    },
    setup() {
        const $style = useCssModule();
        const classList: Ref<string[]> = r([
            $style['ContentArea'],
        ]);

        return {
            classList,
        };
    },
});
