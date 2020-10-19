export const loadingReducer = (state, action) => {
    switch (action.type){
        case 'LOADING':
            return 'loading';
        case 'OFF':
            return 'off';
        case 'ON':
            return 'on';
    }
}