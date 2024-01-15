export const useCounter = () => {
    return useState<number>('counter', () => ref(0))
}