export const imageReducer = (state, action) => {
    switch (action.type){
        case 'SET_IMAGE':
            return {
                ...state,
                color: action.color,
                hex: action.hex,
                text: action.text,
                hexOrSelect: action.hexOrSelect
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