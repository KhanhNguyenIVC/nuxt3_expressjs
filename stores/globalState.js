/** Package: @vueuse/core */
import { createGlobalState } from '@vueuse/core'

export const useGlobalState = createGlobalState((initialValue) => {
    // regis the state
    const countGlobal = ref(initialValue ?? 0)

    //getters
    const doubleCountGlobal = computed(() => countGlobal.value * 2)

    //actions
    const increment = () => {
        countGlobal.value++
    }

    const reset = () => {
        countGlobal.value = 0
    }

    return { countGlobal, doubleCountGlobal, increment, reset }
})