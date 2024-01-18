import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
    state: () => ({ count: 1, name: 'Default pinia' }),
    getters: {
        doubleCount: (state) => state.count * 2,
    },
    actions: {
        increment() {
            this.count++
        },
        clear() {
            this.count = 1
            this.name = 'Default pinia'
        }
    },
})