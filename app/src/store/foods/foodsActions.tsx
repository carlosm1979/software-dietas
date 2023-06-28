export const provideFoodList = (list: any) => {
    return {
        type: 'PROVIDE_FOODS',
        payload: list
    }
}