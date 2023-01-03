
export const favoriteReducer = (state = {favoriteIds: []}, action) => {

    switch (action.type) {
        case "ADD_FAVORITE":
            return {
                ...state,
                favoriteIds: action.payload
            }
        case "DELETE_FAVORITE":
            return {
                ...state,
                favoriteIds: action.payload
            }
        default:
            return state
    }

};



