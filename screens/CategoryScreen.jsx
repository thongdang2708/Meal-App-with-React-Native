import {View, Text, StyleSheet, useWindowDimensions, FlatList} from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import SingleCategory from "../components/SingleCategory/SingleCategory";

function CategoryScreen({navigation}) {

  const {width, height} = useWindowDimensions();

  let marginTopSet = height < 500 ? 20 : 60;

  const renderSingleCategory = (itemData) => {

    const handleChangeView = () => {

      navigation.navigate("MealOverview", {
        categoryId: itemData.item.id
      })
    };

  
    return <SingleCategory title={itemData.item.title} color={itemData.item.color} onPress={handleChangeView}/>

  };


  return (
    <View style={[{marginTop: marginTopSet}]}>
        <FlatList data={CATEGORIES} renderItem={renderSingleCategory} keyExtractor={(item, index) => {
          return item.id;
        }} 
        numColumns="2"
        />
    </View>
  )
}

const styles = StyleSheet.create({

});

export default CategoryScreen