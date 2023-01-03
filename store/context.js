
import { createContext } from "react/cjs/react.development";
import { useState } from "react/cjs/react.development";

const FavoriteContext = createContext({
    favorIds: [2],
    addFavorite: (id) => {},
    deleteFavorite: (id) => {}
});

export const FavoriteProvider = ({children}) => {

    let [favoriteIds, setFavoriteIds] = useState([]);

    const addFavorite = (id) => {

        setFavoriteIds((prevIds) => {
            return [...prevIds, id]
        });

    };

    const deleteFavorite = (id) => {
        setFavoriteIds((prevIds) => {
            return prevIds.filter((favorId) => favorId != id);
        });
    }


    return (<FavoriteContext.Provider value={{
       favorIds: favoriteIds,
       addFavorite: addFavorite,
       deleteFavorite: deleteFavorite
    }}>
        {children}
    </FavoriteContext.Provider>)
};

export default FavoriteContext;
