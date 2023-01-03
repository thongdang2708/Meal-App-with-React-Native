import {View, Text, FlatList} from "react-native";
import { MEALS } from "../data/dummy-data";
import SingleMeal from "../components/SingleMeal/SingleMeal";
import { CATEGORIES } from "../data/dummy-data";
import { useLayoutEffect } from "react/cjs/react.development";


function MealsOverview({route, navigation}) {

    let catId = route.params.categoryId;

    let filteredData = MEALS.filter((meal) => {
        return meal.categoryIds.indexOf(catId) >= 0;
    }); 

    useLayoutEffect(() => {
        let categoryTitle = CATEGORIES.find((category) => category.id === catId).title;

        navigation.setOptions({
            title: categoryTitle
        });
    },[catId]);
    
    const renderSingleMeal = (itemData) => {

        const allVariables = {
            title: itemData.item.title,
            color: itemData.item.color,
            imageUrl: itemData.item.imageUrl,
            duration: itemData.item.duration,
            complexity: itemData.item.complexity,
            affordability: itemData.item.affordability
        };

        const handleChangeView = () => {
            navigation.navigate("MealDetail", {
                mealId: itemData.item.id
            });
        }

        return <SingleMeal {...allVariables} onPress={handleChangeView}/>

    };


  return (
   <View>
       <FlatList data={filteredData} renderItem={renderSingleMeal} keyExtractor={(item, index) => {
           return item.id;
       }}
       
       />
   </View>
  )
}

export default MealsOverview