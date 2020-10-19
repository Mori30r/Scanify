export const imageReducer = (state, action) => {
    switch (action.type){
        case 'SET_COLOR':
            return {
                ...state,
                color: action.color
            }
        case 'SET_TEXT':
            return {
                ...state,
                text: action.text
            }
        case 'SET_HEX':
            return {
                ...state,
                hex: action.hex
            }
        case 'RESET':
            return {
                ...state,
                color: undefined,
                text: undefined,
                hex: undefined
            }
    }
}