
export const addFavorite = (id) => async (dispatch, getState) => {

    let newArray = getState().favorite.favoriteIds;

    let addedArray = [...newArray, id];

    dispatch({
        type: "ADD_FAVORITE",
        payload: addedArray
    })
  
};



export const deleteFavorite = (id) => async (dispatch) => {

    let newArray = getState().favorite.favoriteIds;

    let deletedArray = newArray.filter((item) => item != id);
   dispatch({
        type: "DELETE_FAVORITE",
        payload: deletedArray
   });
   
};