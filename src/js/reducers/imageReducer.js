export const imageReducer = (state, action) => {
    switch (action.type){
        case 'SET_IMAGE':
            return {
                ...state,
                color: action.color,
                hex: action.hex,
                text: action.text
            }
        case 'RESET':
            return {
                ...state,
                color: 'ffffff',
                text: undefined,
                hex: undefined
            }
    }
}