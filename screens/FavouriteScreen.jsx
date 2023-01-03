import {View, Text, FlatList} from "react-native";
import { useContext, } from "react/cjs/react.development";
import FavoriteContext from "../store/context";
import { MEALS } from "../data/dummy-data";
import SingleMeal from "../components/SingleMeal/SingleMeal";
import { useSelector } from "react-redux";
function FavouriteScreen() {

    let {favoriteIds} = useSelector(state => state.favorite);

    let meals = MEALS.filter((singleMeal) => {
        return favoriteIds.includes(singleMeal.id);
    });
    

  
    const renderSingleMeal = (itemData) => {

        const allVariables = {
            title: itemData.item.title,
            imageUrl: itemData.item.imageUrl,
            duration: itemData.item.duration,
            complexity: itemData.item.complexity,
            affordability: itemData.item.affordability
        }

        return <SingleMeal {...allVariables}/>
    };

  return (
    <View>
        <FlatList data={meals} renderItem={renderSingleMeal} keyExtractor={(item, index) => {
            return item.id
        }}/>
    </View>
  )
}

export default FavouriteScreen