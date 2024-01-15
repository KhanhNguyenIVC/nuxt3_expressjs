export const useEmployee = () => {
    return useState<object>('employeState', () => reactive({
        firstName: 'default first name',
        lastName: 'default last name'
    }))
}