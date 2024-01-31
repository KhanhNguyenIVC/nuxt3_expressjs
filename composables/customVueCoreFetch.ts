import { useAsyncState } from '@vueuse/core'
import axios from 'axios'

export const useCustomVueCoreFetch = (method: string, url: string, data?: object) => {
    return useAsyncState(
        axios
            .get('https://jsonplaceholder.typicode.com/todos/1')
            .then(t => t.data),
        { id: null },)
}